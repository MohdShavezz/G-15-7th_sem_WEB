//type and interface both define shape of objects, but have some differences.
type User = {
  id: number;
  name: string;
};
interface User {
  id: number;
  name: string;
}

// Difference
// 1. Extending/Merging-----------------------------

interface Person {
  id: number;
}
interface Person {
  name: string;
}
const p: Person = { id: 1, name: "Shavez" }; // merged

type Animal = { id: number };
type Dog = Animal & { bark: boolean };

// 2. Union & Primitives------------------------------

// Type can represent unions, primitives, tuples, etc.
// Interface cannot
type Status = "success" | "error"; // possible
type Age = number;                 // possible
type Point = [number, number];     // possible
interface Status {}  //  Not possible

// 3. Implements with Classes-------------------------

// Both work with classes, but interfaces are preferred because they’re designed for contracts.
interface IUser {
  id: number;
  name: string;
}
class User implements IUser {
  constructor(public id: number, public name: string) {}
}
// eg:-
interface Person {
  name: string;
  age: number;
  getDetails(): string;
}
// Class implements the Person interface
class Student implements Person {
  constructor(public name: string, public age: number, private rollNo: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, RollNo: ${this.rollNo}`;
  }
}
const std = new Student("Shavez", 22, 101);
console.log(std.getDetails());


// ----------------- Method Overloading -----------------
class Calculate {
  constructor() {}
  // Overload signatures
  area(r: number): void;
  area(l: number, b: number): void;
  area(l: number, b: number, h: number): void;
  // Single implementation
  area(...args: number[]): void {
    if (args.length === 1) {
      const [r] = args;
      console.log("Circle Area:", Math.PI * r * r);
    } else if (args.length === 2) {
      const [l, b] = args;
      console.log("Rectangle Area:", l * b);
    } else if (args.length === 3) {
      const [l, b, h] = args;
      console.log("Cuboid Volume:", l * b * h);
    } else {
      console.log("Invalid parameters");
    }
  }
}
const cal = new Calculate();
cal.area(12); 
cal.area(5, 6);    
cal.area(2, 3, 4);  

// Encapsulation, Abstraction, Polymorphism, and Inheritance examples in TypeScript.

// ----------------- Encapsulation -----------------
class Account {
  constructor(public owner: string,private balance: number) {
    this.balance = balance;
  }
  get getBal(): number {
    return this.balance;
  }
  set addBal(amount: number) {
    this.balance += amount;
    console.log(`Balance after deposit: ${this.balance}`);
  }
  set withdrawBal(amount: number) {
    this.balance -= amount;
    console.log(`Balance after withdrawal: ${this.balance}`);
  }
}
const acc = new Account("shavez", 100);
console.log(acc.getBal);
acc.addBal = 50;
acc.addBal = 50;
acc.withdrawBal = 100;
console.log(acc.getBal);

// ----------------- Abstraction -----------------
class CoffeeMachine {
  private isOn: boolean = false;
  prepareCoffee(): void {
    if (this.isOn) {
      console.log("Preparing coffee...");
    } else {
      console.log("Switch on, please!");
    }
  }
  switchOn(): void {
    this.isOn = true;
  }
}
const coff = new CoffeeMachine();
coff.switchOn();
coff.prepareCoffee();

// ----------------- Polymorphism -----------------
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return this.radius * this.radius * Math.PI;
  }
}
class Rectangle extends Shape {
  constructor(private length: number, private breadth: number) {
    super();
  }
  area(): number {
    return this.length * this.breadth;
  }
}
const cir = new Circle(10);
const rec = new Rectangle(10, 10);
console.log("Circle area:", cir.area());
console.log("Rectangle area:", rec.area());

// ----------------- Inheritance -----------------
class Student {
  constructor(public name: string, private age: number) {}
  getName(): string {
    return this.name;
  }
  get getAge(): number {
    return this.age;
  }
  set setAge(newAge: number) {
    this.age = newAge;
  }
}
class Teacher extends Student {
  constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }
  getTeacher(): void {
    console.log("Teacher Name:", this.getName());
    console.log("Teacher Age:", this.getAge);
    console.log("Teacher Subject:", this.subject);
  }
}
const std = new Student("amir", 22);
console.log("Student Name:", std.getName());
console.log("Student Age:", std.getAge);
const tch = new Teacher("shavz", 26, "web");
tch.getTeacher();

