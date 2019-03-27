window.onload = function(){
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
        cha[this.num].style.display = 'block';
        lis[this.num].classList.add("activeTab");
        }
    }
}