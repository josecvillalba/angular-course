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
exports.King = void 0;
var globals_1 = require("../../globals");
var _Piece_1 = require("./_Piece");
/**
 * King
 */
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(side) {
        var _this = _super.call(this, side, globals_1.PIECETYPE.king) || this;
        _this.hasMoved = false;
        _this.origCoord = [
            'e1', 'e8'
        ];
        _this.value = 50000;
        // init possible starting locations
        _this.possibleMoves = _this.origCoord;
        return _this;
    }
    King.prototype.canMove = function (board) {
        var file = this._coord[0];
        var rank = parseInt(this._coord[1]);
        var testMoves = new Array();
        this.active = true;
        this.possibleMoves = [];
        // can castle king-side?
        if (!this.hasMoved
            && !board.getCellByCoord('f' + rank).isOccupied()
            && !board.getCellByCoord('g' + rank).isOccupied()
            && board.getCellByCoord('h' + rank).isOccupied()) {
            var rook = board.getCellByCoord('h' + rank).piece;
            if (rook.type == globals_1.PIECETYPE.rook && !rook.hasMoved) {
                var castleCell = board.getCellByCoord('g' + rank);
                castleCell.possibleMove = true;
                castleCell.castleable = true;
                this.possibleMoves.push(castleCell.getCoord());
            }
        }
        // can castle queen-size?
        if (!this.hasMoved
            && !board.getCellByCoord('d' + rank).isOccupied()
            && !board.getCellByCoord('c' + rank).isOccupied()
            && !board.getCellByCoord('b' + rank).isOccupied()
            && board.getCellByCoord('a' + rank).isOccupied()) {
            var rook = board.getCellByCoord('a' + rank).piece;
            if (rook.type == globals_1.PIECETYPE.rook && !rook.hasMoved) {
                var castleCell = board.getCellByCoord('c' + rank);
                castleCell.possibleMove = true;
                castleCell.castleable = true;
                this.possibleMoves.push(castleCell.getCoord());
            }
        }
        // can move 1sq in any direction
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 1] + rank);
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 1] + rank);
        testMoves.push("" + file + (rank + 1));
        testMoves.push("" + file + (rank - 1));
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 1] + (rank + 1));
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 1] + (rank - 1));
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] - 1] + (rank + 1));
        testMoves.push("" + globals_1.FILE[globals_1.FILE[file] + 1] + (rank - 1));
        for (var i = 0; i < testMoves.length; i++) {
            var testMove = testMoves[i];
            if (board.cellInBounds(testMove)) {
                var cell = board.getCellByCoord(testMove);
                if (cell.isOccupied()) {
                    if (cell.piece.side != this.side) {
                        this.possibleMoves.push(testMove);
                        cell.possibleMove = true;
                    }
                    continue;
                }
                this.possibleMoves.push(testMove);
                cell.possibleMove = true;
            }
        }
        return this.possibleMoves;
    };
    King.prototype.castleMove = function (cell, board) {
        if (cell.castleable && !this.hasMoved) {
            var rookFile = cell.file == globals_1.FILE.c ? 'a' : 'h', rank = cell.rank, rookDest = (cell.file == globals_1.FILE.c ? 'd' : 'f') + rank, startCell = board.getCellByCoord(rookFile + rank), rook = startCell.piece;
            startCell.piece = null;
            rook.possibleMoves.push(rookDest);
            rook.move(board.getCellByCoord(rookDest));
            this.move(cell);
            return rook.getId();
        }
        this.move(cell);
    };
    King.prototype.move = function (cell) {
        if (_super.prototype.move.call(this, cell)) {
            if (cell.file != globals_1.FILE.e
                || (this.side == globals_1.SIDE.black && cell.rank != 8)
                || (this.side == globals_1.SIDE.white && cell.rank != 1)) {
                // team can no longer castle
                this.hasMoved = true;
                return true;
            }
        }
        return false;
    };
    return King;
}(_Piece_1.Piece));
exports.King = King;
//# sourceMappingURL=King.js.map