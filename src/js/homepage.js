/*$(document).ready(function(){
    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").click(function(){
     $('body,html').animate({scrollTop:0},500);
      return false;
    });
});*/

function toTop() {
    scrollTo(0,0);
}

function refresh(){
    alert('图片已刷新');
} 