// Stores multiple data in single variable
// in contiguous memory location
// eg: let arr = ["apple",123,true]

// Array has  indexing [ 0,1,2,3.....  ] to get the data
// eg: [ "apple",123, true, 1.2, 'banana']  // loosely type lang ( store mutiple data types values)


// let arr = [ 1, "john", true] // looselytype
console.log(arr[0]) // first element
console.log(arr[arr.length-1]) // first element
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
arr.push('newEle') // insert at last
arr.unshift('startEle')  // inset at beginnning
arr.pop() // remove last ele
arr.shift() // remove first aray ele
// let arr2=arr //takes reference
let arr2=[...arr]
arr2.push('newEle')
console.log(arr)
console.log(arr2)

// let numArr=[1,2,2,3,4,5,5]
let unique =new Set(numArr)
console.log(typeof(unique))
console.log(Array.from(unique))
console.log(Math.max(...numArr))
console.log(Math.min(...numArr))

console.log(Math.ceil(3.6))
console.log(Math.floor(3.6))
console.log(Math.round(3.7))
console.log(Math.round(3.3))
console.log(Math.pow(2,3))
let r = Math.random()*10000
console.log(Math.floor(r))
console.log(Math.random().toFixed(3))

// let str = '214321sdfJ'
console.log(parseInt(str))

// let str = "the fox jumped on the fox"
console.log(str.split(' '))


// TASK `
let str = '214321sdfJ'
// calculate the sum of squares of unique numbers out of '214321sdfJ'
// output: 1+4+9+16=30
//Method:1
let nums = parseInt(str)
console.log('nums',nums, typeof(nums))
let strNums = String(nums)
let arr=strNums.split('')
console.log('arr',arr)
let numArr=arr.map(ele=>Number(ele))
console.log('numArr',numArr)
let setArr = new Set(numArr)
console.log('setArr',setArr)
numArr=Array.from(setArr)
console.log(numArr)
let sumOfSquares=0
for(let i=0;i<numArr.length;i++){
  sumOfSquares+=Math.pow(numArr[i],2)
}
console.log(sumOfSquares)

//Mehtod2
// let sumOS = Array.from(new Set(String(parseInt(str))
// .split('')))
// .map(ele=>Number(ele))
// .reduce((acc,ele)=>acc+Math.pow(ele,2),0)
// console.log(sumOS)   