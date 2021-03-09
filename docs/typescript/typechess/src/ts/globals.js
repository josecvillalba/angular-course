"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_GUID = exports.CAPITALIZE = exports.SAVEGAMEPREFIX = exports.UIFONTBTN = exports.UIFONTSMALL = exports.UIFONTLARGE = exports.CANVASMARGIN = exports.CANVASWIDTH = exports.PIECESPRITEWIDTH = exports.CELLWIDTH = exports.NUMFILES = exports.NUMRANKS = exports.CASTLEABLESQCOLOR = exports.POSSIBLESQCOLOR = exports.DARKSQCOLOR = exports.LIGHTSQCOLOR = exports.FILE = exports.SIDE = exports.PIECETYPE = void 0;
var config = require("./config.json");
/**
 * Enums
 */
var PIECETYPE;
(function (PIECETYPE) {
    PIECETYPE[PIECETYPE["empty"] = 0] = "empty";
    PIECETYPE[PIECETYPE["pawn"] = 1] = "pawn";
    PIECETYPE[PIECETYPE["rook"] = 2] = "rook";
    PIECETYPE[PIECETYPE["knight"] = 3] = "knight";
    PIECETYPE[PIECETYPE["bishop"] = 4] = "bishop";
    PIECETYPE[PIECETYPE["queen"] = 5] = "queen";
    PIECETYPE[PIECETYPE["king"] = 6] = "king";
})(PIECETYPE = exports.PIECETYPE || (exports.PIECETYPE = {}));
;
var SIDE;
(function (SIDE) {
    SIDE[SIDE["black"] = 0] = "black";
    SIDE[SIDE["white"] = 1] = "white";
})(SIDE = exports.SIDE || (exports.SIDE = {}));
;
var FILE;
(function (FILE) {
    FILE[FILE["a"] = 0] = "a";
    FILE[FILE["b"] = 1] = "b";
    FILE[FILE["c"] = 2] = "c";
    FILE[FILE["d"] = 3] = "d";
    FILE[FILE["e"] = 4] = "e";
    FILE[FILE["f"] = 5] = "f";
    FILE[FILE["g"] = 6] = "g";
    FILE[FILE["h"] = 7] = "h";
})(FILE = exports.FILE || (exports.FILE = {}));
/**
 * Colors
 */
exports.LIGHTSQCOLOR = config.colorSqLight;
exports.DARKSQCOLOR = config.colorSqDark;
exports.POSSIBLESQCOLOR = config.colorSqPossible;
exports.CASTLEABLESQCOLOR = config.colorSqCastleable;
/**
 * Dimensions
 */
exports.NUMRANKS = 8;
exports.NUMFILES = Object.keys(FILE).length / 2;
exports.CELLWIDTH = config.cellWidth;
exports.PIECESPRITEWIDTH = config.spriteWidth;
exports.CANVASWIDTH = config.canvasWidth;
exports.CANVASMARGIN = config.canvasMargin;
/**
 * Fonts
 */
exports.UIFONTLARGE = config.uiFontLarge;
exports.UIFONTSMALL = config.uiFontSmall;
exports.UIFONTBTN = config.uiFontBtn;
/**
 * Miscellaneous
 */
exports.SAVEGAMEPREFIX = config.saveGamePrefix;
/**
 * Functions
 */
var CAPITALIZE = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.CAPITALIZE = CAPITALIZE;
var GENERATE_GUID = function () {
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return guid.replace(/x/g, function () {
        return (Math.random() * 16 | 0).toString(16);
    })
        .replace(/y/, function () {
        return (Math.random() * 4 + 8 | 0).toString(16);
    });
};
exports.GENERATE_GUID = GENERATE_GUID;
//# sourceMappingURL=globals.js.map