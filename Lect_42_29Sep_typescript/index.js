var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('TS: classes and objects');
// TYPES & INTERFACES
// type age=number;
// type UserType={
//     name:string,age:number
// }
// interface IUser{
//  name:string,age:number
// }
// let user:UserType={
//     name:'asd',age:2135
// }
// let user:IUser={    
//     name:'asd',age:2135
// }
// //difference
// let productName:string='phone'
// interface productName{
// }
// type Student={
//     name:string,age:number
// }
// type Teacher={
//     subject:string
// }
// //combine
// type UserType=Student&Teacher
// let user:UserType={
//   name:'john',age:11,subject:'web'
// }
// interface Student{
//     name:string,age:number
// }
// interface Student{
//     class:string,rollno:number
// }
// interface Teacher{
//     subject:string
// }
// let user:Student&Teacher={
//   name:'john',age:11,subject:'web'
// }
// const user:Student={
//     name:'asf',age:22,class:'sf',rollno:3245
// }
// types can represent union , primitives and tupple , interface can't 
// type age=number
// type arr=[string,null]
// type status='active'|'inactive'
// interface status{} // can't
//INTERFACE in CLASSES
// interface IUser{
//     id:number,
//     name:string
// }
// class User implements IUser{
//     // id:number;
//     // name :string
//     // constructor(id:number,name:string){
//     //     this.id=id 
//     //     this.name=name
//     // }
//     // or 
//     constructor(public id:number,public name:string){}
// }
// interface IStudent{
//     name:string,
//     rollno:number,
//     getDetails():string
// }
// class Student implements IStudent{
//     constructor(public name:string,public rollno:number){}
//     getDetails(): string {
//         return `${this.name} ${this.rollno}`
//     }
//     set setStudentName(name:string){
//         this.name=name
//     }
// }
// let std = new Student('john',111)
// console.log(std.getDetails())
// std.setStudentName='newjohn'
// console.log(std.getDetails())
// //method orverloading
// // Question 
// // circle.area(radius) => pi*radius*radius
// // square.area(l,b) => l*b
// // rectangle.area(l,b,h) =>l*b*h
// class Eval{
//     area(...args:number[]){
//         if(args.length===1){
//             const [radius]=args
//             console.log("area of Circle (m^2): ",3.14*radius*radius)
//         }
//         else if(args.length===2){
//             const [l,b]=args
//             console.log("area of Square (m^2): ",l*b)
//         }
//         else if(args.length===3){
//             const [l,b,h]=args
//             console.log("area of Reactangle (m^3): ",l*b*h)
//         }
//     }
// }
// const obj = new Eval()
// //circle
// obj.area(10)
// //squre
// obj.area(10,10)
// //rectangle
// obj.area(10,10,10)
//Encapsulation : bined similar prop and mehtod together
// class Account{
//     #bal:number=0
//     constructor(private name:string){}    
//     //curret balance in account check
//     get getBal(){
//         return this.#bal
//     }
//     // add balance
//     set addBal(val:number){
//         this.#bal+=val
//     }
//     //withdraw balance
//     set withdrawBal(val:number){
//         this.#bal-=val
//     }
// }
// const acct =new Account('john')
// console.log(acct.getBal)
// acct.addBal=100
// console.log(acct.getBal)
// acct.withdrawBal=50
// console.log(acct.getBal)
//Abstraction
// main logic or calculation hidden to user
// class CoffieMachine{
//     #isOn:boolean=false
//     prepareCoffe(){
//         if(!this.#isOn){
//             console.log('machine is OFF')
//         }else{
//             console.log('Coffe is preparing..')
//         }
//     }
//     startMachine(){
//         this.#isOn=true
//         console.log('machine is ON')
//     }
// }
// let cff=new CoffieMachine()
// cff.startMachine()
// cff.prepareCoffe()
//INHERITANCE
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.getName = function () {
        console.log(this.name);
    };
    Student.prototype.getAge = function () {
        console.log(this.age);
    };
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    // getName(){
    //         console.log(this.name)
    //     }
    Teacher.prototype.getSubject = function () {
        console.log(this.subject);
    };
    return Teacher;
}(Student));
var tech = new Teacher('john', 22, 'web');
tech.getAge();
tech.getName();
tech.getSubject();
