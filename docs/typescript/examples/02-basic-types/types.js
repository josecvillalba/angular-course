"use strict";
// 2 - var definition
var position;
var playerName;
var finishedGame;
var ranking;
var hallOfFame = [];
// 3 - ranking creation
position = 1;
playerName = "Bruno Krebs";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);
// 4 - creation of another ranking
position = 2;
playerName = "Maria Helena";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);
// 5 - function to iterate a ranking
function printRankings(rankings) {
    for (var _i = 0, rankings_1 = rankings; _i < rankings_1.length; _i++) {
        var ranking_1 = rankings_1[_i];
        console.log(ranking_1);
    }
}
// 6 - call to function
printRankings(hallOfFame);
