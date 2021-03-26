"use strict";
/*

Property decorator type annotation:

type PropertyDecorator =
  (target: Object, propertyKey: string | symbol) => void;

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function writableProp(isWritable) {
    return function (target, propertyKey) {
        var descriptor = {
            writable: isWritable
        };
        return descriptor;
    };
}
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    __decorate([
        writableProp(false)
    ], Car.prototype, "model", void 0);
    return Car;
}());
var myCar = new Car('Tesla');
console.log(myCar);
