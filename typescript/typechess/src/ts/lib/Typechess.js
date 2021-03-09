"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typechess = void 0;
var globals_1 = require("../globals");
var Board_1 = require("./Board");
var ChessAi_1 = require("./ChessAi");
var ChessUi_1 = require("./ui/ChessUi");
var Match_1 = require("./Match");
var Modal_1 = require("./ui/Modal");
var SaveGame_1 = require("./ui/SaveGame");
var Team_1 = require("./Team");
var Turn_1 = require("./Turn");
/**
 * Typechess
 * ---------
 * Simple chess engine written in TypeScript.
 */
var Typechess = /** @class */ (function () {
    function Typechess(canvas, pieces_img, ui_div) {
        var _this = this;
        this.board = new Board_1.Board(canvas, pieces_img);
        this.ai = new ChessAi_1.ChessAi(this.board);
        this.ui = new ChessUi_1.ChessUi(ui_div);
        this.match = new Match_1.Match(new Team_1.Team(globals_1.SIDE.white), new Team_1.Team(globals_1.SIDE.black), this.ai);
        this.match.executeMoveCallback = function (activeTeam, cell) { return _this.executeMove(activeTeam, cell); };
        this.match.updateStatusCallback = function (msg) { return _this.updateStatus(msg); };
        this.setupPieces(this.match.team1);
        this.setupPieces(this.match.team2);
        this.ui.callback_load = function (savedGame) { return _this.loadGame(savedGame); };
        this.ui.callback_reset = function (e) { return _this.reset(); };
        this.ui.callback_save = function (saveName) { return _this.saveGame(saveName); };
        this.ui.callback_undo = function (e) { return _this.undoMove(); };
        this.ui.callback_engage_ai = function (side, disengage) {
            if (disengage === void 0) { disengage = false; }
            return _this.engageAi(side, disengage);
        };
        return this;
    }
    Typechess.prototype.clearPossible = function () {
        this.board.clearPossible();
        this.match.clearPossible();
    };
    Typechess.prototype.click = function (event) {
        var cell = this.board.getCellByPixels(event.offsetX, event.offsetY);
        var activeTeam = this.match.team1.side == this.match.whosTurn() ? this.match.team1 : this.match.team2;
        if (!this.match.checkmate) {
            // do nothing if it's the ai's turn
            if (this.match.ai_engaged && activeTeam.side == this.ai.side)
                return;
            // select a piece to move
            if (cell && cell.isOccupied() && cell.piece.side == activeTeam.side) {
                var piece = cell.piece;
                this.clearPossible();
                activeTeam.activePiece = piece;
                piece.canMove(this.board);
                this.draw();
            }
            // move a piece to a possible cell
            else if (activeTeam.activePiece != null && cell.possibleMove) {
                this.executeMove(activeTeam, cell);
            }
            // de-select a piece to move
            else {
                this.clearPossible();
                this.draw();
            }
        }
    };
    Typechess.prototype.draw = function () {
        this.board.draw();
        this.ui.draw(this.match.getWhiteTeam().getScore(), this.match.getBlackTeam().getScore(), this.match.turns);
    };
    Typechess.prototype.engageAi = function (sideNum, disengage) {
        if (disengage === void 0) { disengage = false; }
        var side = globals_1.SIDE[sideNum];
        if (!disengage) {
            var aiTeam = side == globals_1.SIDE[globals_1.SIDE.black] ? this.match.getBlackTeam() : this.match.getWhiteTeam();
            this.ai.side = aiTeam.side;
            this.match.ai_engaged = true;
            if (this.ai.side == this.match.whosTurn()) {
                var moveTo_1 = this.ai.takeTurn(aiTeam);
                this.executeMove(aiTeam, moveTo_1);
            }
        }
        else {
            this.ai.side = null;
            this.match.ai_engaged = false;
            // console.log("ai disengaged");
        }
    };
    Typechess.prototype.executeMove = function (activeTeam, cell) {
        var turnSuccess = false;
        this.match.startTurn(activeTeam.activePiece, cell);
        this.board.getCellByCoord(activeTeam.activePiece.getCoord()).piece = null;
        if (activeTeam.activePiece.type == globals_1.PIECETYPE.king) {
            var king = activeTeam.activePiece;
            var latestTurn = this.match.turns[this.match.turns.length - 1];
            latestTurn.castleRookId = king.castleMove(cell, this.board);
            ;
        }
        else {
            activeTeam.activePiece.move(cell);
        }
        turnSuccess = this.match.finishTurn();
        if (!turnSuccess) {
            this.undoMove();
            // we're assuming the only move you can't really make is to put you're own king in check
            this.updateStatus(activeTeam.getSide() + " tried to sacrifice their king!");
            return false;
        }
        this.clearPossible();
        this.draw();
        return true;
    };
    Typechess.prototype.loadGame = function (savedGame) {
        var _this = this;
        // let saveGame = JSON.parse(window.localStorage.getItem("Typechess_Save"));
        var modalTitle = "Load Game";
        var assignPieceProperties = function (piece, i, teamObj) {
            var pieceObj = teamObj.pieces[i];
            var cell = _this.board.getCellByCoord(piece.getCoord());
            piece.captured = pieceObj.captured;
            cell.piece = null;
            if (!piece.captured) {
                piece.possibleMoves = [pieceObj._coord];
                piece.move(_this.board.getCellByCoord(pieceObj._coord));
            }
        };
        if (!savedGame) {
            (new Modal_1.Modal(modalTitle, "ERROR: Game not found!", [false, true], true)).show();
            return;
        }
        // reset match to start
        this.reset();
        // place pieces in last known position
        this.match.team1.pieces.forEach(function (piece, i) {
            assignPieceProperties(piece, i, savedGame.team1);
        });
        this.match.team2.pieces.forEach(function (piece, i) {
            assignPieceProperties(piece, i, savedGame.team2);
        });
        // update team captures
        if (savedGame.team1.captures && savedGame.team1.captures instanceof Array) {
            savedGame.team1.captures.forEach(function (capObj) {
                _this.match.team1.captures.push(capObj);
            });
        }
        if (savedGame.team2.captures && savedGame.team2.captures instanceof Array) {
            savedGame.team2.captures.forEach(function (capObj) {
                _this.match.team2.captures.push(capObj);
            });
        }
        // update turn collection
        if (savedGame.turns && savedGame.turns instanceof Array) {
            savedGame.turns.forEach(function (turnObj) {
                var team = turnObj.side == globals_1.SIDE.white ? _this.match.getWhiteTeam() : _this.match.getBlackTeam();
                var piece = team.getPieceById(turnObj.movedPiece._id) || team.pieces[turnObj.movedPiece._id];
                var startCoord = piece.getCoord();
                var turn;
                piece.overrideCoord(turnObj.startCoord);
                turn = new Turn_1.Turn(piece, turnObj.endCoord);
                piece.overrideCoord(startCoord);
                turn.msgs = turnObj.msgs;
                turn.capture = turnObj.capture;
                turn.castleRookId = turnObj.castleRookId;
                _this.match.turns.push(turn);
            });
        }
        // re-draw board and UI
        this.draw();
        (new Modal_1.Modal(modalTitle, "\"" + savedGame.name + "\" loaded successfully!")).show();
    };
    Typechess.prototype.reset = function () {
        this.constructor(this.board.canvas, this.board.pieces_img, this.ui.getUiDiv());
        this.draw();
    };
    Typechess.prototype.saveGame = function (name) {
        var confirmModal = new Modal_1.Modal();
        confirmModal.title = "Save Game";
        if (name.length > 0) {
            var saveGame = new SaveGame_1.SaveGame(name, this.match.team1, this.match.team2, this.match.turns);
            window.localStorage.setItem(globals_1.SAVEGAMEPREFIX + "_" + name, JSON.stringify(saveGame));
            confirmModal.message = "Game successfully saved as \"" + name + "\"!";
            confirmModal.show();
        }
        else {
            confirmModal = new Modal_1.Modal(confirmModal.title, "ERROR! You must enter a save name!  Please try again.", [false, true], true);
            confirmModal.show();
        }
    };
    Typechess.prototype.setupPieces = function (team) {
        var _this = this;
        var filesArr = Object.keys(globals_1.FILE), pawnRank = team.side == globals_1.SIDE.white ? "2" : "7", rank = team.side == globals_1.SIDE.white ? '1' : '8';
        team.pieces.forEach(function (piece, i) {
            var coord = '';
            // pawns
            if (i < filesArr.length && piece.type == globals_1.PIECETYPE.pawn)
                coord = filesArr[i + (filesArr.length / 2)] + pawnRank;
            // rooks
            else if (i == 8)
                coord = "a" + rank;
            else if (i == 9)
                coord = "h" + rank;
            // knights
            else if (i == 10)
                coord = "b" + rank;
            else if (i == 11)
                coord = "g" + rank;
            // bishops
            else if (i == 12)
                coord = "c" + rank;
            else if (i == 13)
                coord = "f" + rank;
            // royalty
            else if (i == 14)
                coord = "d" + rank;
            else if (i == 15)
                coord = "e" + rank;
            piece.move(_this.board.getCellByCoord(coord));
        });
    };
    Typechess.prototype.undoMove = function () {
        if (this.match.turns.length == 0)
            return;
        var latestTurn = this.match.turns[this.match.turns.length - 1];
        var piece = latestTurn.movedPiece;
        var capturedPiece = latestTurn.capture;
        var team = latestTurn.side == globals_1.SIDE.white ? this.match.getWhiteTeam() : this.match.getBlackTeam();
        // move the piece to it's previous position
        this.board.getCellByCoord(piece.getCoord()).piece = null;
        piece.possibleMoves = [latestTurn.startCoord];
        piece.move(this.board.getCellByCoord(latestTurn.startCoord));
        // remove hasMoved where applicable
        if (piece.type == globals_1.PIECETYPE.rook || piece.type == globals_1.PIECETYPE.pawn || piece.type == globals_1.PIECETYPE.king) {
            var p = piece;
            if (p.hasMoved != null && p.origCoord != null
                && p.origCoord.includes(latestTurn.startCoord)) {
                p.hasMoved = false;
            }
        }
        // replace any captured piece
        if (capturedPiece != null) {
            var offTeam = team;
            var defTeam = team.side == globals_1.SIDE.white ? this.match.getBlackTeam() : this.match.getWhiteTeam();
            for (var i = 0; i < defTeam.pieces.length; i++) {
                var capPieceInst = defTeam.pieces[i];
                if (capPieceInst.captured && capPieceInst.getId() == capturedPiece._id) {
                    capPieceInst.captured = false;
                    capPieceInst.possibleMoves = [latestTurn.endCoord];
                    capPieceInst.move(this.board.getCellByCoord(latestTurn.endCoord));
                    break;
                }
            }
            if (this.match.checkmate) {
                // remove the defensive king from the offensive captures
                offTeam.captures.pop();
            }
            // remove captured pieces from Team.captured
            offTeam.captures.pop();
        }
        // undo rook castle
        if (latestTurn.castleRookId != null) {
            var rook = team.getPieceById(latestTurn.castleRookId), rookFile = globals_1.FILE[latestTurn.endCoord[1]] == globals_1.FILE.c ? 'a' : 'h', newCoord = rook.getCoord(), rookRank = newCoord[1], oldCoord = rookFile + rookRank;
            rook.possibleMoves.push(oldCoord);
            rook.move(this.board.getCellByCoord(oldCoord));
            rook.hasMoved = false;
            this.board.getCellByCoord(newCoord).piece = null;
        }
        // remove the action from the log
        this.match.turns.pop();
        if (this.match.checkmate)
            this.match.checkmate = false;
        // re-draw the board
        this.draw();
    };
    Typechess.prototype.updateStatus = function (msg) {
        var latestTurn = this.match.turns[this.match.turns.length - 1];
        if (latestTurn != undefined)
            latestTurn.msgs.push(msg);
    };
    return Typechess;
}());
exports.Typechess = Typechess;
//# sourceMappingURL=Typechess.js.map