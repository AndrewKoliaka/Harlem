//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/swiper/dist/js/swiper.min.js

$(document).ready(function(){
    var sliders = new Swiper('.choose-device__slider-container', {
        slidesPerView: 1,
        spaceBetween: 60,
        draggable: true,
        allowTouchMove: true,
        pagination: {
            el: '.choose-device__pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                spaceBetween: 0
            },
            480: {
                spaceBetween: 0
            }
        }
    });

    var popupSlider = null;

    $('.order-form__form').submit(function(event){
        event.preventDefault();
        event.target.reset();
        $('.popup1').addClass('popup1--visible');
    });

    $('.popup1__close-btn').click(function(event) {
        event.preventDefault();
        $('.popup1').removeClass('popup1--visible');
    });

    $('.choose-device__slide').click(function(event) {

        var slideIndex = $(event.target).parent().index()
        var popupImages = $('.popup2__slide-img');
        var sliderIndex = $(event.target).parent().parent().parent().parent().index();

        $(event.target).parent().parent().children().find('img').each(function(index, el){
            popupImages[index].src = el.src;
        })

        $('.popup2').addClass('popup2--visible');
        popupSlider = new Swiper('.popup2__container', {
            spaceBetween: 0,
            slidesPerView: 1,
            initialSlide: slideIndex,
            navigation: {
                nextEl: '.popup2__next',
                prevEl: '.popup2__prev'
            },
            on: {
                slideChange: function() {
                    sliders[sliderIndex].slideTo(this.activeIndex)
                }
            }
        });
    });

    $('.popup').click(function () {
        if($('.popup1').is(':visible')){
            $('.popup1').removeClass('popup1--visible');
        }

        if($('.popup2').is(':visible')){
            $('.popup2').removeClass('popup2--visible');
            popupSlider.destroy();
        }
    });

    $('.popup2__slide').click(function (event) {
        event.stopPropagation()
    });

    $('.popup2__next').click(function (event) {
        event.stopPropagation()
    });

    $('.popup2__prev').click(function (event) {
        event.stopPropagation()
    });

    $('.popup1__window').click(function (event) {
        event.stopPropagation()
    });

    $('.popup2__close-btn').click(function(event) {
        event.preventDefault();
        $('.popup2').removeClass('popup2--visible');

        popupSlider.destroy();
    });

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});
