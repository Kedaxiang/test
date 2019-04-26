Mock.mock('http://test.cn/class', {
               // 书的大分类
               'bookclass':[{
                    // 书的详情
                    'bookInfo|20-40':[{
                        "string|1-5": "★",
                         // 书名
                         title:'@title(1,3)',
                         // 作者
                         author:'@cname()',
                         publish:'@region()出版社',
                         // 出版时间
                         publishDate:'@date(yyyy-MM-dd)',
                         // 图书馆详情
                         library:[{
                             // 数目
                             total:'@natural(0, 100)',
                             // 位置
                             position:'@natural(2, 7)楼@natural(1,100)架@natural(0, 100)'
                         }],
                         // 书本链接
                         bookUrl:[{
                             doubanUrl:'@url()',
                             //zhihuUrl:'@url()'
                         }],
                         // 书本购买链接
                         buyUrl:[{
                             jDUrl:'@url()',
                             DangUrl:'@url()',
                             AmazonUrl:'@url()'
                         }],
                         // 作者介绍
                         //authorIntro:'@paragraph(2)',
                         // 书本介绍
                         bookIntro:'@paragraph(2)',
                         // 书本封面链接
                         cover: '@image(200x280,@color(),png)',
                         // 评分
                         socre:'@natural(0, 5)'
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
        //动态计算页数
        if(number.length % 8 == 0) {                        
            n = Math.floor(number.length / 8);
        } else{
            n = Math.ceil(number.length / 8);
        }
        total.innerHTML = '共' + n + '页';
        //创建页数
        for(var i = 1;i <= n;i++) {                    
            cli = document.createElement('li');
            cli.innerHTML = i;
            cli.className = 'number';
            oBtn.appendChild(cli);
        }      
        //创建书本div
        for(var i = 0; i <= number.length - 1; i++) {              
            var star = number[i].string;
            var title = number[i].title;
            var author = number[i].author;
            var cover = number[i].cover;
            content = document.createElement('div');
            content.className = 'book';
            picture = document.createElement('div');
            picture.className = 'bookpic';
            picture.innerHTML = '<img ' + 'src=' +cover + '>';
            information = document.createElement('div');
            information.className = 'info';
            information.innerHTML = '<p>'+star+'</p>'+   '<p>'+title+'</p>'+'<p>'+author+'</p>';
            content.appendChild(picture);
            content.appendChild(information);
            book.appendChild(content);          
        }
        var bookpic = book.getElementsByClassName('book');
        var ali = oBtn.getElementsByTagName('li');
        //全部隐藏
        for (var j = 0; j < number.length; j++) {    
            bookpic[j].style.display = "none";
        }
        //隐藏完后显示前8张
        for (var j = 0; j < 8 ; j++){           
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
                 //全部隐藏
                for (var j = 0; j < number.length; j++) {   
                    bookpic[j].style.display = "none";
                }
                for (var j = (b * 8); j < (b + 1) * 8; j++) {
                    bookpic[j].style.display = "block";
                }
            }
        }
        for(var m = 0; m < ali.length; m++) {
            ali[m].base = m;
        }
        prev.onclick = function() {
            base = document.getElementsByClassName('selected')[0].base;
            base--;
            console.log(ali[2].base);
            if (base < 0){
                base = 0;
            }
            if(number.length - base * 8 < 8) {
                var n = 8 - (number.length - base * 8);
                console.log(n);
                for(var i = 1;i <= n; i++) {
                    content2 = document.createElement('div');
                    content2.className = 'book';
                    book.appendChild(content2);
                }
            }
            for(var i = 0; i < ali.length; i++) {
                if(ali[i].className == 'selected') {
                    ali[i].className = 'number';
                }
            }
            ali[base].className = 'selected';
            for(var j = 0; j < bookpic.length; j++) {
                bookpic[j].style.display = 'none';
            }
            for(var j = base * 8; j < (base + 1)  * 8; j++) {
                bookpic[j].style.display = 'block';
            }
        }
        next.onclick = function() {
            base = document.getElementsByClassName('selected')[0].base;
            base++;
            if (base > ali.length - 1){
                base = ali.length - 1;
            }
            if(number.length - base * 8 < 8) {
                var n = 8 - (number.length - base * 8);
                console.log(n);
                for(var i = 1;i <= n; i++) {
                    content2 = document.createElement('div');
                    content2.className = 'book';
                    book.appendChild(content2);
                }
            }
            for(var i = 0; i < ali.length; i++) {
                if(ali[i].className == 'selected') {
                    ali[i].className = 'number';
                }
            }
            ali[base].className = 'selected';
            for(var j = 0; j < bookpic.length; j++) {
                bookpic[j].style.display = 'none';
            }
            for(var j = base * 8; j < (base + 1) * 8; j++) {
                bookpic[j].style.display = 'block';
            }
        }
    }
    function showDetail(number) {
        var close = document.getElementsByClassName('close')[0];
        var wrap = document.getElementsByClassName('wrap')[0];
        close.onclick = function() {
            wrap.classList.remove('wrap-before');
            document.getElementsByClassName('detail-box')[0].classList.remove('detailBox-after');
        }
        var bookpic = document.getElementsByClassName('book');
        for (var i = 0; i <= number.length - 1; i++) {
            bookpic[i].index1 = i;
            bookpic[i].onclick = function() {
                a = this.index1;
                var title = number[a].title;
                var author = number[a].author;
                var publish = number[a].publish;
                var publishDate = number[a].publishDate;
                var total = number[a].library[0].total;
                var position = number[a].library[0].position;
                var douban = number[a].bookUrl[0].doubanUrl;
                var zhihu = number[a].bookUrl[0].zhihuUrl;
                var jD = number[a].buyUrl[0].jDUrl;
                var Dang = number[a].buyUrl[0].DangUrl;
                var amazon = number[a].buyUrl[0].AmazonUrl;
                var authorIntro = number[a].authorIntro;
                var bookIntro = number[a].bookIntro;
                document.getElementsByClassName('book-name')[0].innerHTML = title;
                document.getElementsByClassName('author-name')[0].innerHTML = author;
                document.getElementsByClassName('pub-name')[0].innerHTML = publish;
                document.getElementsByClassName('time')[0].innerHTML = '出版时间:' + ' ' + publishDate;
                document.getElementsByClassName('book-number')[0].innerHTML = '图书馆藏书:' + ' ' + total + '本';
                document.getElementsByClassName('book-position')[0].innerHTML = position;
                if(authorIntro == undefined) {
                    document.getElementById('author_intro').innerHTML = '待更新';
                } else {
                    document.getElementById('author_intro').innerHTML = authorIntro;
                }
                document.getElementById('book_intro').innerHTML = bookIntro;
                document.getElementById('douban').title = douban;
                if (zhihu == undefined) {
                    document.getElementById('zhihu').style.display = 'none';
                } else {
                    document.getElementById('zhihu').title = zhihu;
                }
                document.getElementById('jingdong').title = jD;
                document.getElementById('dangdang').title = Dang;
                document.getElementById('amazon').title = amazon;
                wrap.classList.add('wrap-before');   
                document.getElementsByClassName('detail-box')[0].classList.add('detailBox-after');
                console.log(i);
            }
        }
    }
window.onload =function(){
    var oBox = document.getElementById('container');
    var pic = document.getElementById('list');
    //定义变量用于设置left值
    var cur = 0; 
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
                //为防止在最后的部分运动距离过小, 因此在这里向上向下取整
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); 
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
    //移出时清除计时器
    oBox.onmouseover = function() { 
        clearInterval(timer);
    }
    //移入时开始计时器
    oBox.onmouseout = function() { 
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
                  showDetail(info);
            }
        }
    ) 
    var change_class = document.getElementsByClassName('classify');
    change_class[1].onclick = function() {
        window.location.href = '../分类一/classify.html' + '?class=类一';
    }
    change_class[2].onclick = function() {
        window.location.href = '../分类二/classify.html' + '?class=类二';
    }
    change_class[3].onclick = function() {
        window.location.href = '../分类三/classify.html' + '?class=类三';
    }
    change_class[4].onclick = function() {
        window.location.href = '../分类四/classify.html' + '?class=类四';
    }
    var search = document.getElementById('icon');
    var key = document.getElementById('search');
    //改变路由
    search.onclick=function(){
        location.href="../../search/search.html?"+"search="+encodeURI(key.value);           
    }
    key.onkeypress=function() {
        if(event.keyCode == 13){
            search.click();
        }
    }
}