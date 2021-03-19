
import { Ranking, printRankings  } from "./rankingsType";

// 2 - var definition
let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfFame: Array<Ranking> = [];

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
printRankings(hallOfFame);
