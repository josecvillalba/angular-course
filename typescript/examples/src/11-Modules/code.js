"use strict";
//Modules
exports.__esModule = true;
var numbers_1 = require("./validations/numbers");
var texts = require("./validations/texts");
console.log(numbers_1["default"](10, 5));
console.log(texts.getError(5));
