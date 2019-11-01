var num = 12;
//转成10进制的字符串
console.log(num.toString());//'12'
//转成2进制的字符串
console.log(num.toString(2));//1100
//转成8进制的字符串
console.log(num.toString(8));//14
//转成16进制
console.log(num.toString(16));//'c'

var bool = true;
console.log(bool.toString());//'true'
console.log(false.toString());
//不可直接使用number类型的值
console.log((3).toString());
console.log(String(123));//'123'
console.log(String(null));//'null'

//将其他基本数据类型使用拼接字符串的形式转换
console.log(123+'');
console.log(true+'');
