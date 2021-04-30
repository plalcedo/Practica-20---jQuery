/*$(document).ready(() => {
    console.log("Hola");
});*/

var shown = false;

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
});