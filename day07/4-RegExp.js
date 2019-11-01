//进行字符串的匹配
var str = 'HELLOworld helloworld hello';
//找hello字符串，如果有返回true,如果没有  返回false
var pattern = /hello/ig;
//进行模式匹配
console.log(pattern.lastIndex);
var result =  pattern.test(str);
console.log(result);
console.log(pattern.lastIndex);// 5
//exec  如果找到返回的包含该字符串的数组，如果没有找到，返回null
var result1 = pattern.exec(str);
console.log(result1);
console.log(result1.length);
console.log(result1.index);//11位置
console.log(result1.input);










