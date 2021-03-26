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

function writableProp (isWritable: boolean) {
  
  return function ( target: Object, propertyKey: string): any {
  
    let descriptor:PropertyDescriptor = {
      writable:isWritable
    }

    return descriptor;

  }

}


class Car {
  
  @writableProp(false)
  public model: string;

  constructor(model:string) {
    this.model = model;
  }

}

let myCar = new Car('Tesla');
console.log(myCar);