window.onload = function(){                     //窗口加载完成后执行function{}这个函数
    var res = document.getElementById('register');
    res.onclick = showagain;
    function showagain(){
       prompt('username');
       prompt('passport');
    }
    var oBtn = document.getElementById('login');
    oBtn.onclick = show;
    function show(){
        alert('请先注册');
    }
    var tab = document.getElementById("tab");
    var lis = tab.getElementsByTagName('li');
    var cha = document.getElementsByClassName('change');
    for(var i=0;i<lis.length;i++){
        lis[i].num = i;
        lis[i].onclick = function(){
            for(var j = 0;j<cha.length;j++){
            cha[j].style.display = "none";
            lis[j].classList.remove("activeTab");
            }
        cha[this.num].style.display = 'block';  //this用于指定对象，调用num
        lis[this.num].classList.add("activeTab");
        }
    }

}
