//number类型
var a = 1;
var b = 2.234;
console.log(a,b);
console.log(typeof a);
//八进制
var eight = 011;
console.log(eight); //9
//十六进制
var h = 0x12;
console.log(h);//18
//科学计数法
console.log(5e2);//5*10的2次方  500
console.log(5e-2);//5*10的-2次方  0.05

//NaN不是一个数值，但是属于number类型
var c = NaN;
console.log('-------------');
console.log(c);//NaN
console.log(typeof c);//number
var d = 10/'hello';
console.log(d);//NaN
//判断两个NaN是否相等,判断一个值是否是NaN,不能使用双等去判断 NaN其实就不是一个固定的值 但是他是number类型
console.log('---------');
console.log(NaN == NaN);//false
console.log(c == d);//false
console.log(isNaN(d));//true
//isNaN(实际参数,实参，参数)
console.log(isNaN(120));//false
//infinity   无限大的数
console.log(10/0); 
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_VALUE);//1.7676931348623157e+308

console.log(3e333);
console.log(typeof Infinity);
console.log(-3e333);
console.log(typeof -Infinity);

