// Basic Funcions
//Mode 1
var hero = "Flash";
function print_hero() {
    return hero;
}
console.log(print_hero());
//Mode 2
var call_batman = function () {
    return "Batman come here!!!";
};
console.log(call_batman());
// Mandatory params 
function superHeroName(name, alias) {
    return name + ' ' + alias;
}
var nameComplete = superHeroName("Clark Kent", "Superman");
console.log(nameComplete);
//Optional params
function optionalParam(name, jobs) {
    if (jobs) {
        return name + ' ' + jobs;
    }
    else {
        return name;
    }
}
var onlyName = optionalParam("Johnn");
//Default params
function defaultParams(name, surname, capitalize) {
    if (capitalize === void 0) { capitalize = true; }
    if (capitalize) {
        return capital(name) + " " + capital(surname);
    }
    else {
        return name + " " + surname;
    }
}
function capital(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}
var fullName = defaultParams("tony", "stark");
console.log(fullName);
//REST Params
function RESTParams(name) {
    var otherParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherParams[_i - 1] = arguments[_i];
    }
    return name + " " + otherParams.join(" ");
}
var superman = RESTParams("Clark", "Joseph", "Kent");
var ironman = RESTParams("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
//Function Type
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "I'm " + name;
}
function saveTheWorld() {
    console.log("The world is safe!");
}
var myFunction;
myFunction = add;
console.log(myFunction(5, 5));
