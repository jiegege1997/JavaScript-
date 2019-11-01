var str = '123HELLO wor HELLO ld hello';
var pattern = /hello/ig;
//console.log(pattern.test(str)); //false
//console.log(pattern.lastIndex);
//console.log(pattern.exec(str));

//将匹配到的所有的字符串拿出来，放到一个数组中 []

var arr = [];
while(result = pattern.exec(str)){
	//console.log(result);
	//arr.push(result[0]);
	arr = arr.concat(result);
}
console.log(arr);

//String类型提供的正则表达式方法match,返回所有符合条件的元素组成的数组 没找到返回null
var result = str.match(pattern);
console.log(result);

//search方法  找到了返回索引  没找到返回-1
console.log(str.search(pattern));



console.log('----------------------');
var str = 'hello hello hello world';
//replace  将所有hello字符串替换成js字符串  不改变原字符串 返回更改后的字符串
var result = str.replace(pattern,'天下');
console.log(result);
console.log(str);



var str2 = '12&34&45';
console.log(str2.split('&'));
console.log(str2.split(/&/));
console.log(str2.split(''));










