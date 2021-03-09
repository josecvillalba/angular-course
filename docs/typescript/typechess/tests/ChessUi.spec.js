"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var factories_1 = require("./factories");
var ChessUi_1 = require("../src/ts/lib/ui/ChessUi");
/**
 * ChessUiHtml Tests
 */
describe('Test ChessUi', function () {
    var ui;
    before(function () {
        ui = factories_1.ChessUiFactory();
    });
    it('should be constructable', function () {
        chai_1.expect(ui).to.be.instanceOf(ChessUi_1.ChessUi);
    });
    describe('getUiDiv()', function () {
        it('should provide it\'s bound ui_div element', function () {
            var ui_div = ui.getUiDiv();
            chai_1.expect(ui_div).to.be.instanceOf(HTMLDivElement);
        });
    });
    describe('draw()', function () {
        it('should draw without errors', function () {
            var err;
            try {
                ui.draw(0, 0, []);
            }
            catch (e) {
                err = e;
            }
            chai_1.expect(err).to.be.undefined;
        });
    });
});
//# sourceMappingURL=ChessUi.spec.js.map