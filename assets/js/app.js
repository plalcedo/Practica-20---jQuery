/*$(document).ready(() => {
    console.log("Hola");
});*/

var shown = false;

$(".notificacion").hide();

$(() => {
    console.log("Ready!");

    $(".cuadro").hide();
});

$("#showRed").click(() => {
    if (shown == true) {
        //$(".cuadro").hide();
        //$(".cuadro").fadeOut();
        $(".cuadro").slideUp();

        $("#showRed").text("Mostrar rojo");
    } else if (shown == false) {
        //$(".cuadro").show();
        //$(".cuadro").fadeIn("slow");
        //$(".cuadro").fadeIn();
        $(".cuadro").slideDown();

        $("#showRed").text("Ocultar rojo");
    }
    shown = !shown;
});

var menuShown = false;
$("#btnMenu").click(() => {
    if (menuShown == true) {
        $("#hiddenMenu").slideUp();
    } else if (menuShown == false) {
        $("#hiddenMenu").slideDown();
    }
    menuShown = !menuShown;
});

$("#btnContacto").hover(() => {
    $("#menuContacto").slideDown();
});

$("#menuContacto").hover(() => {

}, () => {
    $("#menuContacto").slideUp();
});

$("#btnAbout").hover(() => {
    $("#menuContacto").slideUp();
});

$("#animateElements").click(() => {
    $(".cuadro").animate({
        width: '500px',
        height: '500px',
        borderRadius: '50%'
    }, "fast");
    $(".cuadro").removeClass("rojo");
    $(".cuadro").addClass("verde");
});

$("section").scroll(() => {
    $("span").css("display", "inline").fadeOut("slow");
});

$(window).resize(() => {
    $("#resize").fadeIn("slow");
    setTimeout(() => {
        $("#resize").fadeOut("slow");
    }, 2000);
});

/*$("#textBox").keydown(() => {
    $("#keyDown").fadeIn("fast");
    $("#keyDown").fadeOut("fast");
});*/

$("#textBox").keypress(() => {
    $("#keyPressed").fadeIn("fast");
    $("#keyPressed").fadeOut("fast");
});

/*$("#textBox").keyup(() => {
    $("#keyUp").fadeIn("fast");
    $("#keyUp").fadeOut("fast");
});*/

$(window).contextmenu(() => {
    $("#contextMenuNotification").fadeIn("fast");
    $("#contextMenuNotification").fadeOut("fast");
});

$(".cuadro").hover(() => {
    $("#hoverInNotification").fadeIn("fast");
    $("#hoverInNotification").fadeOut("fast");
}, () => {
    $("#hoverOutNotification").fadeIn("fast");
    $("#hoverOutNotification").fadeOut("fast");
});

$(".cuadro").dblclick(() => {
    $("#dblClickNotification").fadeIn("fast");
    $("#dblClickNotification").fadeOut("fast");
});

/*$(window).mousemove(() => {
    $("#mouseMoveNotification").fadeIn("fast");
    $("#mouseMoveNotification").fadeOut("fast");
});*/