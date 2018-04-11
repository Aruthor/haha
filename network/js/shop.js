//图片放大
var img=document.querySelector('.B_b')
var imgs=document.querySelector('.B_b1')
var timer=null
//鼠标移动 获取可视区的宽高
img.onmouseover=function () {

    // console.log(mouse_left)
    // console.log(mouse_top)

    //鼠标移入事件
    img.onmouseover=function () {
        imgs.style.display='block';
    }
    img.onmouseout=function () {
        timer=setTimeout(function () {
            imgs.style.display='none';
        },1000)
    }
    imgs.onmouseover=function(){
        clearTimeout(timer)
        this.style.display="block"
    }
    imgs.onmouseout=function () {
        this.style.display='none';
    }
}

//框
var borde=document.querySelector('.B_d');
borde.onmouseover=function () {
    this.className='B_d2'
}
borde.onmouseout=function () {
    this.className='B_d'
}


//计算
var slist=document.getElementById('list1')
var alist=slist.getElementsByTagName("li");
var aspan=slist.getElementsByTagName('span')
var aStrong=document.getElementsByTagName('strong')[0]
var ems=slist.getElementsByTagName('em');
var abg=document.getElementsByClassName('B_g');
var abh=document.getElementsByClassName('B_h');
var abi=document.getElementsByClassName('B_i');

for (var i=0;i<alist.length;i++){
    tab(i)
}


//计算总和
function count() {
    var b=0;
    var c=0;
    for(var i=0;i<aspan.length;i++){
        b+=parseFloat(aspan[i].innerHTML)//商品数
        c+=parseFloat(ems[i].innerHTML)//价格

    }

}
function tab(b){
    var abtn=alist[b].getElementsByTagName('button');
    var aspan=alist[b].getElementsByTagName('span')[0];
    var aem=alist[b].getElementsByTagName('em')[0];
    var a=0;

    abtn[0].onclick=function () {
        a--;
        if(a<0){
            a=0
        }
        aspan.innerHTML=a;
        aStrong.innerHTML=a*aem.innerHTML
        count()
    }

    abtn[1].onclick=function () {
        a++;
        aspan.innerHTML=a
        aStrong.innerHTML=a*aem.innerHTML
        count()
    }
}


//all

var aAa=document.getElementsByTagName('input');
var inputs=slist.getElementsByTagName('input');

aAa[1].onclick=function () {
    for (var i=0;i<inputs.length;i++){
        inputs[i].checked = true;
        if(aAa[1].checked==false){
            inputs[i].checked = false;
        }
    }
}






