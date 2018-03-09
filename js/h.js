var timer5 = setInterval(function () {
    if ($("#h").hasClass("swiper-slide swiper-slide-active")) {
        $("#h1").addClass("animated fadeInLeft");
        $('#h1').show();
        $('#h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#h2').show();
            $("#h2").addClass("animated fadeIn");
        });
    }
}, 1000);