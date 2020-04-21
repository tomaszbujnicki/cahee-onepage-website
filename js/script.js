$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 200) {
        $('.nav-fixed').addClass('nav-fixed--smaller');
        $('#scroll').hide();
    } else {
        $('.nav-fixed').removeClass('nav-fixed--smaller');
        $('#scroll').show();
    }
});
