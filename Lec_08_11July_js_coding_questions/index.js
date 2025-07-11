// Q1
// he ordered few items from amoazon,
// company will only reimburse amount if it's above 1000
// 1. find the list of items whos purchase went above 1000
// 2. find total purchase
const order = [
    { item: "laptop", qty: 1, price: 5000 },
    { item: "mouse", qty: 2, price: 500 },
    { item: "monitor", qty: 1, price: 8000 },
    { item: "cable", qty: 3, price: 200 }
]

// const purchaseAbove1000=order.filter(ele=>ele.qty*ele.price>1000)
// console.log(purchaseAbove1000)
// console.log(purchaseAbove1000.map(ele=>ele.item))


// Q2
// every vs some javascript
// 1. Are all stedents adult?
// 2. Is there at least One student who scored more that 90?
const chilrenScores = [
    { name: "Aman", score: 92, age: 25 },
    { name: "Neha", score: 88, age: 17 },
    { name: "Ravi", score: 79, age: 30 },
    { name: "Lina", score: 95, age: 16 },
]

// console.log('1. Are all stedents adult?'
// ,chilrenScores.every(e=>e.age>18))
// console.log('2. Is there at least One student who scored more that 90?',
// chilrenScores.some(e=>e.score>90))

// Q3
// find the length of last word in string
let str = 'faksld fj lsdjff   adsf  ' //output: 4
// console.log(str.trimEnd().split(' ').at(-1).length)

// Q4
let nums = [1, 2, 2, 3, 4, 4, 5]
// return repititive numbers  2,4 
// let dummy=[]
// for(let i of nums){
//   if(!dummy.includes(i)) dummy.push(i)
// }

// let obj={}
// for(let i of nums){
//   if(obj.hasOwnProperty(i)){
//     obj[i]++
//   }else{
//     obj[i]=1
//   }
// }
// console.log(obj)
// for(let i in obj){
//   if(obj[i]>1){
//     console.log(i)
//   }
// }
// console.log(dummy)

// Q5 Implement Cache fetching
// create fetchData(id) function  
// const cache={}
// const database={
//   '1':{name:'apple',price:100},
//   '2':{name:'banana',price:50},
//   '3':{name:'orange',price:60}
// }

// function fetchData(id){
//   if(id in cache){
//     console.log('from Cache')
//     return cache[id]
//   }else{
//     console.log('from Database')
//     cache[id]=database[id]
//     return database[id]
//   }

// }
// console.log(fetchData(1))
// console.log(fetchData(1))
// console.log(fetchData(3))
// console.log(fetchData(3))

// Q6 check palindrome
// madam true
// 12321 true
// asdf false

function palindrome(data) {
    if (typeof (data) === 'string') {
        let st = data.split('').reverse().join('')
        return st == data
    } else {
        let num = data
        let sum = 0
        while (num > 0) {
            sum = sum * 10 + num % 10
            num = Math.floor(num / 10)
        }
        if (sum === data) {
            return true
        } else {
            return false
        }
    }
}
console.log(palindrome(12221))



