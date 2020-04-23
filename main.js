var debug = false;
var topCategorySwiper;

$(document).ready(function () {

    if (detectIE() === false) {
    } else {
        $('html').addClass('ie');
    }
    // log("Modernizr.flexbox : ", Modernizr.flexbox);
    initEvent();
});



function initEvent() {
    // testing
    $('.btn-testing').click(function (evt) {
        evt.preventDefault();
    });
    $('.btn-destroy').click(function (evt) {
        evt.preventDefault();
        $('.top-category-swiper-container').addClass('no-swipe');
        topCategorySwiper.destroy(true, true);
    });
    $('.btn-reinit').click(function (evt) {
        evt.preventDefault();
        $('.top-category-swiper-container').removeClass('no-swipe');
        initTopCategoryFilterEvent();
    });


    $('#top-nav-cart .cart-item').click(function (evt) {
        evt.preventDefault();
        var orderId = $(this).data('orderdetailid');
        var categoryId = $(this).data('categoryid');

        if (checkEditDetail2(orderId, $(this))) {
            var editUrl = "/Client/Item/EdteDetail?orderDetailID=" + orderId + "&categoryID=" + categoryId;
            window.location.href = editUrl;
        }

    });

    // Hover dropdown
    // IT WORKS
    // DISABLE temporarily
    /*
	if ( !Modernizr.touch ) {
		$('.btn-dropdown-group').hover(
	        function() {
	        	if ( $(this).find('.totalitems').text() > 0 ) {
	            	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
	            }
	        },
	        function() {
	        	if ( $(this).find('.totalitems').text() > 0 ) {
	            	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	            }
	        }
	    );
	    $('.dropdown-menu').hover(
	        function() {
	            $(this).stop(true, true);
	        },
	        function() {
	            $(this).stop(true, true).delay(200).fadeOut();
	        }
	    );
	}
	*/



    if ($('.top-category-swiper-container').length > 0) {
        // LAZY LOAD
        var tcll = new LazyLoad({
            threshold: 0,
            container: $('.top-category-swiper-container')[0],
            elements_selector: ".bg-image",
            class_loading: "loading",
            class_loaded: "imageloaded",
            callback_set: function (element) {
                setTimeout(function () {
                    $(element).closest(".top-category-slide-image-holder").addClass("loaded");
                }, 20);
            }
        });
    }

    // 
    $('#top-category-nav-container .btn-collapse').click(function (evt) {
        evt.preventDefault();
        var target = $(this).data('target');

        if (!$('#top-category-nav-container').hasClass('active')) {
            $(target).collapse('show');


            // log('topCategorySwiper.initialized:', topCategorySwiper.initialized);
            $('.top-category-swiper-container').addClass('no-swipe');
            if (topCategorySwiper.initialized) {
                topCategorySwiper.destroy(true, true);
            }

            $('#top-category-nav-container').addClass('active');

            $('html, body').addClass('opened-top-category');

            var totalHeight = $('.top-category-nav-container').outerHeight(true);
            $('.top-category-nav').css({ 'height': totalHeight });

        } else {
            $(target).collapse('hide');
            $(target).on('hidden.bs.collapse', function () {
                var totalHeight = $('.top-category-nav-container').outerHeight(true);
            });

            $('.top-category-swiper-container').removeClass('no-swipe');
            initTopCategoryFilterEvent();

            $('#top-category-nav-container').removeClass('active');

            $('html, body').removeClass('opened-top-category');

            $('.top-category-nav').css({ 'height': '' });
        }
    });

    $('#top-category-nav-container .btn-close').click(function (evt) {
        evt.preventDefault();
        var target = $(this).data('target');

        $(target).collapse('hide');
        $(target).on('hidden.bs.collapse', function () {
            var totalHeight = $('.top-category-nav-container').outerHeight(true);
        });

        $('.top-category-swiper-container').removeClass('no-swipe');
        initTopCategoryFilterEvent();

        $('#top-category-nav-container').removeClass('active');

        $('html, body').removeClass('opened-top-category');

        $('.top-category-nav').css({ 'height': '' });
    });





    // Switch Language
    $('.btn-lang').click(function (evt) {
        evt.preventDefault();
        var language = $(this).text();
        var changeLanguage = "zh-hant";
        if (language == "ENG") {
            changeLanguage = "en-us";
        }
        $.ajax({
            url: '/Client/HelperResource/ChangeLanguage',
            data: { "language": changeLanguage },
            async: false,
            type: 'post',
            success: function (data) {
            }
        });
        document.location.reload();
    });


    // log($('#top-category-nav-container').hasClass('active'));
    if (!$('#top-category-nav-container').hasClass('active')) {
        initTopCategoryFilterEvent(true);
    }


    $(window).on("throttledresize", function (event) {
        debouncedresize();
    });
    debouncedresize();
}

