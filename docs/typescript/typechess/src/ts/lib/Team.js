"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var globals_1 = require("../globals");
var Bishop_1 = require("./pieces/Bishop");
var King_1 = require("./pieces/King");
var Pawn_1 = require("./pieces/Pawn");
var Knight_1 = require("./pieces/Knight");
var Queen_1 = require("./pieces/Queen");
var Rook_1 = require("./pieces/Rook");
var Team = /** @class */ (function () {
    function Team(side) {
        this.captures = new Array();
        this.pieces = new Array();
        this.kingInCheck = false;
        this.side = side == globals_1.SIDE.white ? globals_1.SIDE.white : globals_1.SIDE.black;
        // pawns
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        this.pieces.push(new Pawn_1.Pawn(this.side));
        // rooks
        this.pieces.push(new Rook_1.Rook(this.side));
        this.pieces.push(new Rook_1.Rook(this.side));
        // knights
        this.pieces.push(new Knight_1.Knight(this.side));
        this.pieces.push(new Knight_1.Knight(this.side));
        // bishops
        this.pieces.push(new Bishop_1.Bishop(this.side));
        this.pieces.push(new Bishop_1.Bishop(this.side));
        // royalty
        this.pieces.push(new Queen_1.Queen(this.side));
        this.pieces.push(new King_1.King(this.side));
    }
    Team.prototype.clearPossible = function () {
        this.activePiece = null;
        this.pieces.forEach(function (piece) {
            piece.active = false;
            piece.possibleMoves = [];
        });
    };
    Team.prototype.getPieceById = function (id) {
        return this.pieces.find(function (piece) { return piece.getId() == id; });
    };
    Team.prototype.getPieceByType = function (type) {
        return this.pieces.find(function (piece) { return piece.type == type; });
    };
    Team.prototype.getSide = function () {
        return globals_1.CAPITALIZE(globals_1.SIDE[this.side]);
    };
    Team.prototype.getScore = function () {
        var score = 0;
        for (var i = 0; i < this.captures.length; i++) {
            var capture = this.captures[i];
            score += capture.value;
        }
        return score;
    };
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=Team.js.map