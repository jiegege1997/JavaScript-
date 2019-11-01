var str = 'helloworld javascript';
//贪婪模式和非贪婪模式，默认的是贪婪模式

//贪婪模式
var pattern = /\w{3,8}/i;  //连续出现3-8次
console.log(pattern.exec(str)); //hello
//懒惰模式 非贪婪模式
var pattern1 = /\w{3,8}?/i;
console.log(pattern1.exec(str));


//  \d? 出现0-1次
//  \d?? 出现0次
//  \d+ 出现0到多次


//验证电话号码

var str = '18779720078';
var pattern = /^\d{11}$/;
console.log(pattern.test(str));














