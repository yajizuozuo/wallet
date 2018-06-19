//手机端弹窗样式
function alert_(title,fn) {
	$(".bwui-dialog").remove();
	var cHtml = "";
//	cHtml = "<div class='alert fade'> " + title + "</div>";
	cHtml += '<div class="bwui-dialog" style="">'
		cHtml += 	'<div class="bwui-dialog-mask"></div> '
		cHtml += 	'<div class="bwui-dialog-box">'
		cHtml += 		'<div class="bwui-dialog-box-title"></div>' 
		cHtml += 		'<div class="bwui-dialog-box-content">'
		cHtml += 			'<div> '+ title + '</div>'
		cHtml += 		'</div> '
		cHtml += 		'<div class="bwui-dialog-box-footer">'
		cHtml += 		'<div class="button submit" onclick="closeFix()">知道了</div>'
		cHtml += 		'</div></div></div>'
			
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
//	var url = "http://192.168.0.86:8080/adminManage/"
	var url = "http://hou.ganleyuan.net/"

	return url
}

function closeFix(fn){
	$('.bwui-dialog').hide()

}
