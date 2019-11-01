 //在函数内部使用var修饰的变量是局部变量。
//局部变量在函数外部是访问不到的
//在函数外部声明的变量是当前js文件的全局变量
//在函数内部可以访问全局变量
//在函数外部不可以访问局部变量
var a = 1;
function test(){
	console.log(a);
	//var b = 2;
   b = 2;
	console.log(b);
}
test();
console.log(a);
console.log(b);



console.log('-------------------');
var g = 100;
function hjj(){
	console.log(g);
	var g = 200;
	console.log(g);
}
hjj();
console.log(g);








