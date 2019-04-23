Mock.mock('http://test.cn/class', {
               // 书的大分类
               'bookclass':[{
                    // 书的详情
                    'bookInfo|20-40':[{
                        "string|1-5": "★",
                         // 书名
                         title:'@title(1,3)',
                         // 作者
                         author:'@cname()'
                        }]
                    }]
               });
                var book = document.getElementById('flex-box');
                var oBtn = document.getElementById('btn');
                var total = document.getElementById('total');
                var prev = document.getElementById('prev');
                var next = document.getElementById('next');
                    function createbook(number){
                        var n = 0;
                        if(number.length % 8 == 0) {                        //动态计算页数
                           n = Math.floor(number.length / 8);
                        } else{
                           n = Math.ceil(number.length / 8);
                        }
                        total.innerHTML = '共' + n + '页';
                        for(var i = 1;i <= n;i++) {                    //创建页数
                            cli = document.createElement('li');
                            cli.innerHTML = i;
                            cli.className = 'number';
                            oBtn.appendChild(cli);
                        }      
                        /*if(number.length <= 24) {
                            for(var i = 1; i <= 24; i++) {
                                content = document.createElement('div');
                                content.className = 'book';
                                picture = document.createElement('div');
                                picture.className = 'bookpic';
                                information = document.createElement('div');
                                information.className = 'info';
                                content.appendChild(picture);
                                content.appendChild(information);
                                book.appendChild(content);
                            }
                            var bookpic = book.getElementsByClassName('book');
                            var ali = oBtn.getElementsByTagName('li');
                            for (var j = 0; j < 24; j++) {    //全部隐藏
                                bookpic[j].style.display = "none";
                            }
                            for (var j = 0; j < 8 ; j++){           //隐藏完后显示前8张
                                bookpic[j].style.display = "block";
                            }
                   
                            for (var i = 0; i <= n - 1; i++) {
                                ali[i].index = i;
                                ali[0].className = 'selected';
                   
                                ali[i].onclick = function() {
                                    b = this.index;
                                    for (var j = 0; j < ali.length; j++) {
                                        ali[j].className = 'number';
                                    }
                                    this.className = 'selected';
                                    for (var j = 0; j < 24; j++) {    //全部隐藏
                                        bookpic[j].style.display = "none";
                                    }
                                    for (var j = (b * 8); j < (b + 1) * 8; j++) {
                                        bookpic[j].style.display = "block";
                                    }
                                }
                            }
                        }     
                        else if(number.length > 24 && number.length <= 32) {
                            for(var i = 0; i <= 31; i++) {
                                content = document.createElement('div');
                                content.className = 'book';
                                picture = document.createElement('div');
                                picture.className = 'bookpic';
                                information = document.createElement('div');
                                information.className = 'info';
                                content.appendChild(picture);
                                content.appendChild(information);
                                book.appendChild(content);
                            }
                            var book_info = getElementsByClassName('info'); 
                            var bookpic = book.getElementsByClassName('book');
                            var ali = oBtn.getElementsByTagName('li');
                            for(var i = 0; i < number.length - 1; i++) {
                                var star = number[i].string;
                                var title = number[i].title;
                                var author = number[i].author;
                                book_info[i].innerHTML = '<p>'+star+'</p>'+'<p>'+title+'</p>'+'<p>'+author+'</p>';
                            }
                            for (var j = 0; j < 32; j++) {    //全部隐藏
                                bookpic[j].style.display = "none";
                            }
                            for (var j = 0; j < 8 ; j++){           //隐藏完后显示前8张
                                bookpic[j].style.display = "block";
                            }
                   
                            for (var i = 0; i <= n - 1; i++) {
                                ali[i].index = i;
                                ali[0].className = 'selected';
                   
                                ali[i].onclick = function() {
                                    b = this.index;
                                    for (var j = 0; j < ali.length; j++) {
                                        ali[j].className = 'number';
                                    }
                                    this.className = 'selected';
                                    for (var j = 0; j < 32; j++) {    //全部隐藏
                                        bookpic[j].style.display = "none";
                                    }
                                    for (var j = (b * 8); j < (b + 1) * 8; j++) {
                                        bookpic[j].style.display = "block";
                                    }
                                }
                            }
                        }
                        else if(number.length > 32 && number.length <= 40) {
                            for(var i = 1; i <= 40; i++) {
                                content = document.createElement('div');
                                content.className = 'book';
                                picture = document.createElement('div');
                                picture.className = 'bookpic';
                                information = document.createElement('div');
                                information.className = 'info';
                                content.appendChild(picture);
                                content.appendChild(information);
                                book.appendChild(content);
                            }
                            var bookpic = book.getElementsByClassName('book');
                            var ali = oBtn.getElementsByTagName('li');
                            for (var j = 0; j < 40; j++) {    //全部隐藏
                                bookpic[j].style.display = "none";
                            }
                            for (var j = 0; j < 8 ; j++){           //隐藏完后显示前8张
                                bookpic[j].style.display = "block";
                            }
                   
                            for (var i = 0; i <= n - 1; i++) {
                                ali[i].index = i;
                                ali[0].className = 'selected';
                   
                                ali[i].onclick = function() {
                                    b = this.index;
                                    for (var j = 0; j < ali.length; j++) {
                                        ali[j].className = 'number';
                                    }
                                    this.className = 'selected';
                                    for (var j = 0; j < 40; j++) {    //全部隐藏
                                        bookpic[j].style.display = "none";
                                    }
                                    for (var j = (b * 8); j < (b + 1) * 8; j++) {
                                        bookpic[j].style.display = "block";
                                    }
                                }
                            }
                        }*/
                        for(var i = 0; i <= number.length - 1; i++) {              //创建书本div
                            var star = number[i].string;
                            var title = number[i].title;
                            var author = number[i].author;
                            content = document.createElement('div');
                            content.className = 'book';
                            picture = document.createElement('div');
                            picture.className = 'bookpic';
                            information = document.createElement('div');
                            information.className = 'info';
                            information.innerHTML = '<p>'+star+'</p>'+   '<p>'+title+'</p>'+'<p>'+author+'</p>';
                            content.appendChild(picture);
                            content.appendChild(information);
                            book.appendChild(content);
                        }
                        var bookpic = book.getElementsByClassName('book');
                        var ali = oBtn.getElementsByTagName('li');
                        for (var j = 0; j < number.length; j++) {    //全部隐藏
                            bookpic[j].style.display = "none";
                        }
                        for (var j = 0; j < 8 ; j++){           //隐藏完后显示前8张
                            bookpic[j].style.display = "block";
                        }
                        for (var i = 0; i <= n - 1; i++) {
                            ali[i].index = i;
                            ali[0].className = 'selected';
               
                            ali[i].onclick = function() {
                                b = this.index;
                                if(number.length - b * 8 < 8) {
                                    var n = 8 - (number.length - b * 8);
                                    console.log(n);
                                    for(var i = 1;i <= n; i++) {
                                        content2 = document.createElement('div');
                                        content2.className = 'book';
                                        book.appendChild(content2);
                                    }
                                }
                                for (var j = 0; j < ali.length; j++) {
                                    ali[j].className = 'number';
                                }
                                this.className = 'selected';
                                for (var j = 0; j < number.length; j++) {    //全部隐藏
                                    bookpic[j].style.display = "none";
                                }
                                for (var j = (b * 8); j < (b + 1) * 8; j++) {
                                    bookpic[j].style.display = "block";
                                }
                                window.scrollTo(0,0);
                            }
                        }
                    }
