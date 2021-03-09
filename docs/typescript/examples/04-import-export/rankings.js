"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rankingsType_1 = require("./rankingsType");
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
// 6 - call to function
rankingsType_1.printRankings(hallOfFame);
