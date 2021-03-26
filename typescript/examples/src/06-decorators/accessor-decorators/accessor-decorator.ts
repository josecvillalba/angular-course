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



  function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('decorator - sets the enumeration part of the accessor');
        descriptor.enumerable = value;
    };
}

class Employee {
    private _salary: number = 0;
    private _name: string = '';

    @enumerable(false)
    get salary() { return `Rs. ${this._salary}`; }

    set salary(salary: any) { this._salary = +salary; }

    @enumerable(true)
    get name() {
        return `Sir/Madam, ${this._name}`;
    }

    set name(name: string) {
        this._name = name;
    }

}

const emp = new Employee();
emp.salary = 1000;
for (let prop in emp) {
    console.log(`enumerable property = ${prop}`);
}
// salary property - will not be part of enumeration since we configured it to false
// output:
// decorator - sets the enumeration part of the accessor
// decorator - sets the enumeration part of the accessor
// enumerable property = _salary
// enumerable property = name