window.onload =function(){
    var oBox = document.getElementById('container');
    var pic = document.getElementById('list');
    var cur = 0; //定义变量用于设置left值
    var target = 0;
    var timer;
    var timer1;
    function autoPlay() {
        if (target <= -300) {
            cur = 0;
            target = -100;
        } else {
            target -= 100;
        }
        sport(target);
        btnBottom();
    }
    function sport(tar) {
        clearInterval(timer1);
        timer1 = setInterval(Play, 30);
        function Play() {
            if (cur == tar) {
                clearInterval(timer1);
            } else {
                speed = (tar - cur) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //为防止在最后的部分运动距离过小, 因此在这里向上向下取整
                cur = cur + speed;
                pic.style.left = cur + '%';
            }
        }
    }
    function btnBottom() {
        i = -(target/100);
        i == 3 ? i = 0 : i;
        var btn = document.getElementById('buttons');
        var dot = btn.getElementsByTagName('span');
        for( j = 0; j < dot.length; j++) {
            if(dot[j].className == 'on') {
                dot[j].classList.remove('on');
            }
        }
        dot[i].classList.add('on');
    }
    timer = setInterval(autoPlay, 2500);
    var btn = document.getElementById('buttons');
    var dot = btn.getElementsByTagName('span');
    for( j = 0; j < dot.length; j++) {
        dot[j].index = j;
        dot[j].onclick = function() {
            target = -(this.index * 100);
            sport(target);
            btnBottom();
        }
    }
    oBox.onmouseover = function() { //移出时清除计时器
        clearInterval(timer);
    }
    oBox.onmouseout = function() { //移入时开始计时器
        timer = setInterval(autoPlay, 2500);
    }
    $.ajax(
        {
             url: 'http://test.cn/class',
             type: 'get',
             dataType: 'json',
             success: function(data)
             {
                  console.log(data);
                  var info = data.bookclass[0].bookInfo;
                  console.log(info);    
                  var number = data.bookclass[0].bookInfo.length;
                  console.log(number);
                  createbook(info);
                  showDetails(info);
            }
        }
    ) 
}