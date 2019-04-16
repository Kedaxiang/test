window.onload =function(){
    var list = document.getElementById('list');
    function animate(set) {                      //实现点击箭头切换图片
        var newleft = parseInt(list.style.left) + set;       //list.style.left获取的为字符串，需要parseInt取整数
        if(newleft < -2560) {
            list.style.left = 0 + 'px';
        } else if(newleft > 0) {
            list.style.left = -2560 + 'px';
        } else {
            list.style.left = newleft + 'px';
        }
    }
    //圆点变化
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    function buttonshow() {
        for (var i = 0; i < buttons.length;i++) {
            if (buttons[i].className == 'on') {
                buttons[i].classList.remove("on");
            }
        }
        buttons[index - 1].classList.add('on');  //数组从零开始，index-1
    }
    //图片自动轮播
    var timer;      
    function play() {
        timer = setInterval(function() {
                animate(-1280)
                index++;
                if (index > 3) {
                   index = 1;
                }
            buttonshow();
            }, 2500)
       }
       play();
    //实现鼠标移动到图片上时停止轮播，移走开始轮播
    function stop(){        
       clearInterval(timer);
    }
    var container = document.getElementById('container');
    container.onmouseover = stop;
    container.onmouseout = play;
    //点击小圆点切换到相应图片
    for (var i = 0;i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var clickIndex = this.getAttribute('index'); //this绑定到buttons[i]上，index为自定义属性，要被getAttribute获取
            set = 1280 * (index - clickIndex);    //获得鼠标所指小圆点的位置，此处index=1
            animate(set);
            index = clickIndex;     //此处为了要圆点的样式发生变化
            buttonshow();
        }
    }   
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var tab = document.getElementById("post").getElementsByTagName("li") 
    var base = 1;
    function change(){
        for(var m = 0;m < tab.length;m++) {
            if (tab[m].className == 'page') {
                tab[m].classList.remove('page');
            }
        }
        tab[base - 1].classList.add('page');
    }
    prev.onclick = function() {
        base--;
        if (base < 1) {
            base = 6;
        }
        change();
    }
    next.onclick = function() {
        base++;
        if (base > 6) {
            base = 1;
        }
        change();
    }
}