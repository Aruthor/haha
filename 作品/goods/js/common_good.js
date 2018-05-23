/**
 * Created by 佘锴哲 on 2018/5/23.
 */

//获取元素
var oleft = document.getElementById('left');
var oright = document.getElementById('right');
var FloatDiv = document.getElementById('floatDiv');
var SmallImg = document.getElementById('smallImg');
var BigImg = document.getElementById('bigImg');
var boxns = document.querySelectorAll('.main_right .box .box_ns');
var len = boxns.length;
var index = 0;

//鼠标的移入移出事件
oleft.onmouseover=function(){
    FloatDiv.style.display="block";
    oright.style.display="block"
};

oleft.onmouseout=function(){
    FloatDiv.style.display="none";
    oright.style.display="none"
}
//鼠标移动事件
oleft.onmousemove=function(ev){
    var e=ev || event;
    var left=e.clientX-FloatDiv.offsetWidth/2-350;
    var top=e.clientY-FloatDiv.offsetHeight/2-150;
    if(left<0){left=0}
    if(top<0){top=0}
    if(left>oleft.offsetWidth-FloatDiv.offsetWidth){left=oleft.offsetWidth-FloatDiv.offsetWidth}
    if(top>oleft.offsetHeight-FloatDiv.offsetHeight){top=oleft.offsetHeight-FloatDiv.offsetHeight}
    FloatDiv.style.left=left+'px';
    FloatDiv.style.top=top+'px';
    //求出的是宽高的比例  公式:小图的宽/悬浮框的宽=大图的宽/right的宽
    var scaleW=SmallImg.offsetWidth/FloatDiv.offsetWidth;
    var scaleH=SmallImg.offsetHeight/FloatDiv.offsetHeight;

    BigImg.style.width=scaleW*oright.offsetWidth+'px';
    BigImg.style.height=scaleH*oright.offsetHeight+'px';



    //求出可以移动的比例    公式:左边悬浮框实际走的距离/最大能够走的距离=右边实际走得距离？/右边最大能够走的距离
    var scaleL=left/(oleft.offsetWidth-FloatDiv.offsetWidth);
    var scaleT=top/(oleft.offsetHeight-FloatDiv.offsetHeight);

    //右边能够走的距离 =  大图的宽高-div的宽高*移动比例
    BigImg.style.left=-scaleL*(BigImg.offsetWidth-oright.offsetWidth)+'px';
    BigImg.style.top=-scaleT*(BigImg.offsetHeight-oright.offsetHeight)+'px'

}

//累加计算
var zengjia=document.getElementById('zengjia');
var jainshao=document.getElementById('zengjia');
var text=document.getElementById('text');

function a() {
    text.value++;
    this.value=text.value+1;
}
function b() {
    text.value--;
    if(text.value<0){
        text.value=0
    }
    this.value=text.value+1;
}
//按钮确定
for (var i = 0; i < len ; i++) {
    boxns[i].index = i;
    boxns[i].onclick = function() {
        boxns[index].style.border="1px solid #ccc";
        index = this.index;
        boxns[index].style.border="1px solid red";
    }
}

