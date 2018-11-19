$(document).ready(function () {
    var dwidth = $("#taskbar").width();
    var twidth = $("#taskbar").children("a").width();
    $("#taskbar").children("a").css("left", (dwidth + twidth) / 2);
    $("#taskbar").children("a").css("margin-left", twidth *-1);
});
$(window).resize(function () {
    var dwidth = $("#taskbar").width();
    var twidth = $("#taskbar").children("a").width();
    $("#taskbar").children("a").css("left", (dwidth + twidth) / 2);
    $("#taskbar").children("a").css("margin-left", twidth *-1);
});