function initTopNavCart() {

}
function getGoodsCount2() {
    var count = 0;
    var cartID = $.cookies.get('shoppingCartID');
    var objArray = new Array();
    if (cartID != null) {
        $.ajax({
            url: '/Client/Ordering/GetShoppingCartCount',
            data: {},
            async: false,
            type: 'post',
            dataType: 'text',
            success: function (msg) {
                count = msg;
            }
        });
    }
    return count;
}
function getGoods() {
    $.ajax({
        url: '/Client/Ordering/GetShoppingCart',
        data: {},
        async: false,
        type: 'post',
        dataType: 'text',
        success: function (msg) {
        }
    });
}


function debouncedresize() {
    if ($('#media-checking').width() <= 1) {			// < 768
    } else {
    }

    calculateTopCategoryNavHeight();
}

function initTopCategoryFilterEvent(autoPlay) {
    // log("initTopCategoryFilterEvent");
    if (typeof autoPlay == "undefined") {
        autoPlay = false;
    }

    var totalTopCategorySwiperSlide = $('.top-category-swiper-slide').length;
    var initialSlide = totalTopCategorySwiperSlide - 1;
    if (!autoPlay) {
        initialSlide = 0;
    } else {
        initialSlide = Math.ceil(initialSlide / 4);
    }


    topCategorySwiper = new Swiper('.top-category-swiper-container', {
        slideClass: 'top-category-swiper-slide',
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: false,
        grabCursor: true,
        navigation: {
            nextEl: '.top-category-swiper-container .swiper-button-next'
        },

        initialSlide: initialSlide,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
            init: function () {
                if (autoPlay) {
                    setTimeout(function () {
                        // log('topCategorySwiper:');
                        // log('topCategorySwiper:', topCategorySwiper);
                        // log('topCategorySwiper.destroyed:', topCategorySwiper.destroyed);
                        // log('topCategorySwiper.initialized:', topCategorySwiper.initialized);
                        if (typeof topCategorySwiper.initialized != "undefined") {
                            if (topCategorySwiper.initialized) {
                                topCategorySwiper.slideTo(0, initialSlide * 400);
                            }
                        }
                    }, 2000);
                }
            },
            imagesReady: function () {
            }
        }
    });
}

function calculateTopCategoryNavHeight() {

    if ($('#top-category-nav-container').hasClass('active')) {
        var totalHeight = $('.top-category-nav-container').outerHeight(true);
        $('.top-category-nav').css({ 'height': totalHeight });
    }

    var maxHeight = $('body').height() - $('.top-nav').outerHeight(true) - $('.panel-bottom-container').outerHeight(true);
    $('.panel-bottom-container').height();
    $('#top-category-nav-container .panel-container').css('max-height', maxHeight);
}

function checkEditDetail2(detailId, obj) {
    if (CheckCompletedOrderByOrderDetailID2(detailId)) {
        $(obj).hide();
        alert(ClientLanguageJS.PageTimeOut);
        document.location.reload();
        return false;
    }
    return true;
}
function CheckCompletedOrderByOrderDetailID2(detailId) {
    var result = true;
    $.ajax({
        async: false,
        type: "POST",
        dataType: 'text',
        url: "/Client/Ordering/AjaxCheckCompletedOrderByOrderDetailID",
        data: { orderDetailID: detailId },
        success: function (msg) {
            if (msg == null || msg.length == 0 || msg.toString().toLowerCase() == 'true') {
                result = true;
            }
            else {
                result = false;
            }
        }
    });
    return result;
}