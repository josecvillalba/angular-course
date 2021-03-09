"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessAi = void 0;
var King_1 = require("./pieces/King");
var Pawn_1 = require("./pieces/Pawn");
var Rook_1 = require("./pieces/Rook");
var ChessAi = /** @class */ (function () {
    function ChessAi(board) {
        this.board = board;
    }
    ChessAi.prototype.detectCheck = function (kingCoord, assaultTeam) {
        for (var i = 0; i < assaultTeam.pieces.length; i++) {
            var piece = assaultTeam.pieces[i];
            if (!piece.captured) {
                piece.canMove(this.board);
                if (piece.possibleMoves.includes(kingCoord)) {
                    return true;
                }
            }
        }
        return false;
    };
    ChessAi.prototype.detectCheckMate = function (defTeam, offTeam) {
        var _this = this;
        var checkMate = true;
        defTeam.pieces.forEach(function (piece) {
            var coords = new Array(), startCell = _this.board.getCellByCoord(piece.getCoord());
            if (!piece.captured) {
                coords = piece.canMove(_this.board);
                coords.forEach(function (coord) {
                    var endCell = _this.board.getCellByCoord(coord), origPiece = endCell.piece, kingCoord, hasMoved = false;
                    if (piece instanceof Pawn_1.Pawn || piece instanceof Rook_1.Rook || piece instanceof King_1.King)
                        hasMoved = piece.hasMoved;
                    piece.possibleMoves = [coord];
                    piece.move(endCell);
                    kingCoord = defTeam.pieces[15].getCoord();
                    if (!_this.detectCheck(kingCoord, offTeam))
                        checkMate = false;
                    endCell.piece = null;
                    piece.possibleMoves = [startCell.getCoord()];
                    piece.move(startCell);
                    if (piece instanceof Pawn_1.Pawn || piece instanceof Rook_1.Rook || piece instanceof King_1.King)
                        piece.hasMoved = hasMoved;
                    if (origPiece != null)
                        endCell.piece = origPiece;
                    if (checkMate == false)
                        return checkMate;
                });
            }
        });
        return checkMate;
    };
    ChessAi.prototype.takeTurn = function (team) {
        var _this = this;
        if (this.side !== null) {
            var movingPieces_1 = [], attackingPieces_1 = [], rndIndex = void 0, moveTo_1;
            // determine piece to move
            team.pieces.forEach(function (piece, i) {
                var moves = piece.canMove(_this.board);
                if (moves.length > 0 && !piece.captured) {
                    movingPieces_1.push(piece);
                    moves.forEach(function (coord) {
                        var cell = _this.board.getCellByCoord(coord);
                        if (cell.isOccupied()) {
                            attackingPieces_1.push({
                                "piece": piece,
                                "coord": coord,
                                "value": cell.piece.value
                            });
                        }
                    });
                }
            });
            // determine move to make based on attack value
            if (attackingPieces_1.length > 0) {
                var move = void 0;
                attackingPieces_1.sort(function (a, b) {
                    if (a.value > b.value)
                        return -1;
                    if (a.value < b.value)
                        return 1;
                    return 0;
                });
                move = attackingPieces_1[0];
                team.activePiece = move.piece;
                // trigger startTurn on match
                return this.board.getCellByCoord(move.coord);
            }
            // determine move to make randomly
            rndIndex = Math.floor(Math.random() * movingPieces_1.length);
            team.activePiece = movingPieces_1[rndIndex];
            rndIndex = Math.floor(Math.random() * team.activePiece.possibleMoves.length);
            moveTo_1 = team.activePiece.possibleMoves[rndIndex];
            // trigger startTurn on match
            return this.board.getCellByCoord(moveTo_1);
        }
    };
    return ChessAi;
}());
exports.ChessAi = ChessAi;
//# sourceMappingURL=ChessAi.js.map