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
        if(name[i].innerHTML.indexOf(arr)!=-1) {
            book[i].style.display="block";      
        } 
    }
    for(var j = 0; j <= book.length - 1; j++) {
        if(book[j].style.display == 'block') {
            //计算显示的数量
            n++;                 
            book[j].classList.add('show')
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
    ali[0].className = 'selected';

    var showResult = document.getElementsByClassName('show');
    console.log(showResult.length);
    if(showResult.length > 8) {
        for (var i = 0; i < showResult.length; i++) {
            showResult[i].style.display = 'none';
        }
        for (var j = 0; j < 8; j++) {
            showResult[j].style.display = 'block';
        }
    }
    console.log(n);
    for(var j = 0; j < n; j++) {
        ali[j].index = j;
        ali[j].onclick = function() {
            b = this.index;
            if (showResult.length - b * 8 < 8) {
                var q = 8 - (showResult.length - b * 8);
                console.log(q);
                for(var i = 1; i <= q; i++) {
                    content4 = document.createElement('div');
                    content4.className = 'book';
                    book_box.appendChild(content4);
                }
            }
            for (var i = 0; i < ali.length; i++) {
                ali[i].className = 'number';
            }
            this.className = 'selected';
            for (var i = 0; i < showResult.length; i++) {
                showResult[i].style.display = 'none';
            }
            for (var i = (b * 8); i < (b + 1) * 8; i++) {
                showResult[i].style.display = 'block';
            }
        }
    }
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    for(var m = 0; m < ali.length; m++) {
        ali[m].base = m;
    }
    prev.onclick = function() {
        base = document.getElementsByClassName('selected')[0].base;
        base--;
        if (base < 0){
            base = 0;
        }
        if(showResult.length - base * 8 < 8) {
            var n = 8 - (showResult.length - base * 8);
            console.log(n);
            for(var i = 1;i <= n; i++) {
                content2 = document.createElement('div');
                content2.className = 'book';
                book_box.appendChild(content2);
            }
        }
        for(var i = 0; i < ali.length; i++) {
            if(ali[i].className == 'selected') {
                ali[i].className = 'number';
            }
        }
        ali[base].className = 'selected';
        for(var j = 0; j < showResult.length; j++) {
            showResult[j].style.display = 'none';
        }
        for(var j = base * 8; j < (base + 1)  * 8; j++) {
            showResult[j].style.display = 'block';
        }
    }
    next.onclick = function() {
        base = document.getElementsByClassName('selected')[0].base;
        base++;
        if (base > ali.length - 1){
            base = ali.length - 1;
        }
        if(showResult.length - base * 8 < 8) {
            var n = 8 - (showResult.length - base * 8);
            console.log(n);
            for(var i = 1;i <= n; i++) {
                content2 = document.createElement('div');
                content2.className = 'book';
                book_box.appendChild(content2);
            }
        }
        for(var i = 0; i < ali.length; i++) {
            if(ali[i].className == 'selected') {
                ali[i].className = 'number';
            }
        }
        ali[base].className = 'selected';
        for(var j = 0; j < showResult.length; j++) {
            showResult[j].style.display = 'none';
        }
        for(var j = base * 8; j < (base + 1) * 8; j++) {
            showResult[j].style.display = 'block';
        }
    }
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