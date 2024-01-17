$(function () {
    $(window).on('scroll', function (){
        const scrollHeight = $(window).scrollTop();
        if(scrollHeight > 0) {
        $('.header').addClass('on')
        }else {
        $('.header').removeClass('on')
        }
   });

    $('.MainVisual .main_visual_slide').slick({
        arrows: false,
    });

    $('.main_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

    $('.MainContent .left_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.right_slide'
      });
      $('.MainContent .right_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.left_slide',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

    $('.MainInfo .itm').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });



    
})