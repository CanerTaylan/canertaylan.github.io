
$(document).ready(function () {
    $('[data-bs-toggle="popover"]').popover();
});



jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 450) {
            $('#yukari-cik').fadeOut();
        } else {
            $('#yukari-cik').fadeIn();
        }
    });
    $('#yukari-cik').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });
});