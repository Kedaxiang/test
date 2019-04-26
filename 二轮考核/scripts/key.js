function key() {
    var name = document.getElementsByClassName('info'); 
    var content = document.getElementById('search');
    var book = document.getElementsByClassName('book');
    var book_box = document.getElementById('flex-box');
    var total = document.getElementById('total');
    var oBtn = document.getElementById('btn');
    var ali = oBtn.getElementsByTagName('li');
    var loc = window.location.href;
    var arr = content.value;
    var n = 0;
    var m = 0;
    history.pushState("","",loc+"?"+"search="+ arr);
    //将全部隐藏
    for(var i = 0; i < book.length; i++) {
        book[i].style.display="none";           
        //显示搜索的内容
        if(name[i].innerText.indexOf(arr)!=-1) {
            book[i].style.display="block";      
        }
    }
    for(var j = 0; j < book.length - 1; j++) {
        if(book[j].style.display == 'block') {
            //计算显示的数量
            n++;                 
        }
    }
    console.log(n);
    m = n;
    console.log(m);
    if(m < 8) {
        m = 8 - m;
        for (var i = 0; i < m; i++) {
            content3 = document.createElement('div');
            content3.className = 'book';
            book_box.appendChild(content3);
        }
        console.log(i);
    }
    if(n % 8 == 0) {
        n = Math.floor(n / 8);
    } else {
        n = Math.ceil(n / 8);
    }
    total.innerHTML = '共' + n + '页';
    //清空内部标签，在创建新的页数
    oBtn.innerHTML = '';  
    for(var j = 1; j <= n; j++) {
        cli = document.createElement('li');
        cli.innerHTML = j;
        cli.className = 'number';
        oBtn.appendChild(cli);
    }
    var ali = oBtn.getElementsByTagName('li');
    ali[0].className = 'selected';

}
function getKey() {
    var content = document.getElementById('search');
    var search = document.getElementsByClassName('Abox')[0];
    if(event.keyCode == 13){
        if(content.value == ''){
            alert('请输入搜素内容');
            search.focus();
        } else {
            search.innerHTML = content.value;
            key();
        }
    }
}
function searchKey() {
    var content = document.getElementById('search');
    var search = document.getElementsByClassName('Abox')[0];
    if(content.value == ''){
        alert('请输入搜素内容');
        search.focus();
    } else {
        search.innerHTML = content.value;
        key();
    }
}