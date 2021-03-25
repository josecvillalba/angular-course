/*

A class decorator is applied to the constructor of the class

Class decorator type annotation:

type ClassDecorator = <TFunction extends Function>
  (target: TFunction) => TFunction | void;

*/

type Constructor = { new (...args: any[]): {} };

function classDecorator<T extends Constructor>(constructor: T) {
    return class extends constructor {
      name = 'Challenger';
    };
};


@classDecorator
class Rocket {

    public name: string = 'Discovery';
    public fuel: number = 100;

}


let rocket = new Rocket();
//console.log(rocket.name);
console.log(JSON.stringify(rocket));
