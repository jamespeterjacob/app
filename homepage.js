var kvSwiper;

$(document).ready(function () {
    initHomepageEvent();
});


function initHomepageEvent() {
    if ($('.kv-swiper-container').length > 0) {
        if ($('.kv-swiper-slide').length > 1) {
            kvSwiper = new Swiper('.kv-swiper-container', {
                initialSlide: 0,
                speed: 1000,
                spaceBetween: 0,
                loop: true,
                slideClass: 'kv-swiper-slide',
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.kv-swiper-container .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                },
                on: {
                    transitionStart: function () {
                    },
                    slideChange: function (swiper) {
                        var isSkinDark = $('.kv-swiper-slide').eq(this.activeIndex).hasClass('skin-dark');
                        if (isSkinDark) {
                            $('.top-nav').addClass('skin-dark');
                        } else {
                            $('.top-nav').removeClass('skin-dark');
                        }
                    },
                    click: function () {
                        this.slideNext();
                    },
                },
            });
        } else {
            $('.kv-swiper-container .swiper-button-prev').hide();
            $('.kv-swiper-container .swiper-button-next').hide();
        }
    }
}

function updateKVSwiper() {
    if ($('.kv-swiper-container').length > 0) {
        kvSwiper.update();
    }
}

