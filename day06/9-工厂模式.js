console.log('工厂模式批量创建对象');
var sayName = function(){
	console.log(this.name);
}
function createObject(a,b,c){
	var obj = {
	   name:a,
		 age:b,
		 gender:c,
		 say:sayName
	};
	return obj;
}


var  o1 =   createObject('zhangsan',12,'男');
var  o2 =   createObject('hjj',22,'男');
var  dog =  createObject('zwq',22,'女');
console.log(o1,o2,dog);
//通过实例找构造函数
console.log(o1.constructor);











