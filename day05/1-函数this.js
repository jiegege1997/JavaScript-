console.log('更改this指向，执行函数')
function test(a,b){
	console.log(this,a,b);
}
//test(1,2);//global对象    undefined


var obj = {name:'zhangsan'}


//更改test内部的this指向为obj
test.call(obj,3,4);// obj  3  4
test.apply(obj,[3,4]);// obj  3  4
console.log('-----------------');
test.bind(obj);//只更改函数指向  不执行函数
test.bind(obj)(5,6);//





