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
exports.Rook = void 0;
var globals_1 = require("../../globals");
var _Piece_1 = require("./_Piece");
/**
 * Rook
 */
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(side) {
        var _this = _super.call(this, side, globals_1.PIECETYPE.rook) || this;
        _this.hasMoved = false;
        _this.origCoord = [
            'a1', 'h1', 'a8', 'h8'
        ];
        _this.value = 550;
        // init possible starting locations
        _this.possibleMoves = _this.origCoord;
        return _this;
    }
    Rook.prototype.canMove = function (board) {
        this.active = true;
        this.possibleMoves = [];
        // can slide up-down-left-right until end of board
        this.possibleMoves = this.possibleMoves.concat(this.getPerpMoves(board, true, true), // vertical up
        this.getPerpMoves(board, true, false), // vertical down
        this.getPerpMoves(board, false, true), // horizontal right
        this.getPerpMoves(board, false, false) // horizontal left
        );
        return this.possibleMoves;
    };
    Rook.prototype.move = function (cell) {
        if (_super.prototype.move.call(this, cell)) {
            if ((cell.file != globals_1.FILE.a && cell.file != globals_1.FILE.h)
                || (this.side == globals_1.SIDE.black && cell.rank != 8)
                || (this.side == globals_1.SIDE.white && cell.rank != 1)) {
                // team can no longer castle on this side
                this.hasMoved = true;
            }
        }
        return false;
    };
    return Rook;
}(_Piece_1.Piece));
exports.Rook = Rook;
//# sourceMappingURL=Rook.js.map