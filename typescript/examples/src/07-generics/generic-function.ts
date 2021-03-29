function keyfunc<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
  

type RoadVehicle = {
    name: string;
    wheels: number;
}

type MotorBike = {
    name: string;
    speed: string;
}

let Harley = {
    name : 'Harley Davidson',
    wheels: 2,
    speed : '180 Km/h' 
}


console.log(keyfunc(Harley,"name"));
console.log(keyfunc(Harley,"wheels"));
console.log(keyfunc(Harley,"speed"));

console.log(keyfunc(Harley as MotorBike,"name"));
//console.log(keyfunc(Harley as MotorBike,"wheels")); <- property does not exist in type Motorbike
console.log(keyfunc(Harley as MotorBike,"speed"));

console.log(keyfunc(Harley as RoadVehicle,"name"));
console.log(keyfunc(Harley as RoadVehicle,"wheels")); 
//console.log(keyfunc(Harley as RoadVehicle,"speed")); <- property does not exist in type Motorbike
