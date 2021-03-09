"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/styles.css");
require("../css/typechess.css");
var config = require("./config.json");
var Typechess_1 = require("./lib/Typechess");
/**
 * Start
 */
window.addEventListener('load', function (load_event) {
    var canvas = document.getElementById(config.canvasId), match = null, pieces = document.getElementById(config.piecesImgId), ui_div = document.getElementById(config.uiId);
    match = new Typechess_1.Typechess(canvas, pieces, ui_div);
    match.draw();
    canvas.addEventListener('click', function (event) {
        match.click(event);
    });
});
//# sourceMappingURL=main.js.map