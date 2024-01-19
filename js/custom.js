$(function () {
    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.MainVisual .main_visual_slide').slick({
        arrows: true,

        prevArrow: $('.MainVisual .arrows .left'),
        nextArrow: $('.MainVisual .arrows .right'),
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

    $('.MainContent .thumb_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.nav_slide'
    });

    $('.MainContent .nav_slide').on('init afterChange', function () {
        const current = $('.MainContent .nav_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });


    $('.MainContent .nav_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.thumb_slide',
        dots: false,
        centerMode: true,
        focusOnSelect: true,

        prevArrow: $('.bottom_slide .arrows .left'),
        nextArrow: $('.bottom_slide .arrows .right'),

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    $('.MainInfo .itm').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });


    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    });
})