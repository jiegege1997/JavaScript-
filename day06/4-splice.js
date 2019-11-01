//三个参数，splice(开始位置，删除项数，要插入的任意数量 的项)
//两个参数 （开始位置，删除项数）
//

//删除
var arr = [32,4,9,3,0];
var result = arr.splice(1,3);
console.log(result);
console.log(arr);
//插入
arr.splice(1,0,'hello','sss');
console.log(arr);
//替换
arr.splice(1,2,1,2);
console.log(arr);





