var result = 5>3?2:0;
console.log(result);

var a = 'hello';
'hello'?console.log('thank you'):console.log('123');


if(5>3){
   result = 2;
}else{
  result = 0;
}
console.log(result);


a?test():add();//test
var handle = !a?test:add;
handle();//add
function test(){
  console.log('彩虹1');
}
function add(){
  console.log('夕阳2');
}
