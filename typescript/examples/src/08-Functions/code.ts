// Basic Funcions


//Mode 1

let hero:string = "Flash";

function print_hero():string{
    return hero;
}

console.log(print_hero());

//Mode 2

let call_batman = function ():string{
    return "Batman come here!!!"
}

console.log(call_batman());

// Mandatory params 

function superHeroName(name: string, alias: string): string{
    return name + ' ' + alias;
}

let nameComplete = superHeroName("Clark Kent", "Superman");

console.log(nameComplete);

//Optional params

function optionalParam(name: string, jobs?:string)
{
    if (jobs) {
        return name + ' ' + jobs;
    
    }else{
        return name;
    } 
}

let onlyName = optionalParam("Johnn");

//Default params

function defaultParams(name:string, surname:string, capitalize: boolean = true){
    if (capitalize){
      return capital(name) + " " + capital(surname)
    } else {
       return name + " " + surname;
    }
}

function capital(word: string):string{
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

var fullName = defaultParams("tony","stark");

console.log(fullName);

//REST Params

function RESTParams(name:string, ...otherParams:string[] ): string{
    return name + " " + otherParams.join(" ");
}

var superman = RESTParams("Clark","Joseph","Kent");
var ironman = RESTParams("Anthony","Edward","Tony","Stark");

console.log(superman);
console.log(ironman);

//Function Type

function add(a: number, b:number):number{
    return a + b;
}

function greet(name: string):string{
    return "I'm " + name;
}

function saveTheWorld():void{
    console.log("The world is safe!");
}

var myFunction: (x: number, y:number) => number ;


myFunction = add;
console.log(myFunction(5,5));





