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
exports.Queen = void 0;
var globals_1 = require("../../globals");
var _Piece_1 = require("./_Piece");
/**
 * Queen
 */
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(side) {
        var _this = _super.call(this, side, globals_1.PIECETYPE.queen) || this;
        _this.value = 1000;
        // init possible starting locations
        _this.possibleMoves = [
            'd1', 'd8'
        ];
        return _this;
    }
    Queen.prototype.canMove = function (board) {
        this.active = true;
        this.possibleMoves = [];
        // can slide diagonally            
        this.possibleMoves = this.possibleMoves.concat(this.getDiagMoves(board, true, false), // forward and left
        this.getDiagMoves(board, true, true), // forward and right
        this.getDiagMoves(board, false, false), // backward and left
        this.getDiagMoves(board, false, true) // backward and right
        );
        // can slide up-down-left-right until end of board
        this.possibleMoves = this.possibleMoves.concat(this.getPerpMoves(board, true, true), // vertical up
        this.getPerpMoves(board, true, false), // vertical down
        this.getPerpMoves(board, false, true), // horizontal right
        this.getPerpMoves(board, false, false) // horizontal left
        );
        return this.possibleMoves;
    };
    return Queen;
}(_Piece_1.Piece));
exports.Queen = Queen;
//# sourceMappingURL=Queen.js.map