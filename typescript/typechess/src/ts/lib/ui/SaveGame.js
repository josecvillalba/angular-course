"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveGame = void 0;
var SaveGame = /** @class */ (function () {
    function SaveGame(name, team1, team2, turns) {
        this.saveDate = new Date();
        this.name = name;
        this.team1 = team1;
        this.team2 = team2;
        this.turns = turns;
    }
    return SaveGame;
}());
exports.SaveGame = SaveGame;
//# sourceMappingURL=SaveGame.js.map