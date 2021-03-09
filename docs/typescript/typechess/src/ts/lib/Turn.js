"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
/**
 * Turn
 *
 * Half-turn or action of one team (white OR black).
 */
var Turn = /** @class */ (function () {
    function Turn(piece, moveTo) {
        this.capture = null;
        this.endCoord = '';
        this.movedPiece = null;
        this.side = null;
        this.startCoord = '';
        this.msgs = new Array();
        this.castleRookId = null;
        if (moveTo.length == 2) {
            this.movedPiece = piece;
            this.side = this.movedPiece.side;
            this.startCoord = this.movedPiece.getCoord();
            this.endCoord = moveTo;
            return this;
        }
        return null;
    }
    return Turn;
}());
exports.Turn = Turn;
//# sourceMappingURL=Turn.js.map