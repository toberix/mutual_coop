$(document).ready(function () {
    var carouselContainer = $('.carousel');
    var slideInterval = 3000;

    function toggleH() {
        $('.toggleCaption').hide()
        var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

        function () {
            $(this).removeClass('animated fadeInRight')
        });
        caption.slideToggle();
    }

    function toggleC() {
        $('.toggleButton').hide()
        var button = carouselContainer.find('.active').find('.toggleButton').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

        function () {
            $(this).removeClass('animated fadeInUp')
        });
        button.slideToggle();
    }
    carouselContainer.carousel({
        interval: slideInterval,
        cycle: true,
        pause: "hover"
    })
        .on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel')
        .on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');
});