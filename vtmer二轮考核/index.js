window.onload=function(){
    var oBtn=document.getElementById("btnLogin");
    oBtn.onclick=function(){
        document.getElementById("login").style.display = "block";
    }
    var oclose=document.getElementById("close");
        oclose.onclick=function(){
            document.getElementById("login").style.display = "none";    
        }
    var user = document.getElementById("username");
    var key = document.getElementById("password");
    var btn = document.getElementById("btn");
    var request;
    btn.onclick = function(){
        if (user.value==""){
            alert("用户名不能为空！");
        }
        if (key.value==""){
            alert("密码不能为空！");
        }
        document.getElementById("login").style.display = "none";
        if (window.XMLHttpRequest){
            request=new XMLHttpRequest();
        }
        else{
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.onreadystatechange=function(){
            if (request.readyState==4 && request.status==200){
                document.getElementById("user").innerHTML="<style>{position: absolute;top: 44px;right: 56px;}</style>" + request.responseText;
            }
        var add = document.getElementById("user") ;
        add.style.cssText = "position: absolute;top: 44px;right: 56px;color: #727479;font-size:18px;text-decoration:underline;";
    }
    request.open("GET","username.txt",true);
    request.send();
    }
    var load = document.getElementById("container");
        load.addEventListener("animationend", function() { 
        load.style.display = "none";
    });
}