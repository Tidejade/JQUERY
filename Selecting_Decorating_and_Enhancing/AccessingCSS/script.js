$(document).ready(function(){
	var fontSize=$('#celebs tbody tr:first').css('font-size');
	alert(fontSize);
	// retrive CSS properties 
//这种方法查到只是 浏览器渲染后的属性值 而不是CSS文件中存在的值

	$('#celebs tbody tr:even').css('background-color','#dddddd');
	$('#celebs tbody tr:even').css('color','red');
	/*$（'#celebs tbody tr:even').css({
		'background-color':'#dddddd',
		'color':'#666666'}
	});*/
	//多个属性的设置的情况
	//设置css的属性应用JQUERY的 属性css('background-color','#dddddd');
});
    //$('#celebs tbody tr:even').css('background-color','#dddddd');
