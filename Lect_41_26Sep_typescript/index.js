//FUNCTIONS
// TYPE ALIAS | CUSTOM TYPES
// needed: string=> concat, number=> sum
function sum(a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(sum('12', '12'));
console.log(sum(1, 2));
//FUCNTION RETURN TYPE
function combine(a, b) {
    return a + b;
}
function printName(name) {
    return "hi ".concat(name);
}
var box = combine;
var logg = printName;
console.log(combine(2, 3));
console.log(box(2, 3));
console.log(printName('john'));
console.log(logg('jolly'));
//FN CALLBACK
function printMulti(n) {
    return "Output is: ".concat(n);
}
function multi(n1, n2, cb) {
    return cb(n1 + n2);
}
console.log(multi(1, 2, printMulti));
function print(name, age) {
    if (name === void 0) { name = 'john'; }
    if (age === void 0) { age = 0; }
    return "Hi, ".concat(name, ", your age is ").concat(age);
}
var user = {
    name: 'john', age: 22, isActive: true, printDetail: print
};
console.log(user.printDetail()); // DEFAULT PARAMETER CALL
// ANY UNKNOWN NEVER
// // let inputVal:any
// let inputVal:unknown
// let product:string
// inputVal=11
// inputVal='11'
// product=inputVal // can't assign unknow to string, nay can be assigned
function genereateError(error, code) {
    throw { error: error, code: code };
}
console.log(genereateError('server serror', 500));
