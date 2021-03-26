/*

Accessor decorators type annotation:

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
  
    
    Descriptor in an accessor decorator has keys:

    get
    set
    enumerable
    configurable

  What makes method decorators different from property decorators is the descriptor parameter. 
  By which can hack the original implementation and inject some common logic. 
 
 */


function immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    
    // console.log('Accessor decorator execution');
    const original = descriptor.set;
  
    // console.log(descriptor.set);

    if (original) {
        descriptor.set = function (value: any) {
            return original.call(this, { ...value })
          }
    }

  }
  
  class C {
    private _point = { x: 0, y: 0 }
  
    @immutable
    set point(value: { x: number, y: number }) {
        this._point = value;
    }
  
    get point() {
      return this._point;
    }
  }
  
const c = new C();
const point = { x: 1, y: 1 }
c.point = point;
  
console.log(c.point);
console.log(point);
  
  
console.log(c.point === point)
// if @immutable -> false
// if !@immutable -> true