var obj = {
	name:'zhangsan',
	age:12
};

console.log(obj.name);
console.log(obj['name']);
//中括号中没有使用引号包裹的，当作变量处理

var age = 'age';

console.log(obj[age]);

//遍历对象   for-in循环
for(var key in obj){
  //obj.key 访问的是obj中的key属性的值。undefined
	console.log(key,'------',obj[key])
}






