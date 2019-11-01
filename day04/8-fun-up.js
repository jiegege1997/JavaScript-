console.log('函数声明提升 会提升到代码的最前面');

test();
function test(){
 console.log(1)
}



console.log('函数声明提升和变量声明提升');
console.log(a); //undefined
var a = 1;




console.log('函数提升在前  变量提升在后 所以变量提升会被覆盖');
console.log(one);
function one(){
	console.log('one');
}
var one = 123;
console.log(one);








