let x:number=11;
type nameType=string
let address:nameType='1231234'
let isActive:boolean
isActive=0

function sum(a,b){
    if(typeof(a)==='number'&& typeof(b)==='number'){
        return a+b
    }else{
        return parseInt(a)+parseInt(b)
    }
}

//avoid manual type checking instead use define types
function sum(a:number,b:number){
    return a+b
}
console.log(sum(1,'2'))

// ARRAY 
let fruits:string[] =['asdf','apple']
let nums:number[]
nums=['asfd',122] 

//TUPLE
['string','number']
let tuple:[string,number]
tuple=['num',2]

//OBJECT
// enum ROLE {ADMIN,USER,MANAGER}

enum ROLE {
    ADMIN="ADMIN",
    USER="USER",
    MANAGER="MANAGER"
}

type userType={
    name:string,
    age:number,
    isActive:boolean,
    hobbies:string[]
    role:ROLE
}
let user:userType={
    name:'username',
    age:12,
    isActive:true,
    hobbies:['cricket','football'],
    role:ROLE.USER

}
console.log(user.role)




