/*

Property decorator type annotation:

type PropertyDecorator =
  (target: Object, propertyKey: string | symbol) => void;

*/

import "reflect-metadata";

const formatMetadataKey = Symbol("format");


function format(formatString: string) {
    // console.log(`format: ${formatMetadataKey.toString()}`);
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    // console.log(`getFormat: ${formatMetadataKey.toString()}`);
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      let formatString = getFormat(this, "greeting");
      return formatString.replace("%s", this.greeting);
    }

}


let greeter = new Greeter('This is a greeting');
console.log(`Greeting: ${greeter.greeting}`);
console.log(`Greet(): ${greeter.greet()}`);




