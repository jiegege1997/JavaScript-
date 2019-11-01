/* 冒泡排序算法
  [23,4,56,232,9,100]
  思想 (升序)
  先找出最大的 放到最后
  再找出第二大的 放到最后
 
 找最小的 放到最后  
 第二小的 放到最后 
   内部其实就是两个数的交换
 */


var arr = [23,4,56,232,9,100];
console.log(arr);
for(var a=0;a<arr.length;a++){
   for(var b=0;b<arr.length-1;b++){
	 if(arr[b]>arr[b+1]){
	  var  c = arr[b+1];
			 arr[b+1] = arr[b];
			 arr[b] = c;
	 }
	 }
	 console.log('第'+(a+1)+'轮排序的结果:',arr);
}
console.log(arr);


