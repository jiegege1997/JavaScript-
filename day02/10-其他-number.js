console.log(Number(123));
console.log(Number('123'));
console.log(Number('+123.34'));
console.log(Number('abc'));//NaN
console.log(Number('1+2'));//NaN
console.log(Number(null));//0
console.log(Number('undefined'));//NaN

console.log(+(123));


console.log('-----ParseInt-----');
//parseInt 只认数字  null undefined  全是NaN
console.log(parseInt(123.3));//123
console.log(parseInt('123.45s123'));//123
console.log(parseInt('abc12'));//NaN
console.log(parseInt('0xa'));//10


console.log('-----parseFloat-----');
console.log(parseFloat('123.34'));//123.34
console.log(parseFloat('a123'));//NaN
console.log(parseFloat('0xa'));//0
console.log(parseFloat('010'));//10

