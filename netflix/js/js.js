const nexticon = '<i class="bi bi-fast-forward-fill"></i>';
const previcon = '<i class="bi bi-rewind-fill"></i>';





$(document).ready(function () {

    $('.film-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [previcon, nexticon],
        dots: false,
        smartSpeed: 2000,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
})