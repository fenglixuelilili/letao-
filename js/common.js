$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});
	$.fn.formtodata=function(){
		// 这里的this本身就是包装后的对象了
		var data=this.serializeArray();//JQ版的将表单数据序列化成对象
		var seridata={};
		data.forEach((ele,index) => {
			seridata[ele.name]=ele['value'];
		});
			return seridata;
		}
	

});
	//扩展jq，将表单数据封装成json数据
	
var app={
	baseurl:'http://fullstack.net.cn:3000'
}



//解析url地址，输入某个变量返回值
function paramsUrl(name){
var url=window.location.search.slice(1);
var urlArr=url.split('&');
for(var i=0;i<urlArr.length;i++){
	var urlarr=urlArr[i].split('=');
	if(name==urlarr[0]){
		return urlarr[1];
	}
}
return -1;
}
function artTemplate(str,data){
	var html=template.compile(str);
	return html(data);
}
$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});