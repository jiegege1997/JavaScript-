var a = 'hello';
//将其他数据类型转换为number类型
console.log(+a);//NaN
var b = '123';
console.log(+b);
console.log(typeof +b);//number

console.log(+true);//1
console.log(+false);//0
console.log(+null);//0
console.log(+undefined);//NaN
console.log(+'');//0
console.log(+' ');


console.log(-'123');
console.log(-null)
console.log(+'-123');//123
console.log(-'-123');//123

