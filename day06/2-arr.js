//concat slice splice

var arr = [3,4,5,2,4];
var arr2 = [1,2,3,4,5];
//arr.push(arr2);
//console.log(arr);
//如果arr2是数组 遍历arr2 拿到内部的每一个元素 依次放到arr中
/*if(Array.isArray(arr2)){
	for(var i=0;i<arr2.length;i++){
		arr.push(arr2[i]);
	}
}
console.log(arr);*/

var result = arr.concat(arr2);
console.log(arr,'---------------------');
console.log(result);

var result2 = arr.concat('hello');
console.log(result2);

/* 1不改变原数组,创建副本
   2 如果参数是数组，展开放进去
	 3 如果参数是其他类型 直接放到末尾
	 4 返回副本 */

Array.prototype.myConcat = function(param){
   //  var temp = arr;  错误   因为引用类型传递是地址传递 改变其中一个 两个都会改变
   // 1 创建副本
	    var temp = [];
			for(var i=0;i<this.length;i++ ){
			  temp.push(this[i]);
			}
			//2 创建参数数据类型
			if(Array.isArray(param)){
			  for(var j=0;j<param.length;j++){
					temp.push(param[j]);
				}
			}else{
				temp.push(param);
			}

			return temp;
}
var result = arr.myConcat('天下');
console.log(result);
var result2 = arr.myConcat([6,7,8,9]);
console.log(result2);
console.log(arr);













