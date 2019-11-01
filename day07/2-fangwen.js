//访问器属性 没有值 有get和set方法
var obj = {
	name:'hjj',
	 age:12,
	_weight:100
};
Object.defineProperty(obj,'weight',{
	get:function(){
		//获取值
		return this._weight-20;
	},
	set:function(param){
		//设置值
		this._weight = param;
	},
	configurable:true
//	enumerable:true

});
/*Object.defineProperty(obj,'_weight',{
	enumerable:false
});*/
Object.defineProperties(obj,{
	weight:{
		enumerable:true
	},
	_weight:{
		enumerable:false
	}
});





console.log(obj.weight);
obj.weight = 130;
console.log(obj.weight);
console.log(obj._weight);
console.log(obj);

console.log(Object.getOwnPropertyDescriptor(obj,'weight'));
console.log(Object.getOwnPropertyDescriptor(obj,'_weight'));










