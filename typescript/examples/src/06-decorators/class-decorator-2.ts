type Constructor2 = { new (...args: any[]): {} };

function addFuelSizeToRocket<T extends Constructor2>(constructor: T) {
    return class extends constructor {
        public fuel: number = 100;
        public size: string = "80m";
    }
}  
  
@addFuelSizeToRocket
class Rocket2 {
    public name: string = 'Apollo';
    [x: string]: any; // Index signature for properties from decorator
}

let r2 = new Rocket2();
console.log(JSON.stringify(r2));
// console.log(r2.fuel); // 100
// console.log(r2.size);