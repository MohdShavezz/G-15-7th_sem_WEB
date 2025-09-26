//FUNCTIONS
// TYPE ALIAS | CUSTOM TYPES

type NumStr=number|string 
// needed: string=> concat, number=> sum
function sum(a:NumStr,b:NumStr){
    if(typeof(a)==='number'&&typeof(b)==='number'){
        return a+b
    }else{
        return a.toString()+b.toString()
    }    
}

console.log(sum('12','12'))
console.log(sum(1,2))

//FUCNTION RETURN TYPE
function combine(a:number,b:number):number{
 return a+b
}
function printName(name:string):string{
    return `hi ${name}`
}

type myCombineType=(a:number,b:number)=>number
type myPrintType=(n:string)=>string

let box:myCombineType=combine
let logg:myPrintType= printName

console.log(combine(2,3))
console.log(box(2,3))
console.log(printName('john'))
console.log(logg('jolly'))


//FN CALLBACK
function printMulti(n:number){ //call back function
 return `Output is: ${n}`
}
type CB=(n:number)=>string
function multi(n1:number,n2:number,cb:CB){
  return cb(n1+n2)
}
console.log(multi(1,2,printMulti))


//OPTIONAL TYPE &  DEFAULT PARAMETER
type UserType={
  name?:string,
  age:number,
  isActive:boolean,
  printDetail:(name?:string,age?:number)=>string
}

function print(name:string='john',age:number=0){
  return `Hi, ${name}, your age is ${age}`
}

const user:UserType={
  name:'john',age:22,isActive:true,printDetail:print
}
console.log(user.printDetail())  // DEFAULT PARAMETER CALL


// ANY UNKNOWN NEVER

// let inputVal:any
let inputVal:unknown

let product:string

inputVal=11
inputVal='11'

product=inputVal // can't assign unknow to string, nay can be assigned

function genereateError(error:string,code:number):never{
  throw {error,code}
}

console.log(genereateError('server serror',500))