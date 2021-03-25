System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function printRankings(rankings) {
        for (var _i = 0, rankings_1 = rankings; _i < rankings_1.length; _i++) {
            var ranking = rankings_1[_i];
            console.log(ranking);
        }
    }
    exports_1("printRankings", printRankings);
    return {
        setters: [],
        execute: function () {
        }
    };
});
