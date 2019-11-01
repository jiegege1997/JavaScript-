//对象的属性的特性
var obj = {
	name:'hjj',
	age:12
};

console.log(obj); //键值对 key-value 属性-属性值

//获取属性的可描述属性
console.log(Object.getOwnPropertyDescriptor(obj,'age'));


//修改属性的描述信息
Object.defineProperty(obj,'name',{
	//设置可枚举性
 //	enumerable:false,
 //设置是否可修改值 是否可写
 // writable:false,
 //设置属性值
   value:'terry',
 //设置是否可配置的（删除 重新定义）
   configurable:false
})
//obj.name = 'zhangsan'
/*console.log(Object.getOwnPropertyDescriptor(obj,'name'));
Object.defineProperty(obj,'name',{
	enumerable:false
});*/
//delete obj.name;
console.log(obj);













