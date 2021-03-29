/*

Parameter Decorators type annotation:

type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;

    @Params:
        target: Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
        propertyKey: The name of the property (Name of the method, not the parameter).
        parameterIndex: The ordinal index of the parameter in the function’s parameter list.
    @Returns:
    The return value will be ignored.

A standalone parameter decorator can do few things, it’s always be used to record information which can be used by other decorators.

*/

function printIndex(target: any, propertyKey: string, index: number) {
    console.log("Parameter index is: " + index)
  }
  
  class ParamDecoClass {
    constructor(){
  
    }
    public someMethod(first: string, second: string, @printIndex third: string){
  
    }
  }
  
  let myClassParam = new ParamDecoClass();