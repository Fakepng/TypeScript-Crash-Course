"use strict";
// Basic Types
let id = 5;
let company = 'Google';
let isWorking = true;
let any = 'any';
let ids = [1, 2, 3];
let arr = [1, '2', true];
// Tuple
let person = ['John', 25, true];
// Tuple Array
let employees = [['John', 25], ['Jane', 30]];
// Union
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Direction1.Up', Direction1.Up);
console.log('Direction1.Down', Direction1.Down);
console.log('Direction1.Left', Direction1.Left);
console.log('Direction1.Right', Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log('Direction2.Up', Direction2.Up);
console.log('Direction2.Down', Direction2.Down);
console.log('Direction2.Left', Direction2.Left);
console.log('Direction2.Right', Direction2.Right);
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
let customerId1 = cid;
let customerId2 = cid;
// Function
function addNum(x, y) {
    return x + y;
}
;
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log('Hello');
log(1);
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(1, 'John');
const person2 = new Person(2, 'Jane');
console.log(person2.register());
console.log(person1, person2);
// Subclasses
class Employees extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employees(3, 'John', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['1', '2', '3']);
