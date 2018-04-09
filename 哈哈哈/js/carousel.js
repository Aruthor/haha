
/* 轮播 */
(function(){
    var box = document.getElementById("Carousel_Wrap"),
        picUl = document.querySelectorAll(".pic ul")[0],
        picLi = picUl.getElementsByTagName("li"),
        tabLi = document.querySelectorAll(".tab li"),
        prev = document.getElementsByClassName("left")[0],
        next = document.getElementsByClassName("right")[0],
        timer,index=0,length = tabLi.length,startTime = 0;
    Liwidth = parseFloat(getStyle(picLi[0]).width);

    for(var i=0;i<length;i++){
        tabLi[i].i = i;
        tabLi[i].onclick=function () {
            if(new Date()-startTime > 200){
                startTime = new Date();//限制两次点击的间隔
                tabLi[index].className = "";
                this.className = "on";
                index = this.i;
                move(picUl,{left:-Liwidth*index},1000)
            }
        }
    }

    box.onmouseenter=function () {
        clearInterval(timer)
    }
    box.onmouseleave=function () {
        timer = setInterval(auto,1000);
    }
    next.onclick=function () {
        auto();
    }
    prev.onclick=function () {
        tabLi[index%length].className = "";
        index--;//0
        tabLi[index].className = "on";
        move(picUl,{left:-Liwidth*index},200,function () {
            if(index===0){
                this.style.left = -(picLi.length-1)*Liwidth + "px";
                index = tabLi.length;
            }
        })
    }
    function auto() {
        tabLi[index].className = "";
        index++;//6
        tabLi[index%length].className = "on";
        move(picUl,{left:-Liwidth*index},200,function () {
            if(index===6){
                this.style.left = 0;
                index = 0;
            }
        })
    }
    timer = setInterval(auto,1000);
})();
function getStyle(obj) {return obj.currentStyle||getComputedStyle(obj)}

