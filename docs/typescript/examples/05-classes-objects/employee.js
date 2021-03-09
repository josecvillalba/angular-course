"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.getMobile = function (mobile) {
        this.mobile = mobile;
    };
    return Employee;
}());
exports.Employee = Employee;
