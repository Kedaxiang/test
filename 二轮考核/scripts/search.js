Mock.mock('http://test.cn/search', {
               // 书的大分类
               'bookclass':[{
                    // 书的详情
                    'bookInfo|20-40':[{
                        "string|1-5": "★",
                         // 书名
                         title:'@title(1,3)',
                         // 作者
                         author:'@cname()',
                         // 出版社
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
                              zhihuUrl:'@url()'
                         }],
                         // 书本购买链接
                         buyUrl:[{
                              jDUrl:'@url()',
                              DangUrl:'@url()',
                              AmazonUrl:'@url()'
                         }],
                         // 作者介绍
                         authorIntro:'@paragraph(2)',
                         // 书本介绍
                         bookIntro:'@paragraph(2)',
                         // 书本封面链接
                         cover: '@image(200x280,@color(),png)',
                         // 评分
                         socre:'@natural(0, 5)'
                    }]
          }]
     });
var book_box = document.getElementById('flex-box');
var oBtn = document.getElementById('btn');
var total = document.getElementById('total');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
    function createbook(number){
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
            picture.innerHTML = '<img ' + 'src=' + cover + '>';
            information = document.createElement('div');
            information.className = 'info';
            information.innerHTML = '<p>'+star+'</p>'+   '<p>'+title+'</p>'+'<p>'+author+'</p>';
            content.appendChild(picture);
            content.appendChild(information);
            book_box.appendChild(content);
        }
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
        var book = book_box.getElementsByClassName('book');
        var ali = oBtn.getElementsByTagName('li');
        //全部隐藏
        for (var j = 0; j < number.length; j++) {    
            book[j].style.display = "none";
        }
        //隐藏完后显示前8张
        for (var j = 0; j < 8 ; j++){          
            book[j].style.display = "block";
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
                //全部隐藏
                 for (var j = 0; j < number.length; j++) {    
                    bookpic[j].style.display = "none";
                }
                for (var j = (b * 8); j < (b + 1) * 8; j++) {
                    bookpic[j].style.display = "block";
                }
            }
        }
    }
var book = document.getElementsByClassName('book');
    function showDetails(info){
        console.log(info.length);
    }
var over,leave;
var btn = document.getElementsByTagName('li')[0];
var menu = btn.getElementsByTagName('ul')[0];
var h = menu.offsetHeight;
    function add() {
        h += 1;
        if (h <= 130) {
            menu.style.height = h + 'px';
            over = setTimeout(add,1);
        }else {
            return;
        }
    }
    function sub() {
        h -= 1;
        if (h > 0) {
            menu.style.height = h + 'px';
            leave = setTimeout(sub,1);
        }else {
            menu.style.height = '0px';
            return;
        }
    }
    function showDetail(number) {
        var close = document.getElementsByClassName('close')[0];
        var wrap = document.getElementsByClassName('wrap')[0];
        close.onclick = function() {
            wrap.classList.remove('wrap-after');
            document.getElementsByClassName('detail-box')[0].classList.remove('detailBox-after');
        }
        var book = document.getElementsByClassName('book');
        var index1 = 0;
        for (var i = 0; i <= number.length - 1; i++) {
            book[i].index1 = i;
            book[i].onclick = function() {
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
                document.getElementsByClassName('time')[0].innerHTML = '出版时间:' + publishDate;
                document.getElementsByClassName('book-number')[0].innerHTML = '图书馆藏书' + total + '本';
                document.getElementsByClassName('book-position')[0].innerHTML = position;
                document.getElementById('author_intro').innerHTML = authorIntro;
                document.getElementById('book_intro').innerHTML = bookIntro;
                document.getElementById('douban').title = douban;
                document.getElementById('zhihu').title = zhihu;
                document.getElementById('jingdong').title = jD;
                document.getElementById('dangdang').title = Dang;
                document.getElementById('amazon').title = amazon;
                wrap.classList.add('wrap-after');
                document.getElementsByClassName('detail-box')[0].classList.add('detailBox-after');
                console.log(i);
            }
        }
    }
window.onload=function(){
    btn.onmouseover = function(){
        clearInterval(leave);
        add();
    }
    btn.onmouseout = function(){
        clearInterval(over);
        sub();
    }
    $.ajax(
        {
             url: 'http://test.cn/search',
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
    var loc = location.href;
    //地址总长度
    var n1 = loc.length; 
    //获取=号位置
    var n2 = loc.indexOf("=");  
    //获取=号后面内容
    var searchCon = decodeURI(loc.substr(n2+1, n1-n2));  
    var search = document.getElementsByClassName('Abox')[0];
    var name = document.getElementsByClassName('info'); 
    var book = document.getElementsByClassName('book');
    if(loc.indexOf('=')<=0){
        return false;
    }else {
        search.innerHTML = searchCon;
    }
    for(var i=0;i<name.length;i++) {
        book[i].style.display="none";
        //判断书本相关信息是否含有输入框里的关键词，有的显示
        if(name[i].innerText.indexOf(searchCon)!=-1 ) {
            book[i].style.display="block";
        }
    }
    var x = 0;
    for(var i=0;i<book.length;i++) {
        if(book[i].style.display == "block"){
            x++;
        }
    }
    var m = x;
    if(m < 8) {
        m = 8 - m;
        for(var j = 1; j <= m; j++) {
            content3 = document.createElement('div');
            content3.className = 'book';
            book_box.appendChild(content3);
        }
    }
    if(x % 8 == 0) {
        x = Math.floor(x / 8);
    } else {
        x = Math.ceil(x / 8);
    }
    total.innerHTML = '共' + x + '页';
    //先清空内部标签，再创建新的页数
    oBtn.innerHTML = '';  
    for(var j = 1; j <= x; j++) {
        cli = document.createElement('li');
        cli.innerHTML = j;
        cli.className = 'number';
        oBtn.appendChild(cli);
    }
    var ali = oBtn.getElementsByTagName('li');
    ali[0].className = 'selected';

    var change_class = document.getElementsByClassName('nav');
    change_class[0].onclick = function() {
        window.location.href = '../classify/分类一/classify.html' + '?class=类一';
    }
    change_class[1].onclick = function() {
        window.location.href = '../classify/分类二/classify.html' + '?class=类二';
    }
    change_class[2].onclick = function() {
        window.location.href = '../classify/分类三/classify.html' + '?class=类三';
    }
    change_class[3].onclick = function() {
        window.location.href = '../classify/分类四/classify.html' + '?class=类四';
    }
}
