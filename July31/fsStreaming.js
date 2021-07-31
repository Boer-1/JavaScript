var fs = require('fs');

/*
流式文件写入
创建一个可写流
 */
var ws = fs.createWriteStream('hello3.txt');//此时'水管'已接上

//可以通过监听流的open和close事件来监听流的打开与关闭
ws.once('open',function (){
    console.log('流打开了~~~');
});
ws.once('close',function (){
    console.log('流关闭了~~~');
});
//通过ws向文件中输出内容
ws.write('Streaming style write ');
ws.write('is going!!! ');//显然，这里是追加写入

/*
关闭流
close是从水管出水口关闭
end是从水管进水口关闭
 */
ws.end();
