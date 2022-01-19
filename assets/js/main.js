jQuery(document).ready(function() {

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 62) {
            $('header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });


    $('.header__menu-btn-mobile').click(function() {
        $('.header__menu-wrapper').addClass('open');
        $('html').css('overflow', 'hidden');
        $('.overlay').addClass('show');
    });
    $('.header__menu-btn-close').click(function() {
        $('.header__menu-wrapper').removeClass('open');
        $('html').css("overflow", "");
        $('.overlay').removeClass('show');
    })
    $('.overlay').click(function() {
        $('.header__menu-wrapper').removeClass('open');
        $('html').css("overflow", "");
        $('.overlay').removeClass('show');
    })

    $('.home-banner__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true
    })
})

const boxes = document.querySelectorAll('.box-content-left-right .box-left-right__item');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        }
    });  
}