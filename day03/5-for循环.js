//初始化条件执行了一次
//结束条件判断了11次
//迭代条件执行了10次


for(var a=1;a<=10;a++){
   console.log(a);
}
console.log(a);


console.log('-------------------');
var b = 1;
for(;b<11;){
	console.log(b);
	b++;
}

//死循环
hjj:for(count=0;;){
	console.log(count);
	count += 1;
	if(count==5){
		continue hjj;//结束本次循环,执行下一次循环
	}
	console.log('---------------------');
	if(count==20){
	break hjj;
	}
}



