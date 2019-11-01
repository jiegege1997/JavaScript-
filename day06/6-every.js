//every some filter map forEach
//一般是两个参数  第二个参数是函数作用域（一般不写）
var arr = [23,45,1,4,3,45,7];



Array.prototype.myEvery = function(fun,funThis){
			var result;
			for(var i=0;i<this.length;i++){
			var result =	fun.call(funThis,this[i],i,this);
			if(!result){
			  break;
			}
			}
			return result;

}


console.log(arr.myEvery(function(item,index,arr){
    console.log(this);
	  return item>10;	
},arr))







