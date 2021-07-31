/*
*/
var fs = require('fs');
console.log(fs);
//打开文件
var fd = fs.openSync('hello.txt','w');
//向文件中写入内容
fs.writeSync(fd,'今天天气真不错~~~');
//关闭文件
fs.closeSync(fd);
