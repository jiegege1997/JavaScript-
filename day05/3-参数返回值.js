function test(a,b){
  return '天下';
}
  test();
	console.log(test.length);  //2 形参的个数
  console.log(test());


//函数作为参数
function handle(fun){
  var msg = 'hello';
	fun(msg);
}

handle(function hjj (m){
	console.log(m);
});



//函数作为返回值
function handle2(){
   return function(){
	 	 	console.log('123');
	 }

}
handle2()(); //123
console.log(handle2());// fun







