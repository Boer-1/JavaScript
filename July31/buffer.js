var str = '你好 TUSTer'

//将一个字符串保存到Buffer中
var buf = Buffer.from(str);
console.log(buf);

console.log(buf.length);//占用内存的大小
console.log(str.length);//字符串的长度

//创建一个10个字节的Buffer
var buf2 = Buffer.alloc(10);
buf2[0] = 16;
//'16'是十进制，'10'是16进制
console.log(buf2);
//控制台显示10进制
console.log(buf2[0]);
//转换成16进制输出
console.log(buf2[0].toString(16));

var buf3 = Buffer.from('我是一段文本数据');
console.log(buf3);//16进制形式
console.log(buf3.toString());//字符串形式