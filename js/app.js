$('.dark_btn').click(function(){
    $('.sitemap').css('display','block');
})
$('.light_btn').click(function(){
    $('.sitemap').css('display','none');
})
let vs01Slide = $('.emblems').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    variableWidth:true,
    arrows:false,
});

// let birth = $('.birth').bxSlider({
//     auto:true,
//     slideMargin:30,
//     slideWidth:370,
//     minSlides:4,
//     maxSlides:4,
//     moveSlides:0,
//     responsive:true,
//     pager:false,
//     controls:false,
// });
var $slider;

function buildSliderConfiguration() {

    var deviceWidth = $(window).width();
    
    /* 반응형으로 설정할 옵션 정의 */
    var slideNum;  
    var slideMargin;

    /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
    if (deviceWidth < 400) {
        slideNum = 1;
        slideMargin = 30;
    } else if (deviceWidth < 730) {
        slideNum = 2;
        slideMargin = 20;
    } else if (deviceWidth < 999) {
        slideNum = 3;
        slideMargin = 15;
    } else {
        slideNum = 4;
        slideMargin = 30;
    }

    return {
        auto:true,
        slideMargin:30,
        slideWidth:370,
        minSlides:4,
        maxSlides:4,
        moveSlides:0,
        responsive:true,
        pager:false,
        controls:false,
        slideMargin: slideMargin, /*반응형 옵션*/
        minSlides: slideNum,  /*반응형 옵션*/
        maxSlides: slideNum   /*반응형 옵션*/
    };
}

function configureSlider() {
    var config = buildSliderConfiguration();

    if ($slider && $slider.reloadSlider) {
        $slider.reloadSlider(config);
    } else {
        $slider = $('#birth_vs3').bxSlider(config);  /* 슬라이더 클래스 또는 아이디 입력 */
    }
}

// $('.slider-prev').click(function () {
//     var current = $slider.getCurrentSlide();
//     $slider.goToPrevSlide(current) - 1;
// });

// $('.slider-next').click(function () {
//     var current = $slider.getCurrentSlide();
//     $slider.goToNextSlide(current) + 1;
// });

$(window).on("orientationchange resize", configureSlider);
configureSlider();

$('.slider-prev').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToPrevSlide(current) - 1;
});

$('.slider-next').click(function () {
    var current = slider.getCurrentSlide();
    $slider.goToNextSlide(current) + 1;
});

$(window).on("orientationchange resize", configureSlider);
configureSlider();


let vs04Bx = $('.vs4_slide').bxSlider({
    auto:true,
    // slideMargin:30,
    // slideWidth:786,
    minSlides:1,
    maxSlides:1,
    // moveSlides:0,
    pager:false,
    controls:false,
});
let vs05lide = $('.container').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth:true,
    arrows:false,
});