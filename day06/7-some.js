var stus = [{
	name:'zhangsan',
	age:20
},{
	name:'lisi',
	age:12
},{
	name:'hjj',
	age:13
}];
//判断是否都是成年，都是返回true   否则返回false
console.log(stus);
var result = !(stus.some(function(item,index,arr){
	return  item.age<18;
}));
console.log(result);
//判断是否有未成年人，有返回true  否则返回false
var result1 = stus.some(function(item,index,arr){
	return item.age<18;
})
console.log(result1);

//filter
//过滤出所有成年人和未成年人

var result = stus.filter(function(item,index,arr){
		return item.age>=18;
})
console.log(result);

var result = stus.map(function(a,b,c){
	return a.name;
})
console.log(result);
//链式调用
//找到所有的成年人
//并且返回的成年人的名字
var result = stus.filter(function(a,b,c){
	return a.age>18;
}).map(function(a,b,c){
	return a.name;
});
console.log(result);








