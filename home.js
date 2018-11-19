$(document).ready(function () {
    var dwidth = $("#taskbar").width();
    var twidth = $("#taskbar").children("a").width();
    $("#taskbar").children("a").css("left", (dwidth + twidth) / 2);
    $("#taskbar").children("a").css("margin-left", twidth *-1);
    var dheight = $("#taskbar").height();
    var theight = $("#taskbar").children("a").height();
    $("#taskbar").children("a").css("top", (dheight + theight) / 2);
    $("#taskbar").children("a").css("margin-top", theight *-1);
});
$(window).resize(function () {
    var dwidth = $("#taskbar").width();
    var twidth = $("#taskbar").children("a").width();
    $("#taskbar").children("a").css("left", (dwidth + twidth) / 2);
    $("#taskbar").children("a").css("margin-left", twidth *-1);
    var dheight = $("#taskbar").height();
    var theight = $("#taskbar").children("a").height();
    $("#taskbar").children("a").css("top", (dheight + theight) / 2);
    $("#taskbar").children("a").css("margin-top", theight *-1);
});
