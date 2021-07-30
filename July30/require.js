var hello = require('./exports');
var math = require('./node_modules/math')

console.log(hello.name);
console.log(hello.age);
hello.sayName();

//调用math包
console.log(math.add(4,5));
