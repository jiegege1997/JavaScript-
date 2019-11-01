var obj =  {
	name:'hjj',
	age:12,
	gender:'男',
	info:'',
	hibby:null,
	address:''
};

//delete obj.address;
for(var key in obj){
  //如果obj[key]转换为boolean为false
	if(!obj[key]){
	   delete obj[key];
	}
}
console.log(obj);



