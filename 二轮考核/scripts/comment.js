var idNum = 1;
var submit = document.getElementById('sub');
submit.onclick = function(){
    idNum++;
　　//获取input中用户新输入的昵称和评论内容
    var inputValue = document.getElementById("name").value;
    var textValue = document.getElementById("comContent").value;
    //判断是否为空
    if(inputValue==""||textValue==""){
        alert("昵称和评论内容不能为空！！");
        return;
    }
    //获取已有评论的ID
    var comContent1 = document.getElementById("comment1");
　　//克隆已有评论的节点，true为包含子节点
    var newComment = comContent1.cloneNode(true);
　　//给新克隆的评论设置新的ID
    newComment.setAttribute("id","comment"+idNum);
　　//在标签内赋入新的昵称和评论内容
    newComment.getElementsByTagName("span")[0].innerText = inputValue;
    newComment.getElementsByTagName("p")[0].innerText = textValue;
    //创建删除标签
    var delComment = document.createElement('div');
    delComment.className = 'del'; 
    delComment.innerText = '删除';
    newComment.appendChild(delComment);
    //将新克隆并新赋值的评论加到原有评论的后面
    var commentDiv = document.getElementById("comment");
    commentDiv.appendChild(newComment);
    //删除这个 删除标签的父元素节点
    var del = document.getElementsByClassName('del');
    for(var i = 0; i < del.length; i++) {
        del[i].onclick = function() {
           commentDiv.removeChild(this.parentNode); 
        }
    }
            
    document.getElementById("name").value = "";
    document.getElementById("comContent").value = "";
            
}