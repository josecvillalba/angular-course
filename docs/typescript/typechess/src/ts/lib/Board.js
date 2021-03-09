"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var globals_1 = require("../globals");
var Cell_1 = require("./Cell");
/**
 * Board
 */
var Board = /** @class */ (function () {
    function Board(canvas, pieces_img) {
        this._canvas_offset_x = 0;
        this._canvas_offset_y = 0;
        this.cells = new Array();
        this.canvas = canvas;
        this.canvas.width = globals_1.CANVASWIDTH;
        this.canvas.height = globals_1.CANVASWIDTH;
        this.ctx = canvas.getContext('2d');
        this.pieces_img = pieces_img;
        var boardWidth = globals_1.NUMFILES * globals_1.CELLWIDTH, boardHeight = globals_1.NUMRANKS * globals_1.CELLWIDTH;
        this._canvas_offset_x = (canvas.width - boardWidth) / 2;
        this._canvas_offset_y = globals_1.CANVASMARGIN; // + 150;
        for (var row = 0; row < globals_1.NUMRANKS; row++) {
            for (var col = 0; col < globals_1.NUMFILES; col++) {
                var isLight = (row + col) % 2 ? true : false;
                this.cells.push(new Cell_1.Cell(col, row + 1, isLight));
            }
        }
    }
    Board.prototype._validateCoord = function (coord) {
        // a valid coordinate is presented as file + rank in a 
        // two character string; e.g. "d4"
        if (coord.length != 2) {
            return false;
        }
        else if (!isNaN(parseInt(coord[0])) || !Object.keys(globals_1.FILE).includes(coord[0])) {
            return false;
        }
        else {
            var coordRank = parseInt(coord[1]);
            if (isNaN(coordRank) || coordRank > globals_1.NUMRANKS || coordRank < 1) {
                return false;
            }
            return true;
        }
    };
    Board.prototype.cellInBounds = function (coord) {
        return this._validateCoord(coord);
    };
    Board.prototype.clearPossible = function () {
        this.cells.forEach(function (cell) {
            cell.possibleMove = false;
            cell.castleable = false;
        });
    };
    Board.prototype.draw = function () {
        var _this = this;
        var lightCol = globals_1.LIGHTSQCOLOR, darkCol = globals_1.DARKSQCOLOR, cellWidth = globals_1.CELLWIDTH;
        // clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw the canvas background
        this.ctx.beginPath();
        this.ctx.fillStyle = '#121212';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
        this.cells.forEach(function (cell) {
            var xPos = (cell.file * cellWidth) + _this._canvas_offset_x;
            var yPos = ((globals_1.NUMRANKS * cellWidth) - (cellWidth * (cell.rank - 1)) - cellWidth) + _this._canvas_offset_y;
            // draw the cell
            _this.ctx.beginPath();
            _this.ctx.fillStyle = cell.isLight ? lightCol : darkCol;
            // highlight the active piece
            if (cell.isOccupied() && cell.piece.active) {
                _this.ctx.fillStyle = globals_1.POSSIBLESQCOLOR;
            }
            _this.ctx.fillRect(xPos, yPos, cellWidth, cellWidth);
            _this.ctx.closePath();
            // draw axis labels
            _this.ctx.beginPath();
            _this.ctx.fillStyle = cell.isLight ? darkCol : lightCol;
            _this.ctx.font = globals_1.UIFONTBTN;
            if (cell.rank == 1) {
                _this.ctx.fillText(globals_1.FILE[cell.file], (xPos + cellWidth - 10), (yPos + cellWidth - 5));
            }
            if (cell.file == globals_1.FILE.a) {
                _this.ctx.fillText(cell.rank + '', xPos + 3, yPos + 15);
            }
            _this.ctx.closePath();
            // highlight possible moves
            if (cell.possibleMove) {
                // offset by half lineWidth so highlight fits within square
                var lineWidth = 6, pxPos = xPos + (lineWidth * 0.5), pyPos = yPos + (lineWidth * 0.5), pCellWidth = cellWidth - lineWidth;
                _this.ctx.beginPath();
                _this.ctx.lineWidth = lineWidth;
                _this.ctx.strokeStyle = globals_1.POSSIBLESQCOLOR;
                if (cell.castleable) {
                    _this.ctx.strokeStyle = globals_1.CASTLEABLESQCOLOR;
                }
                _this.ctx.rect(pxPos, pyPos, pCellWidth, pCellWidth);
                _this.ctx.stroke();
                _this.ctx.closePath();
            }
            // draw any pieces occupying this cell
            if (cell.isOccupied()) {
                cell.piece.draw(_this.pieces_img, _this.ctx, xPos, yPos, cellWidth);
            }
        });
    };
    Board.prototype.getCellByCoord = function (coord) {
        if (!this._validateCoord(coord)) {
            // console.error('Board.getCellByCoord: invalid coord value.');
            return;
        }
        var file = coord[0];
        var rank = parseInt(coord[1]);
        var index = ((rank * globals_1.NUMFILES) - globals_1.NUMRANKS) + globals_1.FILE[file];
        return this.cells[index];
    };
    Board.prototype.getCellByPixels = function (xPos, yPos) {
        var file = globals_1.FILE[Math.floor((xPos - this._canvas_offset_x) / globals_1.CELLWIDTH)];
        var rank = globals_1.NUMRANKS - Math.floor((yPos - this._canvas_offset_y) / globals_1.CELLWIDTH);
        return this.getCellByCoord("" + file + rank);
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=Board.js.map