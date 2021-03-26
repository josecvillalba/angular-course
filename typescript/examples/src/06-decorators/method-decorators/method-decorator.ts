/*

Method decorators type annotation:

type MethodDecorator = <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ) => TypedPropertyDescriptor<T> | void;
  
      @Params:
          target: Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
          propertyKey: The name of the property.
          descriptor: The property descriptor for the member;
      @Returns:
      If returns a value, it will be used as the descriptor of the member.
  
    
    Descriptor in a method decorator has keys:

    value
    writable
    enumerable
    configurable


  What makes method decorators different from property decorators is the descriptor parameter. 
  By which can hack the original implementation and inject some common logic. 
  
  */

function writableMethod(isWritable: boolean) {
    
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        
        descriptor.writable = isWritable;

        return descriptor;
    }

}

class Car2 {

    constructor(public nombre: string) {
    };

    @writableMethod(true)
    run(){
        console.log("brum brum");
    }

  }

let mycar2 = new Car2('Porsche');
// Original method
mycar2.run();

// Modified method
mycar2.run = function() {
    console.log("BRRRUUUUMMMMM!!!!!");
}
mycar2.run();
