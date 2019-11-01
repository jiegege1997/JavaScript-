console.log('声明函数');

var arr = new Array();
console.log(arr);   //[]

var arr1 = new Array(20);  //设置数组长度为20
console.log(arr1);   //[,,,,,,,,,,,]    undefined
console.log(arr1[5]);



var arr2 = new Array('张三','lisi');
console.log(arr2);    //'张三','lisi'
console.log(arr2.length);  //2
console.log(arr2[0]);   //张三
console.log(arr2[100]);   //undefined

//2 数组字面量

var arr3 =['胡俊杰','张伟强','戴洪波'];

console.log(arr3);






