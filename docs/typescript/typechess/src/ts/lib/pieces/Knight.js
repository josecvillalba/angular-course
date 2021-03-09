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
exports.Knight = void 0;
var globals_1 = require("../../globals");
var _Piece_1 = require("./_Piece");
/**
 * Knight
 */
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(side) {
        var _this = _super.call(this, side, globals_1.PIECETYPE.knight) || this;
        _this.value = 325;
        // init possible starting locations
        _this.possibleMoves = [
            'g1', 'b1', 'g8', 'b8'
        ];
        return _this;
    }
    Knight.prototype.canMove = function (board) {
        var file = this._coord[0];
        var rank = parseInt(this._coord[1]);
        var testMoves = new Array();
        this.active = true;
        this.possibleMoves = [];
        // 2 forward 1 left
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 1] + (rank + this._forward + this._forward));
        // 2 forward 1 right
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 1] + (rank + this._forward + this._forward));
        // 2 left 1 forward 
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 2] + (rank + this._forward));
        // 2 right 1 forward
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 2] + (rank + this._forward));
        // 2 backward 1 left
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 1] + (rank - this._forward - this._forward));
        // 2 backward 1 right
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 1] + (rank - this._forward - this._forward));
        // 2 left 1 backward
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 2] + (rank - this._forward));
        // 2 right 1 backward
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 2] + (rank - this._forward));
        for (var i = 0; i < testMoves.length; i++) {
            var testMove = testMoves[i];
            if (board.cellInBounds(testMove)) {
                var cell = board.getCellByCoord(testMove);
                if (!cell.isOccupied() || cell.piece.side != this.side) {
                    this.possibleMoves.push(testMove);
                    cell.possibleMove = true;
                }
            }
        }
        return this.possibleMoves;
    };
    return Knight;
}(_Piece_1.Piece));
exports.Knight = Knight;
//# sourceMappingURL=Knight.js.map