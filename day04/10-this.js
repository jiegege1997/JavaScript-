//this指向当前函数的作用域名

//function test(){
//	console.log(this);//global全局对象
	//如果测试环境是浏览器 指向的是window对象
	//如果是note.js 是global对象
//}

//test();


var obj ={
	name:'hjj',
	age:12,
	sayName:function(){
		console.log(this.name);
	}
}
obj.sayName();



