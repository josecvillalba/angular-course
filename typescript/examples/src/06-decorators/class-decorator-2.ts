type Constructor2 = { new (...args: any[]): {} };

function addFuelSizeToRocket<T extends Constructor2>(constructor: T) {
    return class extends constructor {
        public fuel = 100;
        public size = 80;
    }
}  
  
@addFuelSizeToRocket
class Rocket2 {
    public name: string = 'Apollo';
    [x: string]: any; // Index signature for new properties from decorator
}

let r2 = new Rocket2();
console.log(JSON.stringify(r2));
// console.log(r2.fuel); // 100
// console.log(r2.size);