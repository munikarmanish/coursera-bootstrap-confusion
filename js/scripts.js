$(document).ready(function () {

    // Set carousel interval
    $('#myCarousel').carousel({
        interval: 2000
    });

    // Handle custom carousel control button
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    // Handle login link
    $('#loginLink').click(function () {
        $('#loginModal').modal();
    });

    // Handle "Reserve Table" button
    $('#reserveTableButton').click(function () {
        $('#reserveFormModal').modal();
    });

})
