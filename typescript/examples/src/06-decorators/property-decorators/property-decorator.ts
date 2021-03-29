/*

Property decorator type annotation:

type PropertyDecorator =
  (target: Object, propertyKey: string | symbol) => void;

  @Params:
      target: Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
      propertyKey: The name of the property.
  @Returns:
  The return value will be ignored.

*/

function printKey(target: any, propertyKey: string) {
  console.log(propertyKey)
}

class Car {
  @printKey
  public brand: string;
  constructor(brand: string){
    this.brand = brand;
  }
}

let myCar = new Car('Tesla');