//DEMO-1
//相比于test.js，这个es6转换es5可以用哎！
let a = 10;
let b = 20;
console.log(a+b);
const d = 'hello';
d.rating = 3;
console.log(d.rating);

//DEMO-2
let c = 2;
//js创建的临时String对象指定了一个属性，这个对象在使用后会立刻被删除
c++;
console.log(c);

//DEMO-3
const halloweenParty = new Date(2016,9,31,19,0);
halloweenParty.getFullYear();

//DEMO-4
// for (;;){
//     console.log('I will repeat forever!');
// }

//DEMO-5
//一元正号运算符通常是将字符串转换成数字，或者调整那些否定的值
const s = '5';
const y = 3 + +s;// y is 8;如果不使用一元加号运算符，结果为字符串 35；
const y2 = 3 + s;
console.log(y);
console.log(y2);

//DEMO-6
//比较数字
let n = 0;
for(;;){
    n += 0.1;// 0.1并不能精确的表示一个双精度数值，它介于两个二进制小数之间
    if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

//DEMO-7
//短路求值
const doIt = true;
let x = 0;
const result = doIt && x++;//   能够确定结果的那个值就是逻辑运算的结果
console.log(x,result);

//DEMO-8
//解构参数
function addPrefix(prefix,...words){
    const prefixewords = [];
    for (let i = 0;i<words.length;i++){
        prefixewords[i] = prefix + words[i];
    }
    return prefixewords;
}
console.log(addPrefix('con','verse','vex'));

