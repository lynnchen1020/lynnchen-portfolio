$(document).ready(function() {
    //手機menu下拉
    $(function() {
        $('.menu-btn').on('click', fadeOpen);

        function fadeOpen(e) {
            e.preventDefault();
            $('.menu-list').stop().fadeToggle().toggleClass('active');
            $(window).on('resize', clearStyle);

            function clearStyle() {
                if ($(window).innerWidth() > 730) {
                    $('.menu-list').attr('style', '');
                };
            };
        };
    });
    //點擊menu滾動至各區域
    $('.scroll-btn').on('click', function(e) {
        e.preventDefault();
        var hookStr = $(this).attr('href');
        var top = $(hookStr).offset().top;
        $('body').animate({
            scrollTop: top
        }, 500);
    });
    //回到頂端按鈕
    $(window).scroll(function() {
        //console.log($('body').scrollTop());
        if ($('body').scrollTop() > 750) {
            $('.gotop-btn').fadeIn(100);
        } else {
            $('.gotop-btn').fadeOut(100);
        }
    });
    $('.gotop-btn').on('click', function(e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: 0
        });
    });
    // portfolio點擊顯示說明框
    $('figure').click(function(){
        $(this).css('opacity', '1');
    });
});