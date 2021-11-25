var navH = $(".mybottom").offset().top;//获取要定位元素距离浏览器顶部的距离
//滚动条事件
$(window).scroll(function(){
    //获取滚动条的滑动距离
    var scroH = $(this).scrollTop();
    //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
    if(scroH>=navH){
        $(".mybottom").css({"position":"fixed","top":0,"left":0, "z-index":102, "margin":"0 auto", "width":"100%"});
    }else if(scroH<navH){
        $(".mybottom").css({"position":"relative","margin":"0 auto"});
    }
    //console.log(scroH==navH);
});