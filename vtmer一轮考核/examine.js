window.onload = function(){                     //窗口加载完成后执行function{}这个函数
    var res = document.getElementById('register');
    res.onclick = showagain;
    function showagain(){
       prompt('username');
       prompt('passport');
    }
    var log = document.getElementById('login');
    log.onclick = show;
    function show(){
        alert('请先注册');
    }
    var tab = document.getElementById("tab");
    var lis = tab.getElementsByTagName('li');
    var cha = document.getElementsByClassName('change');
    for(var i=0;i<lis.length;i++){
        lis[i].num = i;     //存储num值
        lis[i].onclick = function(){
            for(var j = 0;j<cha.length;j++){
            cha[j].style.display = "none";      //属性值
            lis[j].classList.remove("activeTab");   //classList用于添加和删除类名
            }
        cha[this.num].style.display = "block";  //this用于指向调用它的对象，调用num
        lis[this.num].classList.add("activeTab");
        }
    }

}
