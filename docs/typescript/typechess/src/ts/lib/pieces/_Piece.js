"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var globals_1 = require("../../globals");
var Cell_1 = require("../Cell");
var Piece = /** @class */ (function () {
    function Piece(side, type) {
        // protected
        // protected _cell: Cell = null;
        this._coord = '';
        this._forward = 1;
        // public
        this.active = false;
        this.captured = false;
        this.possibleMoves = new Array();
        this.side = globals_1.SIDE.white;
        this.type = globals_1.PIECETYPE.pawn;
        this.value = 100;
        this.side = side;
        this.type = type;
        this._forward = this.side == globals_1.SIDE.white ? 1 : -1; // -1 = down, 1 = up
        this._id = globals_1.GENERATE_GUID();
    }
    Piece.prototype._iterateMoves = function (board, coord, incFile, incRank) {
        var moves = new Array();
        while (board.cellInBounds(coord)) {
            var file = globals_1.FILE[coord[0]];
            var rank = parseInt(coord[1]);
            var nextFile = file + incFile;
            var nextRank = rank + incRank;
            if (coord != this.getCoord()) {
                var cell = board.getCellByCoord(coord);
                if (cell.isOccupied()) {
                    if (cell.piece.side != this.side) {
                        moves.push(coord);
                        cell.possibleMove = true;
                    }
                    break;
                }
                moves.push(coord);
                cell.possibleMove = true;
            }
            coord = "" + globals_1.FILE[nextFile] + (nextRank);
        }
        return moves;
    };
    Piece.prototype.canMove = function (board) {
        console.error("Piece.canMove: canMove has not been implemented!");
        return [];
    };
    Piece.prototype.draw = function (img, ctx, xPos, yPos, cellWidth) {
        var clipX = img.naturalWidth - (this.type * globals_1.PIECESPRITEWIDTH), clipY = this.side == globals_1.SIDE.white ? 0 : globals_1.PIECESPRITEWIDTH, clipWidth = globals_1.PIECESPRITEWIDTH, clipHeight = globals_1.PIECESPRITEWIDTH;
        ctx.drawImage(img, clipX, clipY, clipWidth, clipHeight, xPos, yPos, cellWidth, cellWidth);
    };
    Piece.prototype.getCoord = function () {
        return this._coord;
    };
    Piece.prototype.getDiagMoves = function (board, forward, right) {
        var coord = this.getCoord(), incFile = right ? 1 : -1, incRank = (forward ? 1 : -1) * this._forward;
        return this._iterateMoves(board, coord, incFile, incRank);
    };
    Piece.prototype.getId = function () {
        return this._id;
    };
    Piece.prototype.getPerpMoves = function (board, vertical, positive) {
        var coord = this.getCoord(), incFile = !vertical ? (positive ? 1 : -1) : 0, incRank = vertical ? (positive ? 1 : -1) * this._forward : 0;
        return this._iterateMoves(board, coord, incFile, incRank);
    };
    Piece.prototype.getPieceType = function () {
        return globals_1.CAPITALIZE(globals_1.PIECETYPE[this.type]);
    };
    Piece.prototype.getSide = function () {
        return globals_1.CAPITALIZE(globals_1.SIDE[this.side]);
    };
    Piece.prototype.overrideCoord = function (coord) {
        this._coord = coord;
    };
    Piece.prototype.move = function (cell) {
        // check if I can be moved to this cell...
        if (cell instanceof Cell_1.Cell && this.possibleMoves.includes(cell.getCoord())) {
            this._coord = cell.getCoord();
            cell.piece = this;
            this.possibleMoves = [];
            return true;
        }
        return false;
    };
    return Piece;
}());
exports.Piece = Piece;
//# sourceMappingURL=_Piece.js.map