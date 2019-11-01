//对象序列化
var obj = {
	name:'hjj',
	age:12
};
console.log(obj);
console.log(JSON.stringify(obj));
var str = '{"name":"hjj","age":12}'
console.log(JSON.parse(str));




