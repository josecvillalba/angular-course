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
exports.Bishop = void 0;
var globals_1 = require("../../globals");
var _Piece_1 = require("./_Piece");
/**
 * Bishop
 */
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(side) {
        var _this = _super.call(this, side, globals_1.PIECETYPE.bishop) || this;
        _this.value = 325;
        // init possible starting locations
        _this.possibleMoves = [
            'c1', 'f1', 'c8', 'f8'
        ];
        return _this;
    }
    Bishop.prototype.canMove = function (board) {
        this.active = true;
        this.possibleMoves = [];
        // can slide diagonally            
        this.possibleMoves = this.possibleMoves.concat(this.getDiagMoves(board, true, false), // forward and left
        this.getDiagMoves(board, true, true), // forward and right
        this.getDiagMoves(board, false, false), // backward and left
        this.getDiagMoves(board, false, true) // backward and right
        );
        return this.possibleMoves;
    };
    return Bishop;
}(_Piece_1.Piece));
exports.Bishop = Bishop;
//# sourceMappingURL=Bishop.js.map