console.log('组合模式');





function Person(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.friends = [];
	console.log('0000');
}
Person.prototype = {
  constructor:Person,
	sayName:function(){
		console.log(this.name);
	}
};
var p1 = new Person('zhangsan',12,'男');
console.log(p1);
//console.log(p1.constructor);
var p2 = new Person('lisi',15,'女');
p1.friends.push('terry');
console.log(p1.friends);//terry
console.log(p2.friends);//[]





console.log(Person('zhangsan'));







