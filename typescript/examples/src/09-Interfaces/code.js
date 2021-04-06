function sendMission(xmen) {
    console.log("Sending: " + xmen.name);
    xmen.regenerate("Logan");
}
function sendStation(xmen) {
    console.log("Sending to station: " + xmen.name);
}
var wolverine = {
    name: "Wolverine",
    regenerate: function (x) {
        console.log(x + " has been regenerated.");
    }
};
sendMission(wolverine);
sendStation(wolverine);
//Class implements Interface
var Mutant = /** @class */ (function () {
    function Mutant() {
    }
    Mutant.prototype.regenerate = function (name) {
        console.log("Hi " + name);
    };
    return Mutant;
}());
var iceman = new Mutant();
iceman.regenerate("Iceman");
var add;
add = function (a, b) {
    return a + b;
};
console.log(add(10, 5));
var subtract;
subtract = function (a, b) {
    return a - b;
};
console.log(subtract(10, 5));
