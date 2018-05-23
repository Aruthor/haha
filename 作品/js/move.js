/**Created by fengYu on 2017/11/2*/
/*
*   obj    DOM对象
*   json   需要操作的属性的集合  object类型
*   time   时间间隔     单位ms
*   callback    回调函数（可以不写）  this指向 objDOM对象
*
* */

function move(obj,json,time,callback) {
    window.onresize = arguments.callee;
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {return setTimeout(fn,1000/60)};
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

    var startAttr = {}, S = {};
    for (var key in json){
        startAttr[key] = parseFloat(getStyle(obj)[key]);
        S[key] = json[key] - startAttr[key];
        if(!S[key]){
            delete S[key];
            delete json[key]
        }
    }
    var startTime = new Date();
    fn();
    function fn() {
        var bili = (new Date() - startTime) / time;
        bili>=1?bili = 1:requestAnimationFrame(fn);
        for (var key in S){
            if(key.toLowerCase() === "opacity"){
                var val = S[key]*bili + startAttr[key];
                obj.style[key] = val;
                obj.style.filter = "alpha(opacity="+val*100+")"
            }else{
                obj.style[key] = S[key]*bili + startAttr[key] + "px"
            }
        }
        if(bili===1)callback && callback.call(obj);
    }
};

function getStyle(obj) {return obj.currentStyle||getComputedStyle(obj)}
