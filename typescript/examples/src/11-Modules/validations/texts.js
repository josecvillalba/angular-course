"use strict";
exports.__esModule = true;
exports.getError = void 0;
var MESSAGES = [
    "The text is very short",
    "The text is very long"
];
function getError(errorNum) {
    if (errorNum > MESSAGES.length) {
        return "Erro code doesn´t exist";
    }
    return MESSAGES[errorNum];
}
exports.getError = getError;
