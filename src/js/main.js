//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/swiper/dist/js/swiper.min.js

$(document).ready(function(){
    var slider = new Swiper('.choose-device__slider-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.choose-device__pagination',
            clickable: true
        }
    });
});
