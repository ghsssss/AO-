function ShowJ() {


    $("#j1").addClass("show animated fadeInRight");
    $("#j2").addClass("show animated fadeInLeft");
    $('#j2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

        $("#j3").addClass("show  animated fadeIn");
        $("#j4").fadeIn(2000);
        $("#j04").fadeIn(2000);
        $("#j05").fadeIn(3000);
        $("#j5").fadeIn(3000);
        $("#j06").fadeIn(4000);
        $("#j6").fadeIn(4000);
        $("#j07").fadeIn(5000);
        $("#j7").fadeIn(5000);
        $("#j08").fadeIn(6000);
        $("#j8").fadeIn(6000);
        $("#j10").fadeIn(7000);
    });
}