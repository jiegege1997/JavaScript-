/*prototype  constructor
每一个构造函数(Object)都有一个属性prototype 指向原型对象
每一个原型对象中有一个属性 constructor 指向构造函数
实例obj可以调用 Object中的原型对象的属性和方法
小的实例obj也可以写一些自己的方法 satHi()*/

console.log(Object.prototype);
console.log(Object.prototype.constructor === Object);  //Object
var obj = {name:'hjj'};
console.log(obj.toString());// object object
//实例中没有的属性和方法 其实就是原型对象里面的
console.log(obj.toString === Object.prototype.toString);



console.log('----------------');
console.log(obj.constructor);

console.log('name' in obj);
console.log('toString' in obj);
console.log('aaa' in obj);


//hasOwnProperty()
console.log('hasOwnProperty');
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('toString'));//如果自己重写了toString,那么为true

//propertyIsEnumerble
console.log('是否是自由属性并且可枚举propertyIsEnumerable');
console.log(obj.propertyIsEnumerable('name'));
console.log(obj.propertyIsEnumerable('toString'));


for(var key in obj){
  console.log(key);
}

console.log('判断Object.prototype是不是obj的原型对象');
console.log(Object.prototype.isPrototypeOf(obj));

var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());






