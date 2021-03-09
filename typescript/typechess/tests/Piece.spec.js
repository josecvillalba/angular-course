"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("../src/ts/globals");
var factories_1 = require("./factories");
var _Piece_1 = require("../src/ts/lib/pieces/_Piece");
var chai_1 = require("chai");
require("mocha");
/**
 * Piece Tests
 */
describe('Test Piece', function () {
    it('should be constructable', function () {
        var piece = factories_1.PieceFactory();
        chai_1.expect(piece).to.be.instanceOf(_Piece_1.Piece);
    });
    describe('draw()', function () {
        var img, ctx, xPos, yPos, cellWidth = globals_1.CELLWIDTH, document;
        before(function () {
            var jsdom = require('jsdom');
            var JSDOM = jsdom.JSDOM;
            var canvas;
            var dom = new JSDOM("<!DOCTYPE html><canvas id=\"test_canvas\" width=\"100\" height=\"100\"></canvas><img id=\"test_img\" src=\"pieces.png\">", {
                resources: 'usable',
                url: 'file:///' + __dirname + '/../dist/'
            });
            document = dom.window.document,
                canvas = document.getElementById('test_canvas');
            img = document.getElementById('test_img');
            ctx = canvas.getContext('2d');
            xPos = Math.floor(Math.random() * canvas.width);
            yPos = Math.floor(Math.random() * canvas.height);
        });
        it('it should be able to draw without errors', function (done) {
            var piece = factories_1.PieceFactory(), err;
            document.addEventListener('load', function () {
                try {
                    piece.draw(img, ctx, xPos, yPos, cellWidth);
                }
                catch (e) {
                    err = e;
                    // console.log(e);
                }
                chai_1.expect(err).to.equal(undefined);
                done();
            });
        });
    });
    describe('getPieceType()', function () {
        it('should return a human-readable string of the piece\'s type', function () {
            var piece = factories_1.PieceFactory();
            chai_1.expect(piece.getPieceType()).to.equal("Pawn");
        });
    });
    describe('getSide()', function () {
        it('should return a human-readable string of the piece\'s side', function () {
            var piece = factories_1.PieceFactory();
            chai_1.expect(piece.getSide()).to.satisfy(function (output) {
                return !!(output == "White" || output == "Black");
            });
        });
    });
    describe('move()', function () {
        var piece = factories_1.PieceFactory();
        it('should relocate the piece if provided a valid Cell instance', function () {
            var cell = factories_1.CellFactory();
            piece.possibleMoves = [cell.getCoord()];
            piece.move(cell);
            chai_1.expect(piece.getCoord()).to.equal(cell.getCoord());
        });
        it('should return false if the Cell appears invalid', function () {
            var cell = factories_1.CellFactory(), res = true;
            piece.possibleMoves = [];
            res = piece.move(cell);
            chai_1.expect(res).to.be.false;
        });
        it('should remove previous reference to occupied cell after moving', function () {
            var cell = factories_1.CellFactory();
            chai_1.expect(piece.getCoord()).to.not.equal(cell.getCoord());
            piece.possibleMoves = [cell.getCoord()];
            piece.move(cell);
            chai_1.expect(piece.getCoord()).to.equal(cell.getCoord());
        });
        it('should clear possible moves', function () {
            var cell = factories_1.CellFactory();
            piece.possibleMoves = [cell.getCoord()];
            piece.move(cell);
            chai_1.expect(piece.possibleMoves.length).to.equal(0);
        });
    });
    describe('getCoord()', function () {
        it('should return the file-first coord of the cell which it occupies', function () {
            var cell = factories_1.CellFactory(), piece = factories_1.PieceFactory();
            piece.possibleMoves = [cell.getCoord()];
            piece.move(cell);
            chai_1.expect(piece.getCoord()).to.equal(cell.getCoord());
        });
        it('should reutrn an empty string if it does not occupy a cell', function () {
            var piece = factories_1.PieceFactory();
            chai_1.expect(piece.getCoord()).to.equal('');
        });
    });
    describe('getDiagMoves()', function () {
        it('should return an array of coordinates conforming to a forward right diagonal line', function () {
            var piece = factories_1.PieceFactory(), cell = factories_1.CellFactory({ file: globals_1.FILE.a, rank: 2 }), board = factories_1.BoardFactory(), res = new Array();
            piece.move(cell);
            res = piece.getDiagMoves(board, true, true);
            chai_1.expect(res.length).to.be.greaterThan(0);
        });
    });
});
//# sourceMappingURL=Piece.spec.js.map