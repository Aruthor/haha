/**
 * Created by 佘锴哲 on 2018/4/12.
 */

$(function () {
    var collums=5;//列数
    var rows=5;//行数
    var creatimg=$('#creatimage');
    var h=creatimg.height()/rows
    var w=creatimg.width()/collums;
    for(var i=0;i<rows;i++){//5*5格子
        for(var j=0;j<collums;j++){
//                console.log("i="+i+"j="+j)
            $("<li><div class='box'></div></li>").width(w).height(h).css({
                "left":w*j+'px', //一个li代表5*5的宽高
                "top":h*i+'px',
                "transform":
                "translateX("+(30*j-60)+"px)"//水平方向的间距
                +"tarnslateY("+(30*i-60)+"px)", //垂直方向的间隔
                "background-size":"cover"  //铺满
            }).find('.box').css({
                    "background":"url(images/pass/"+(i*collums+j)+".jpg)",
                    "transform":"scale(0.9)",
                    "background-size":"100% 100%"
                })
                .end()//返回当前元素
                .appendTo(creatimg);
        }
    }
})
//合并
$(function () {
    var collums=5;//列数
    var rows=5;//行数
    var createimg=$("#creatimage");
    var h=createimg.height()/rows;//一个框的宽度
    var w=createimg.width()/collums;
    var chage=true;
    createimg.find('li').click(function () {
//            console.log('clik');
        if(chage===true){
            var bgimg=$(this).find("div").css("background");//获取当前图片的地址
            console.log(bgimg)
            var bgleft=0;
            var bgtop=0;
            $("#creatimage li").each(function (index) {
                var $this = $(this);
                $(this).delay(40 * index).animate({ //延迟特效清空特效
                        "opacity":0},200,function () {  //隐藏
                        $this.css({
                            "transform":"rotate(0deg)"+" translateX(0)"+" translateY(0)"
                        });
                        $this.find("div").css({
                            "background":bgimg,
                            "background-size":"auto",
                            "backgroundPositionX":-bgleft,
                            "backgroundPositionY":-bgtop,
                            "transform":"scale(1)"
                        })
                        bgleft+=196;
                        if(bgleft>=980){
                            bgtop+=100;
                            bgleft=0;
                        }
                        $this.animate({"opacity":1},300);//显示
                    }
                )
            })
        }
    })
})
//拆开
$(function () {
    var collums=5;//列数
    var rows=5;//行数
    var createimg=$("#creatimage");
    var h=createimg.height()/rows;//一个框的宽度
    var w=createimg.width()/collums;
    var chage=true;
    createimg.find('li').click(function () {
        if (chage===true){
            var bgimg=$(this).find("div").css("background");//获取当前图片的地址
            //console.log(bgimg)
            var bgleft=0;
            var bgtop=0;
            $("#creatimage li").each(function (index) {
                var $this = $(this);
                $(this).delay(40 * index).animate({
                    "opacity":0},200,function () {
                })
            });
            chage=false;
        } else  if(chage === false){
            $("#creatimage li").each(function (index) {
                var c=index % collums; //0-4
                var r=parseInt(index /collums);
                var $this=$(this);
                $(this).delay(40*index).animate({
                    "opacity":0},200,function () {
                    $this.css({
                        "transform":
                        "translateX(" +(30*c-60)+"px)"//水平方向的间隔
                        +"translateY("+(30*r-60)+"px)", //垂直方向的间隔
                        "background-size":"cover"
                    });
                    chage=true;
                    $this.find("div").css({
                        "background":"url(images/pass/"+index+".jpg)",
                        "transform":"scale(0.9)",
                        "background-size":"100% 100%" /*图片大小覆盖   引用前提，先有background才能引用background-size*/
                    })
                    $this.animate({
                        "actity":1
                    },200);
                })

            })
        }
    })
})
