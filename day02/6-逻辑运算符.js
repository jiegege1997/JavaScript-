
//逻辑与  短路运算符     有假则假，如果遇到假，立即跳出该假，如果没有遇到假，跳出最后一个数
// 其实就像是在找一群真的数中的一个假  转换为boolean类型为false的
//null NaN undefined 0 '' false

var a = 123456;
var b = undefined;
var c = 'hello';
var d = '';
var e = 0;

console.log(a && b); //undefined
console.log(b && c); //undefined
console.log(a && c); //hello
console.log(b && d); //undefined
console.log(d && e);


console.log('一群假中找一个真');
console.log(a || b);
console.log(a || c);//123
console.log(b || d );//''
console.log(d || e);//0

//!返回的一定是boolean类型
console.log('------------');
console.log(!a);
console.log(!!b);
