$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('#gotop').fadeIn(500);
        } else {
            $("#gotop").fadeOut(500);
        }
    });

    $("#gotop").click(function () {
        $('body,html').animate({
            scrollTop: '0'
        }, 300);
        return false; //防止默认事件行为
    })

})