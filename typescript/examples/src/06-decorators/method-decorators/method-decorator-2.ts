function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value
    descriptor.value = function(){
      console.log("logging a statement before running function")
      return originalMethod.apply()
    }
   }
   
   class SomeClass {
    @log
    someMethod(): any {
      console.log("running someMethod")
    }
   }
   
   let myClass = new SomeClass();
   myClass.someMethod();
   myClass.someMethod();
   