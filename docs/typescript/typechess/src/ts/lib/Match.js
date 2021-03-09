"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
var globals_1 = require("../globals");
var Turn_1 = require("./Turn");
var Match = /** @class */ (function () {
    function Match(team1, team2, ai) {
        this.checkmate = false;
        this.turns = new Array();
        this.ai_engaged = false;
        this.ai = ai;
        this.team1 = team1;
        this.team2 = team2;
    }
    Match.prototype._executeMove = function (activeTeam, cell) {
        if (typeof (this.executeMoveCallback) == 'function')
            return this.executeMoveCallback(activeTeam, cell);
        return false;
    };
    Match.prototype._updateStatus = function (msg) {
        if (typeof (this.updateStatusCallback) == 'function')
            return this.updateStatusCallback(msg);
        return false;
    };
    Match.prototype.clearPossible = function () {
        this.team1.clearPossible();
        this.team2.clearPossible();
    };
    Match.prototype.finishTurn = function () {
        var nextTeam = this.team1.side == this.whosTurn() ? this.team1 : this.team2;
        var prevTeam = nextTeam.side == this.team1.side ? this.team2 : this.team1;
        if (this.isTeamInCheck(prevTeam, true)) {
            return false;
        }
        else if (this.isTeamInCheck(nextTeam, true) && !this.checkmate) {
            this.checkmate = this.ai.detectCheckMate(nextTeam, prevTeam);
            if (this.checkmate) {
                var capturedKing = nextTeam.getPieceByType(globals_1.PIECETYPE.king);
                this._updateStatus("CHECKMATE!!! " + prevTeam.getSide() + " wins!");
                capturedKing.captured = true;
                prevTeam.captures.push(capturedKing);
                return true;
            }
        }
        // if this is an ai game, trigger the ai turn...
        if (this.ai_engaged && this.whosTurn() == this.ai.side) {
            var aiTeam = this.ai.side == globals_1.SIDE.white ? this.getWhiteTeam() : this.getBlackTeam(), moveTo_1 = this.ai.takeTurn(aiTeam);
            return this._executeMove(aiTeam, moveTo_1);
        }
        return true;
    };
    Match.prototype.getBlackTeam = function () {
        return this.team1.side == globals_1.SIDE.black ? this.team1 : this.team2;
    };
    Match.prototype.getWhiteTeam = function () {
        return this.team1.side == globals_1.SIDE.white ? this.team1 : this.team2;
    };
    Match.prototype.isTeamInCheck = function (defTeam, sendMsgs) {
        if (sendMsgs === void 0) { sendMsgs = false; }
        var kingCoord = defTeam.pieces[15].getCoord(), offTeam = defTeam.side == globals_1.SIDE.white ? this.getBlackTeam() : this.getWhiteTeam();
        if (this.ai.detectCheck(kingCoord, offTeam)) {
            if (sendMsgs)
                this._updateStatus(defTeam.getSide() + "\'s king is in check!");
            defTeam.kingInCheck = true;
            return true;
        }
        else if (defTeam.kingInCheck == true) {
            if (sendMsgs)
                this._updateStatus(defTeam.getSide() + "\'s king is no longer in check!");
            defTeam.kingInCheck = false;
        }
        return false;
    };
    Match.prototype.startTurn = function (piece, moveTo) {
        var activeTurn = new Turn_1.Turn(piece, moveTo.getCoord());
        var activeTeam = piece.side == this.team1.side ? this.team1 : this.team2;
        var msg = activeTeam.getSide() + " moved "
            + activeTeam.activePiece.getPieceType() + "("
            + activeTeam.activePiece.getCoord().toUpperCase() + ") to "
            + moveTo.getCoord().toUpperCase() + ".";
        this.turns.push(activeTurn);
        this._updateStatus(msg);
        // handle captures
        if (moveTo.isOccupied()) {
            var notActiveSide = activeTeam.side == this.team1.side ? this.team2.getSide() : this.team1.getSide();
            var msg2 = activeTeam.getSide() + " captured "
                + notActiveSide + " " + moveTo.piece.getPieceType()
                + "(" + moveTo.getCoord().toUpperCase() + ") \+" + moveTo.piece.value + "pts.";
            var pieceCopy = null;
            moveTo.piece.captured = true;
            pieceCopy = Object.assign({}, moveTo.piece);
            activeTurn.capture = pieceCopy;
            activeTeam.captures.push(pieceCopy);
            this._updateStatus(msg2);
        }
    };
    Match.prototype.whosTurn = function () {
        return this.turns.length % 2 ? globals_1.SIDE.black : globals_1.SIDE.white;
    };
    return Match;
}());
exports.Match = Match;
//# sourceMappingURL=Match.js.map