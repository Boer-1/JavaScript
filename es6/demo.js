//DEMO-1
//相比于test.js，这个es6转换es5可以用哎！
let a = 10;
let b = 20;
console.log(a+b);
const s = 'hello';
s.rating = 3;
console.log(s.rating);

//DEMO-2
let c = 2;
//js创建的临时String对象指定了一个属性，这个对象在使用后会立刻被删除
c++;
console.log(c);

//DEMO-3
const halloweenParty = new Date(2016,9,31,19,0);
halloweenParty.getFullYear();
