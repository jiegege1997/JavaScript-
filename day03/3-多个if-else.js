var grade = 300;
var result;
if(grade&&((typeof grade)==='number')&&(grade>0)&&(grade<=100))
{
if(grade>80){
	result = '优';
}else if(grade>70){
	result = '良';
}else if(grade>60){
  result = '中';
}else{
	result = '不及格';
}
}


else{
	result = '出现错误';
}


console.log(result);

