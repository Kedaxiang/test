Mock.mock('http://vtmer.cn/login', {
    'user|9':[{
             name:'@first()',
             password:'@string(lower+number,6,10)'
         }]         
    });
    var change_class = document.getElementsByClassName('change');
    change_class[0].onclick = function() {
        window.location.href = 'classify/分类一/classify.html' + '?class=类一';
    }
    change_class[1].onclick = function() {
        window.location.href = 'classify/分类二/classify.html' + '?class=类二';
    }
    change_class[2].onclick = function() {
        window.location.href = 'classify/分类三/classify.html' + '?class=类三';
    }
    change_class[3].onclick = function() {
        window.location.href = 'classify/分类四/classify.html' + '?class=类四';
    }
window.onload=function(){
    var oBtn=document.getElementById("btnLogin");
    oBtn.onclick=function(){
        document.getElementById("login").style.display = "block";
    }
    var oclose=document.getElementById("close");
        oclose.onclick=function(){
            document.getElementById("login").style.display = "none";    
        }
    var load = document.getElementById("container");
        load.addEventListener("animationend", function() { 
        load.style.display = "none";
    });
    var search = document.getElementsByClassName('icon')[0];
    var key = document.getElementsByClassName('search_input')[0];
    //改变路由
    search.onclick=function(){
        location.href="search/search.html?"+"search="+encodeURI(key.value);           
    }
    key.onkeypress=function() {
        if(event.keyCode == 13){
            search.click();
        }
    }
    var user = document.getElementById("user");
    var user_name = document.getElementById('username');
    var key_word = document.getElementById("password");
    var btn = document.getElementById("btn");
    user_name.onkeypress=function() {
        if(event.keyCode == 13) {
            if ( user_name.value.length == 0) {
                alert('用户名不能为空');
                user_name.focus();
            } else {
                key_word.focus();
            }
        } 
    }
    key_word.onkeypress=function() {
        if(event.keyCode == 13) {
            var word = key_word.value;
            if ( word.length < 6 || word.length > 10 ) {
                alert('密码6~8位，请重试');
                key_word.focus();
            } else {
                btn.click();
            }

        }
    }
    btn.onclick = function() {
        if ( word.length < 6 || word.length > 10) {
            alert('密码6~8位，请重试');
            key_word.focus();
        }
    }
    $.ajax(
        {
            url: 'http://vtmer.cn/login',
            type: 'get',
            async:true,
            dataType: 'json',
            success: function(data)
            {
                btn.onclick = function() {
                    user.innerHTML = '<div class=login_name>' + data.user[0].name + '</div>';
                    oclose.click();
                }
            }
        }   
    ) 
}