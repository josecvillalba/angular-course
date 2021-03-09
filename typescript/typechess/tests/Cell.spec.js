"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var globals_1 = require("../src/ts/globals");
var Cell_1 = require("../src/ts/lib/Cell");
var factories_1 = require("./factories");
var factories_2 = require("./factories");
require("mocha");
/**
 * Cell Tests
 */
describe('Test Cell', function () {
    it('should be constructable', function () {
        var cell = factories_1.CellFactory();
        chai_1.expect(cell).to.be.instanceOf(Cell_1.Cell);
    });
    describe('getFile()', function () {
        it('should return the file text-label', function () {
            var cell = factories_1.CellFactory({ file: globals_1.FILE.c });
            chai_1.expect(cell.getFile()).to.equal('c');
        });
    });
    describe('getCoord()', function () {
        it('should return the complete file-first coordinate of the cell', function () {
            var cell = factories_1.CellFactory({ file: globals_1.FILE.g, rank: 7 });
            chai_1.expect(cell.getCoord()).to.equal('g7');
        });
    });
    describe('isOccupied()', function () {
        it('should return true if the cell is assigned a piece', function () {
            var cell = factories_1.CellFactory();
            var piece = factories_2.PieceFactory(); // new Pawn(SIDE.white);
            cell.piece = piece;
            chai_1.expect(cell.isOccupied()).to.be.true;
        });
        it('should return false if the cell is not assigned a piece', function () {
            var cell = factories_1.CellFactory();
            chai_1.expect(cell.isOccupied()).to.be.false;
        });
    });
});
//# sourceMappingURL=Cell.spec.js.map