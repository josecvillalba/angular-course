"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
var globals_1 = require("../../globals");
var _Piece_1 = require("./_Piece");
/**
 * Pawn
 *
 * Contains properties and methods specific to a pawn.
 */
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(side) {
        var _this = _super.call(this, side, globals_1.PIECETYPE.pawn) || this;
        _this.hasMoved = false;
        _this.origCoord = [
            'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
            'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
        ];
        _this.value = 100;
        // init possible starting locations
        _this.possibleMoves = _this.origCoord;
        return _this;
    }
    Pawn.prototype.canMove = function (board) {
        var file = this.getCoord()[0];
        var rank = parseInt(this.getCoord()[1]);
        this.active = true;
        this.possibleMoves = [];
        // can always move forward 1 sq
        var mv1sq = "" + file + (rank + this._forward);
        var cell1 = board.getCellByCoord(mv1sq);
        if (board.cellInBounds(mv1sq) && !cell1.isOccupied()) {
            this.possibleMoves.push(mv1sq);
        }
        // on first move, can move 2 sqs
        var mv2sq = "" + file + (rank + this._forward + this._forward);
        var cell2 = board.getCellByCoord(mv2sq);
        if (!this.hasMoved && board.cellInBounds(mv2sq)
            && !cell2.isOccupied() && !cell1.isOccupied()) {
            this.possibleMoves.push(mv2sq);
        }
        // can only attack diagonally
        var oppSide = this.side == globals_1.SIDE.white ? globals_1.SIDE.black : globals_1.SIDE.white;
        var diagL = "" + globals_1.FILE[(globals_1.FILE[file] - 1)] + (rank + this._forward);
        if (board.cellInBounds(diagL)) {
            var cell = board.getCellByCoord(diagL);
            if (cell.isOccupied() && cell.piece.side == oppSide) {
                this.possibleMoves.push(diagL);
            }
        }
        var diagR = "" + globals_1.FILE[(globals_1.FILE[file] + 1)] + (rank + this._forward);
        if (board.cellInBounds(diagR)) {
            var cell = board.getCellByCoord(diagR);
            if (cell.isOccupied() && cell.piece.side == oppSide) {
                this.possibleMoves.push(diagR);
            }
        }
        // highlight possible moves on the board
        this.possibleMoves.forEach(function (coord) {
            var cell = board.getCellByCoord(coord);
            cell.possibleMove = true;
        });
        return this.possibleMoves;
    };
    Pawn.prototype.move = function (cell) {
        if (_super.prototype.move.call(this, cell)) {
            this.hasMoved = true;
            return true;
        }
        return false;
    };
    return Pawn;
}(_Piece_1.Piece));
exports.Pawn = Pawn;
//# sourceMappingURL=Pawn.js.map