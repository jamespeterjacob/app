$(function () {
    'use strict'
    $('[data-toggle="offcanvas"]').on('click', function (evt) {
        // $('.row-offcanvas').toggleClass('active');
        // $('.sidebar-offcanvas').toggleClass('active');
        evt.preventDefault();
        evt.stopPropagation();
        // var target = $(this).data('target');
        // $(target).toggleClass('active');
        // $('[data-toggle="offcanvas"]').toggleClass('active');
        // $('.sidebar-nav').toggleClass('active');
        // $('html, body').toggleClass('scroll-disabled');
        toggleBackdrop();
    });


    $('#offcanvasModal').on('show.bs.modal', function (e) {
        // do something...

        setTimeout(function () {
            $('.modal-backdrop').addClass('offcanvas-backdrop');
        });
        $('.modal-backdrop').addClass('hide');
        $('#offcanvas.offcanvas').toggleClass('active');
        $('[data-toggle="offcanvas"]').toggleClass('active');
        $('.sidebar-nav').toggleClass('active');
        $('html, body').toggleClass('scroll-disabled');

        if (typeof kvSwiper != "undefined") {
            updateKVSwiper();
        }
    });
    $('#offcanvasModal').on('hide.bs.modal', function (e) {

        $('.modal-backdrop').addClass('hide');
        $('#offcanvas.offcanvas').toggleClass('active');
        $('[data-toggle="offcanvas"]').toggleClass('active');
        $('.sidebar-nav').toggleClass('active');
        $('html, body').toggleClass('scroll-disabled');

        if (typeof kvSwiper != "undefined") {
            updateKVSwiper();
        }
    });



    function toggleBackdrop() {

        if ($('body').hasClass('modal-open')) {
            $('#offcanvasModal').modal('hide');
            $('#mobile-cart').fadeIn();
        } else {

            $('#offcanvasModal').modal({
                keyboard: false,
                backdrop: true
            }, 'show');

            //hide mobile cart is exist
            $('#mobile-cart').fadeOut();

        }
    }

})