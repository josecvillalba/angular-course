# Basic Types

## Boolean

```
let isDone: boolean = false
```

## Number (bigint)

- Number -> floating point
- Bigint -> Bigintegers

```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

## String

String data can be surrounded by single or double quotes.

```
let color: string = "blue";
color = 'red';
```

- Template strings: can span multiple lines and embedded expressions. Surrounded by the backtick quote (`), and embedded expressions like ${ expr }.

```
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
```

## Array

```
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

`ReadonlyArray<T>`

## Tuple

- Array with a fixed number of elements with known, heterogeneous types.

```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly (order is important)
x = [10, "hello"]; // Error
```

## Enum

```
enum Color {
    Red,
    Green,
    BLue,
}
let c: Color = Color.Green;
```

- By default, enumerations begin with 0, but it can be changed:

```
enum Color {
    Red = 1,
    Green,
    BLue,
}
let c: Color = Color.Green;
```

- Or manually set all the values in the enumeration:

```
enum Color {
    Red = 1,
    Green = 2,
    BLue = 4,
}
let c: Color = Color.Green;
```

## Unknown

- Not known at compile time

```
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
```

## Any

- If we want to opt-out of type checking, we use the type `any`

```
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
```

## Void

- Means the absence of having any type at all.

```
function warnUser(): void {
  console.log("This is my warning message");
}
```

## Null and undefined

- Null and undefined are subtypes of all other types.

## Never

- Represents the type of values that never occur.

```
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

## Object

- Represents a non-primitive type.

```
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);
```
## Type assertions

- A type assertion is like a type cast in other languages:

```
let someValue: unknown = "this is a string";
// as-syntax
let strLength: number = (someValue as string).length;
// "angle-bracket" syntax
let strLength: number = (<string>someValue).length;
```

