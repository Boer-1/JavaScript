var fs = require('fs');
fs.readFile('hello3.txt',function (err,data){
   if(!err){
       //Buffer 通用性更高
       console.log(data.toString());
   }
});
//将data写入到文件
fs.readFile('school.jpeg',function (err,data){
    if(!err){
        fs.writeFile('scene.jpeg',data,function (err){
           if(!err){
               console.log('文件写入成功');
           }
        });
    }
});