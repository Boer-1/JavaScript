//给exports这个属性赋的值，将会暴露到该module之外
function calculate(a,x,n){
    if(x === 1) return a * n;
    return a * (1 - Math.pow(x,n))/(1-x);
}
module.exports = calculate();

//等价的，可以这么写
exports.geometricSum = function (a,x,n){
    if(x === 1) return a * n;
    return a * (1 - Math.pow(x,n))/(1-x);
};

// DEBUG = *
// const debug = require('debug')('main');
// debug("starting");


const fs = require('fs');
const path = require('path');

//创建文件
fs.writeFile(path.join(__dirname,'hello.txt'),'hello from Node!',function (err){
    if(err) return console.log('Error writing to file');
});
fs.readFile(path.join(__dirname,'hello.txt'),function (err,data){
    if(err) return console.log('Error writing to file');
    console.log('Read file contents:');
    console.log(data);
});
fs.readFile(path.join(__dirname,'hello.txt'),{encoding:'utf-8'},function (err,data){
    if(err) return console.log('Error writing to file');
    console.log('Read file contents:');
    console.log(data);
});
fs.readdir(__dirname,function (err,files){
    if(err) return console.error('Unable to read directory contents');
    console.log(`Contents of ${__dirname}:`);
    console.log(files.map(f => '\t' + f).join('\n'));
})

//操作系统
const os = require('os');
console.log('Hostname:' + os.hostname());
console.log('OS type:' + os.type());
console.log('OS platform:' + os.platform());
console.log('OS release:' + os.release());
console.log('OS uptime:' + (os.uptime()/60/60/24).toFixed(1) + 'days');
console.log('CPU architecture:' + os.arch());
console.log('Number of CPUs:' + os.cpus().length);
console.log('Total memory:' + (os.totalmem()/1e6).toFixed(1) + "MB");
console.log('Free memory:' + (os.freemem()/1e6).toFixed(1) + "MB");










