console.log('解决了方法的封装问题  数据隔离坐的不好');





function Person(){}
Person.prototype.name = '张三';
Person.prototype.friends = [];
Person.prototype.sayName = function(){
	console.log(this.name);
}
var p1 =new Person();
console.log(p1.name);
var p2 = new Person();
console.log(p2.name);
p1.friends.push('terry');
console.log(p1.friends);
console.log(p2.friends);















