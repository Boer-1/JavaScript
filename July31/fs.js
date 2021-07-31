/*
异步文件写入
 */

//引入fs模块
var fs = require('fs');

//打开文件
fs.open('hello2.txt','w',function (err,fd){
    //判断是否出错
    if(!err){
        console.log(fd);

        //如果没有出错，则对文件进行写入操作
        fs.write(fd,'我来写入了~~~',function (err){
           if(!err){
               console.log('写入成功~~~');
           }

           //关闭文件
            fs.close(fd,function (err){
                console.log('文件已关闭~~~');
                });
            });
    }
    else {
        console.log(err);
    }

});