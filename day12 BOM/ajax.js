function myAjax(method,url,param,callback){
            //1
			var baseURL = 'http://134.175.154.93:8099'
            var http = new XMLHttpRequest();
            
            //2.处理get有参的情况
            if(method==='GET'&&param){
            	url+='?'+encodeFormData(param);
            }else{
            http.open(method,baseURL+url);}
            

            //3.监听
            http.onreadystatechange = function(){
            	if(http.status===200&&http.readyState===4){
            		console.log('访问成功');
            		callback(JSON.parse(http.responseText));
            		console.log(http.responseText);
            	}
            }

            //4.发送
            if(method==='POST'&&param){
            	//4-1 设置content-type为表单格式
            	http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
            	//4-2  发送
            	http.send(encodeFormData(param));
            }else{
            http.send();}
		}



//将js的对象转换成表单格式数据
		function encodeFormData(data){
			if(!data){
				return "";
			}
			var pairs = [];
			for(var name in data){
				if(!data.hasOwnProperty(name)){
					continue;
				}
				if(typeof data[name] == "function"){
					continue;
				}
				var value = data[name].toString();
				name = encodeURIComponent(name.replace("%20","+"));//编码名字
				value = encodeURIComponent(value.replace("%20","+"));//编码值
				pairs.push(name+"="+value);
			}
			return pairs.join('&');
		}