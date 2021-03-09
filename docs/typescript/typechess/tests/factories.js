"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieceFactory = exports.ChessUiFactory = exports.CellFactory = exports.BoardFactory = void 0;
var globals_1 = require("../src/ts/globals");
var Board_1 = require("../src/ts/lib/Board");
var Cell_1 = require("../src/ts/lib/Cell");
var ChessUi_1 = require("../src/ts/lib/ui/ChessUi");
var Pawn_1 = require("../src/ts/lib/pieces/Pawn");
/**
 * Board Factory
 */
var BoardFactory = function () {
    var jsdom = require('jsdom');
    var JSDOM = jsdom.JSDOM;
    var dom = new JSDOM("<!DOCTYPE html><canvas id=\"test_canvas\" width=\"640\" height=\"640\"></canvas><img id=\"test_img\">"), document = dom.window.document;
    return new Board_1.Board(document.getElementById('test_canvas'), document.getElementById('test_img'));
};
exports.BoardFactory = BoardFactory;
/**
 * Cell Factory
 */
var CellFactory = function (params) {
    var rndFile = Math.floor(Math.random() * (Object.keys(globals_1.FILE).length / 2)), rndRank = Math.floor(Math.random() * globals_1.NUMRANKS) + 1, rndLight = (rndFile * rndRank) % 2 == 0, cell = new Cell_1.Cell(rndFile, rndRank, rndLight);
    if (params != null) {
        if (params.hasOwnProperty('file'))
            cell.file = params.file;
        if (params.hasOwnProperty('rank'))
            cell.rank = params.rank;
        if (params.hasOwnProperty('isLight'))
            cell.isLight = params.isLight;
    }
    return cell;
};
exports.CellFactory = CellFactory;
/**
 * ChessUi Factory
 */
var ChessUiFactory = function (params) {
    var jsdom = require('jsdom');
    var JSDOM = jsdom.JSDOM;
    var dom = new JSDOM("<!DOCTYPE html><div id=\"chess_ui\"></div>"), document = dom.window.document;
    return new ChessUi_1.ChessUi(document.getElementById('chess_ui'));
};
exports.ChessUiFactory = ChessUiFactory;
/**
 * Piece Factory
 */
var PieceFactory = function (customSide) {
    var side = customSide ? customSide
        : (Math.floor(Math.random() * 2) + 1 == 1 ? globals_1.SIDE.white : globals_1.SIDE.black);
    // let type = PIECETYPE[Math.floor(Math.random() * Object.keys(PIECETYPE).length) + 1];
    return new Pawn_1.Pawn(side);
};
exports.PieceFactory = PieceFactory;
//# sourceMappingURL=factories.js.map