var num = 5;
var mult = 1;//控制值
var str = '';//控制字符串
for(var i=num;i>0;i--){
   mult *= i;
	 if(i==1){
	 str += i;
	 } else{
	 str += i +'*';}
}
console.log(mult);
console.log(str+'='+mult);









