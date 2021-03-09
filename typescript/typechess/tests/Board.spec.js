"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var globals_1 = require("../src/ts/globals");
var Board_1 = require("../src/ts/lib/Board");
var factories_1 = require("./factories");
var Cell_1 = require("../src/ts/lib/Cell");
require("mocha");
/**
 * Board Tests
 */
describe('Test Board', function () {
    var brd;
    before(function () {
        brd = factories_1.BoardFactory();
    });
    it('should be constructable', function () {
        chai_1.expect(brd).to.be.instanceOf(Board_1.Board);
    });
    it('should instantiate itself with an appropriate number of cells', function () {
        chai_1.expect(brd.cells.length).to.equal(globals_1.NUMFILES * globals_1.NUMRANKS);
        brd.cells.forEach(function (cell) {
            chai_1.expect(cell).to.be.instanceOf(Cell_1.Cell);
        });
    });
    describe('cellInBounds()', function () {
        it('should return false for all invalid coords', function () {
            var invalidCoords = ['z9', 'g37', 'i2'];
            invalidCoords.forEach(function (coord) {
                var result = brd.cellInBounds(coord);
                chai_1.expect(result).to.be.false;
            });
        });
        it('should return true for all valid coords', function () {
            var validCoords = ['a1', 'g7', 'b3'];
            validCoords.forEach(function (coord) {
                var result = brd.cellInBounds(coord);
                chai_1.expect(result).to.be.true;
            });
        });
    });
    describe('draw()', function () {
        it('should be able to draw without errors', function () {
            var err;
            try {
                brd.draw();
            }
            catch (e) {
                err = e;
            }
            chai_1.expect(err).to.equal(undefined);
        });
    });
    describe('getCellByCoord()', function () {
        it('should return a Cell instance when provided with a valid coord', function () {
            var coord = 'b3', cell = brd.getCellByCoord(coord);
            chai_1.expect(cell).to.be.instanceOf(Cell_1.Cell);
        });
    });
    describe('getCellByPixels()', function () {
        it('should return a Cell instance when provided with pixel coordinates within the boundary of the board', function () {
            var xPos = 216, yPos = 286, cell = brd.getCellByPixels(xPos, yPos);
            chai_1.expect(cell).to.be.instanceOf(Cell_1.Cell);
        });
    });
});
//# sourceMappingURL=Board.spec.js.map