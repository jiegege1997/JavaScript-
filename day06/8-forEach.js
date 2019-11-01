//forEach
//for(){}

var arr = [{
	name:'zhangsan'
},{
	name:'lisi'
},{
	name:'hjj'
}];
var ageInit = 10;
arr.forEach(function(item,index,arr){
//	console.log(item,index,arr);
   item.age = ageInit++;
});
console.log(arr);















