let login_form;
let result;
let img;
var username = document.getElementById("usr").value;
var password = document.getElementById("psd").value;
var code     = document.getElementById("ver").value;
window.onload = function(){
	login_form = document.getElementById("login_form");
	img=document.getElementById("img");
	console.log("start");
}

function login(){
	console.log("login");
	
	let ajax = new XMLHttpRequest();
	ajax.open("POST","http://tech.sky31.top/login.php",false);
	ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
	ajax.send("username="+username+"&password="+password+"&code="+code);
	result = JSON.parse(ajax.responseText);
	console.log(result);
	showResponse();
}


function showResponse(){
	document.getElementById("code").innerHTML=result['code'];
	document.getElementById("msg").innerHTML=result['msg'];
	document.getElementById("name").innerHTML=result['data']['name'];
	document.getElementById("sex").innerHTML=result['data']['sex'];
	console.log("end")
}


function refresh(){
	img.src='http://tech.sky31.top/code.php?='+Math.random();
}
