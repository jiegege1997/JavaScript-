//使用new构造函数去创建构造函数的实例
//Object 构造函数
var obj = new Object();
console.log(obj);  //{}
//往对象中添加属性或方法
obj.name = '张三';
obj.age = 12;
obj.sayHi = function(){}
console.log(obj);


//使用对象字面量声明对象
var obj2 = {
	

};
var obj3 = {
	name:'list',
	age:22,
  sayHi:function(){
		console.log('sayhi');
	}
};
console.log(obj3);
console.log('------------');
obj3.sayHi();

//访问对象种的属性或者方法
console.log(obj3.name);//list
console.log('如果属性在对象中不存在 输出undefined')
console.log(obj3.gender);//undefined
console.log(obj3.sayHi);//[function]


function test(){}
console.log(test);//[Function]
//函数的运行
test();  //函数的运行



















