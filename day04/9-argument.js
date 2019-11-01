//arguments 存放实参列表  类数组对象
//length属性



//累加
function add(a,b){
	console.log(arguments);
	var total = 0;
	for(var i=0;i<arguments.length;i++){
	//	console.log(arguments[i]);
		total += arguments[i];
	}
	return total;
}
var result = add(1,2,4,5,6,45,20,45);
console.log(result);



//递归阶乘
function mul(num){
//	console.log(arguments.callee);
//	num*mul(num-1); 怕某天改了函数名
  if(num>1){
	 //return num*mul(num-1);
	   return num*arguments.callee(num-1);
	}else{
		 return 1;
	}
}
mul(5);
var result = mul(5);



