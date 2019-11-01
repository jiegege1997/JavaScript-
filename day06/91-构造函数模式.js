console.log('构造函数模式');
//方法在外面  导致封装不完全
function Person(name,age,gender){
   //this指向的是 new 关键字创建的新实例
	  this.name = name;
		this.age = age;
		this.gender = gender;
}
var p1 = new Person('zhangsan',12,'男');
console.log(p1);
console.log(p1.constructor);

function Dog(name,age,color){
   	this.name = name;
	 this.age = age;
	 this.color = color;
}
var dog = new Dog('yixiu',12,'黄色');
console.log(dog);
console.log(dog.constructor);














