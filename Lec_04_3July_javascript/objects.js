let userDetails={
  firstname:"John",
  lastname:"doe",
  hobbies:["cricket","football","hockey"],
  contact:{
    phone:{
      phoneNumber:"998989898",
      countryCode:"+91"
    }
  },
  // greet(greet){
  //   console.log(`${greet} ${this.firstname} ${this.lastname}`)
  // }
}


console.log(userDetails.firstname)
console.log(userDetails.hobbies)
console.log(userDetails.contact.phone.phoneNumber)
console.log(userDetails.age)
userDetails2.greet("Hello")

let userDetails2={
  firstname:"Mark",
  lastname:"Henry",
  // greet(greet){
  //   console.log(`${greet} ${this.firstname} ${this.lastname}`)
  // }
}

function greet(greet){
    console.log(`${greet} ${this.firstname} ${this.lastname}`)
}

greet.call(userDetails,"Hello")
greet.apply(userDetails,["Hello"])
let res=greet.bind(userDetails2,"Hello")
res()

TASK
const counter ={
  value:0,
  inc(){
    setTimeout(function() { //or make it arrow or store reference of this and use that Reference
      this.value++
      console.log(this.value)
    }.bind(this), 1000);
  }
}
counter.inc()

let userDetails={
  firstname:"John",
  lastname:"doe",
  contact:{
    phone:{
      phoneNumber:"998989898",
      countryCode:"+91"
    }
  }
}

JSON.stringify: convert object to json 
JSON.parse: convert json to object
let stringifyData = JSON.stringify(userDetails, null, 1)
console.log("objectData",userDetails)
console.log("stringifyData",stringifyData)
let realData=JSON.parse(stringifyData)
console.log(realData.firstname)

let userDetails2={...userDetails} //shallow
deepcopy ensure nested object data
let userDetails2 = JSON.parse(JSON.stringify(userDetails))
userDetails2.contact.phone.phoneNumber='000000'
console.log(userDetails.contact.phone.phoneNumber)
console.log(userDetails2.contact.phone.phoneNumber)

let userDetails={
  firstname:"John",
  lastname:"doe"
}

userDetails={...userDetails,age:21} //add 
delete userDetails.age // delete 
Object.assign(userDetails,{contact:{phone:9879878}}) //add 
console.log(userDetails)

// TASK
let arr = [1, 1, 2, 3, 4, 4, 5, 6]
// output: {'1':2,'2':1,'3':1,'4':2,'5':1,'6':1}

//METHOD1
let obj = {}
for (let ele of arr) {
  if (ele in Object.keys(obj)) {
    obj[ele] += 1
  } else {
    obj[ele] = 1
  }
}
console.log(obj)

//METHOD2
console.log(
  arr.reduce((obj, ele) => {
    obj[ele] = (obj[ele] || 0) + 1
    return obj
  }, {})
)
















