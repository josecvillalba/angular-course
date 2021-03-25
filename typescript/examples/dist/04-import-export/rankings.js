System.register(["./rankingsType"], function (exports_1, context_1) {
    "use strict";
    var rankingsType_1, position, playerName, finishedGame, ranking, hallOfFame;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rankingsType_1_1) {
                rankingsType_1 = rankingsType_1_1;
            }
        ],
        execute: function () {
            hallOfFame = [];
            // 3 - ranking creation
            position = 1;
            playerName = "Carlos Villalba";
            finishedGame = true;
            ranking = [position, playerName, finishedGame];
            hallOfFame.push(ranking);
            // 4 - creation of another ranking
            position = 2;
            playerName = "Chiquito de la Calzada";
            finishedGame = true;
            ranking = [position, playerName, finishedGame];
            hallOfFame.push(ranking);
            // 6 - call to function
            rankingsType_1.printRankings(hallOfFame);
        }
    };
});
//# sourceMappingURL=rankings.js.map