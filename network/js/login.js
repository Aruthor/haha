/**
 * Created by 佘锴哲 on 2018/4/16.
 */
var oInp = document.getElementById('text'),
    oInp2 = document.getElementById('text2'),
    oBtn = document.getElementById('btn'),
    aI = document.querySelectorAll('#logIn-content ul li i');

oInp.onclick = function() {
    aI[0].style.background = '#E8E8E8';
    aI[1].style.background = '#F3F3F3';
}

oInp2.onclick = function() {
    aI[1].style.background = '#E8E8E8';
    aI[0].style.background = '#F3F3F3';
}


//登录按钮
document.onkeyup=function (e) {
//          console.log(e.keyCode)
    if(e.keyCode==13){
        var oInp_val = document.getElementById('text').value;

        var re=/^[\w-]+@[\da-z]{2,5}(\.[a-z]{2,3}){1,3}/gi
        var res=/^[1][3-8][0-9]{9}/g
        if(re.test(oInp_val)==true||res.test(oInp_val)==true){
            window.location.href="index.html"
        }else{
            alert('邮箱格式/手机格式错误');
        }
    }
}

oBtn.onclick = function () {
    var oInp_val = document.getElementById('text').value;
    var re=/^[\w-]+@[\da-z]{2,5}(\.[a-z]{2,3}){1,3}/gi
    var res=/^[1][3-8][0-9]{9}/g
    if(re.test(oInp_val)==true||res.test(oInp_val)==true){
        window.location.href="index.html"
    }else{
        alert('邮箱格式/手机格式错误');
    }

}
