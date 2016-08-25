$(document).ready(function() {
    // 關於我淡入效果
    $('.about').delay(100).animate({
        opacity: 1
    });
    //手機 menu 下拉
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
    //點擊 menu 滾動至各區域
    $('.scroll-btn').on('click', function(e) {
        e.preventDefault();
        var hookStr = $(this).attr('href');
        var top = $(hookStr).offset().top;
        $('body').animate({
            scrollTop: top
        }, 500);
    });
    // 淡入gotop按鈕 & 回到頂端事件
    $(window).scroll(function() {
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
    //視窗滾動各區內容淡入 
    $(window).scroll(function(){
        var arr = ['.experience', '.skill', '.portfolio', '.contact'];
        for(i=0; i<arr.length; i++){
            var offsetTop = $(arr[i]).offset().top;
            if($('body').scrollTop() > offsetTop-250){
            $(arr[i]).css('opacity', '1');
            }
        }
    });
    // portfolio點擊顯示說明框
    $('figure').click(function(){
        $(this).css('opacity', '1');
    });
});