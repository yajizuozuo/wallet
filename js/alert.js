//手机端弹窗样式
function alert_(title) {
	$(".alert").remove();
	var cHtml = "";
	cHtml = "<div class='alert fade'> " + title + "</div>";
	$("body").append(cHtml);
}


function reg_phone(num){
	var reg = /^1[0-9]{10}$/;
	if(!reg.test(num)){
		alert_("手机号码格式有误！");
		return false
	}else return true;
}


function ajax_url(){
	var url = "http://192.168.0.86:8080/adminManage/"
	return url
}

