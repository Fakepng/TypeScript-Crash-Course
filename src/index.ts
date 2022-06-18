// Basic Types
let id: number = 5;
let company: string = 'Google';
let isWorking: boolean = true;
let any: any = 'any';

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, '2', true];

// Tuple
let person: [string, number, boolean] = ['John', 25, true];

// Tuple Array
let employees: [string, number][] = [['John', 25], ['Jane', 30]];

// Union
let pid: string | number = 22;

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log('Direction1.Up', Direction1.Up);
console.log('Direction1.Down', Direction1.Down);
console.log('Direction1.Left', Direction1.Left);
console.log('Direction1.Right', Direction1.Right);

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

console.log('Direction2.Up', Direction2.Up);
console.log('Direction2.Down', Direction2.Down);
console.log('Direction2.Left', Direction2.Left);
console.log('Direction2.Right', Direction2.Right);

// Object 
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1;
let customerId1 = <number>cid;
let customerId2 = cid as number;

// Function
function addNum(x: number, y: number): number {
    return x + y;
};

console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
    console.log(message);
}

log('Hello');
log(1);

// Interface
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number,
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

interface Mathfunc {
    (x: number, y: number): number;
}

const add: Mathfunc = (x: number, y: number): number => x + y;
const sub: Mathfunc = (x: number, y: number): number => x - y;

// Type vs Interface
// Interface don't support union types

// Classes
// private Accessible only within class
// protected Accessible within class and subclasses
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id:number;
    name: string;

    constructor(id: number, name: string) {
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
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employees(3, 'John', 'Developer');

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['1', '2', '3']);