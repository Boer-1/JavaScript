//DEMO-1
//统计一个数组中所有数字的综合
const moment = require("moment-timezone");
const url = require("url");
(function (){
    function sumArrElements(arr){
        let add = 0;
        for (let i=0;i<arr.length;i++){
            add += arr[i];
        }
        return add;
    }
    const array = [1,2,3,4,5];
    console.log(sumArrElements(array));
})();
//未免显得太low
//有"注入"功能的传递函数
(function (){
    function sum(arr,f){
        //如果没有提供任何函数，使用一个将参数原样返回的‘空函数’
        if(typeof f != 'function') f = x => x;
        return arr.reduce((a,x) => a += f(x),0);
    }
    //可计算和，平方和，立方和
    console.log(sum([1, 2, 3]));
    console.log(sum([1, 2, 3], x => x * x));
    console.log(sum([1, 2, 3], x => Math.pow(x, 3)));
})();

//DEMO-2
//setInterval和clearInterval
// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function (){
//     let now = new Date();
//     if(now.getMinutes() !== start.getMinutes() || ++i > 10)
//         return clearInterval(intervalId);
//     console.log(`${i}:${now}`);
//     console.log(i);
// },5*1000);


//DEMO-3
//Date.UTC跟Date构造器具有相同的参数，不过它并不会返回一个新的Date实例，而是返回该日期的数值。
//然后将该数值传给Date构造器去创建一个Date实例
(function (){
    const dd = new Date(Date.UTC(2016,4,27));
    console.log(dd);
//如果需要在服务器端构建一个具有指定时区（而非手动转换时区）的Date实例，可以使用moment.tz
//需要引用moment-timezone库
    const  moment = require('moment-timezone');
    const d = moment.tz([2016,3,27,9,19],'America/Los_Angeles').toDate();
    console.log(d);
    console.log('_____________________');
})();

//DEMO-4
//展示日期
(function (){
    const d = new  Date(Date.UTC(1930,4,10,6,6,7));
    console.log(d);
    console.log(d.toLocaleDateString());
    console.log(d.toLocaleTimeString());
    console.log(d.toTimeString());
    console.log(d.toUTCString());
    console.log('_____________________');
    console.log(moment(d).format('YYYY-MM-DD'));
    console.log(moment(d).format('YYYY-MM-DD HH:mm'));
    console.log(moment(d).format('YYYY-MM-Do HH:kk [UTC] Z'));
    console.log(moment(d).format('hh:mm a'));
    console.log('_____________________');
    const d1 = new Date(1996,2,1);
    const d2 = new Date(2009,4,27);
    const d3 = moment();
    const msDiff = d2 - d1;
    console.log(msDiff.valueOf());
    console.log(d3);
    //将其推至9小时后，再减去3分钟
    d3.add(9,'hours')
        .subtract(3,'minutes');
    console.log(d3);
})();

// function printDOM(node,prefix){
//     console.log(prefix,node.nodeName);
//     for(let i = 0;i < node.chiledNodes.length;i++){
//         printDOM(node.chiledNodes[i],prefix + '\t');
//     }
// }
// printDOM(document,'');

