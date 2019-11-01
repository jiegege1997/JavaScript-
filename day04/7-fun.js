function test(){
	console.log('test');
    return 1;
	console.log('return后的语句不会再执行');
}
var result =  test();
console.log(result);
test();




console.log('函数表达式声明, 匿名函数')
var test1 = function(){
 console.log(123);
}
test1();


console.log('匿名函数使用 立即执行函数   IIFE');
(function(){
	console.log(111);
}) ()
