"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var globals_1 = require("../globals");
/**
 * Cell
 */
var Cell = /** @class */ (function () {
    function Cell(file, rank, isLight) {
        // public
        this.castleable = false;
        this.file = 0;
        this.isLight = false;
        this.possibleMove = false;
        this.piece = null;
        this.rank = 0;
        if (rank > globals_1.NUMRANKS || rank < 1) {
            console.error("Cell.constructor: Invalid rank value.");
            return null;
        }
        this.file = file;
        this.rank = rank;
        this.isLight = !!isLight ? true : false;
        return this;
    }
    Cell.prototype.getFile = function () {
        return globals_1.FILE[this.file];
    };
    Cell.prototype.getCoord = function () {
        return "" + this.getFile() + this.rank;
    };
    Cell.prototype.isOccupied = function () {
        return this.piece != null;
    };
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map