'use strict';

//DEMO-1
//相比于test.js，这个es6转换es5可以用哎！
var a = 10;
var b = 20;
console.log(a + b);
var d = 'hello';
d.rating = 3;
console.log(d.rating);

//DEMO-2
var c = 2;
//js创建的临时String对象指定了一个属性，这个对象在使用后会立刻被删除
c++;
console.log(c);

//DEMO-3
var halloweenParty = new Date(2016, 9, 31, 19, 0);
halloweenParty.getFullYear();

//DEMO-4
// for (;;){
//     console.log('I will repeat forever!');
// }

//DEMO-5
//一元正号运算符通常是将字符串转换成数字，或者调整那些否定的值
var s = '5';
var y = 3 + +s; // y is 8;如果不使用一元加号运算符，结果为字符串 35；
var y2 = 3 + s;
console.log(y);
console.log(y2);

//DEMO-6
//比较数字
var n = 0;
for (;;) {
    n += 0.1; // 0.1并不能精确的表示一个双精度数值，它介于两个二进制小数之间
    if (Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log('Stopped at ' + n);

//DEMO-7
//短路求值
var doIt = true;
var x = 0;
var result = doIt && x++; //   能够确定结果的那个值就是逻辑运算的结果
console.log(x, result);

//DEMO-8
//解构参数
function addPrefix(prefix) {
    var prefixewords = [];

    for (var _len = arguments.length, words = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        words[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < words.length; i++) {
        prefixewords[i] = prefix + words[i];
    }
    return prefixewords;
}
console.log(addPrefix('con', 'verse', 'vex'));