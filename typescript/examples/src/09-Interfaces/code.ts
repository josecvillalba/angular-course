//interfaces
interface Xmen{
    name: string,
    power?: string;  //Optional property  

    regenerate?( realName: string): void; //Optional method
}


function sendMission (xmen:Xmen){
    console.log("Sending: "+ xmen.name);

    xmen.regenerate("Logan");
}

function sendStation (xmen:Xmen){
    console.log("Sending to station: "+ xmen.name);
}

var wolverine: Xmen = {
    name: "Wolverine",
    regenerate(x: string){
        console.log(x + " has been regenerated.")
    }
}

sendMission(wolverine);
sendStation(wolverine);


//Class implements Interface
class Mutant implements Xmen{
    name: string;
    power: string;
    isGood: boolean;
    regenerate( name){
        console.log("Hi " + name);
    }

}


var iceman = new Mutant();
iceman.regenerate("Iceman");

//Interface for functions

interface Function2Numbers{
    (num1: number, num2: number): number    
}

var add:Function2Numbers;

add = function(a:number, b:number){
    return a + b;
}

console.log(add(10,5));

var subtract:Function2Numbers;

subtract = function(a:number, b:number){
    return a - b;
}

console.log(subtract(10,5));

