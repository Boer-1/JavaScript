/*
简单文件写入
 */

//引入模块
var fs = require('fs');

fs.writeFile('hello3.txt','这是简单文件写入',function (err){
   if(!err){
       console.log('写入成功~~~');
   }
});