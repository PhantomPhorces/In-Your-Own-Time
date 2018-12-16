$(document).ready(function () {
    center();
});
$(window).resize(function () {
    center();
});

function center() {
    var dwidth = $("#taskbar").width();
    var twidth = $("#links").width();
    $("#links").css("left", (dwidth + twidth) / 2);
    $("#links").css("margin-left", twidth * -1);
    var dheight = $("#taskbar").height();
    var theight = $("#links").height();
    $("#links").css("top", (dheight + theight) / 2);
    $("#links").css("margin-top", theight * -1);
}
$(".nav").hover(function () {
    $(".nav").animate({
        borderBottom: "4px solid #3498db !important"
    }, 1);
});
