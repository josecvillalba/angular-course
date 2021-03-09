// 1 - type declaration
type Ranking = [number, string, boolean];

// 2 - var definition
let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfFame: Array<Ranking> = [];

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
function printRankings(rankings: Array<Ranking>): void {
  for (let ranking of rankings) {
    console.log(ranking);
  }
}

// 6 - call to function
printRankings(hallOfFame);
