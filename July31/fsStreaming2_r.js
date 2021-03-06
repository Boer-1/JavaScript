/*
流式文件读取也适用于比较大的文件，可分多次将文件读取到内存中
 */
var fs = require('fs');

//创建一个可读流
var rs = fs.createReadStream('school.jpeg');
//创建一个可写流
var ws = fs.createWriteStream('scenery2.jpeg');

//监听流的开启和关闭-------------------------------------------------------
rs.once('open',function (){
   console.log('可读流打开了~~~');
});
rs.once('close',function (){
    console.log('可读流关闭了~~~');
    /*
        数据读取完毕，关闭可写流
        ws.end();
     */
});
ws.once('open',function (){
    console.log('可写流打开了~~~');
});
ws.once('close',function (){
    console.log('可写流关闭了~~~');
});
//-------------------------其实中间这部分并不必要-----------------------
/*
    如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
    若文件较大，则会多次读取

    rs.on('data',function (data){
       console.log(data);
       //将读取到的数据写入到可写流中
        ws.write(data);
    });
*/
//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
