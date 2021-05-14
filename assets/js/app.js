/*$(document).ready(() => {
    console.log("Hola");
});*/

var shown = false;

$(".notificacion").hide();

$(() => {
    console.log("Ready!");

    $(".cuadro").hide();
});

/* Funciones para ocultar/mostrar elementos */

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

/* Menús */

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

/* Animaciones */

$("#animateElements").click(() => {
    $(".cuadro").animate({
        width: '500px',
        height: '500px',
        borderRadius: '50%'
    }, "fast");
    $(".cuadro").removeClass("rojo");
    $(".cuadro").addClass("verde");
});

/* Scroll */

$("section").scroll(() => {
    $("span").css("display", "inline").fadeOut("slow");
});

/* Cambios de tamaño */

$(window).resize(() => {
    $("#resize").fadeIn("slow");
    setTimeout(() => {
        $("#resize").fadeOut("slow");
    }, 2000);
});

/* Acciones con teclas */

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

/* Menú contextual (click derecho) */

$(window).contextmenu(() => {
    $("#contextMenuNotification").fadeIn("fast");
    $("#contextMenuNotification").fadeOut("fast");
});

/* Acciones con Hover */

$(".cuadro").hover(() => {
    $("#hoverInNotification").fadeIn("fast");
    $("#hoverInNotification").fadeOut("fast");
}, () => {
    $("#hoverOutNotification").fadeIn("fast");
    $("#hoverOutNotification").fadeOut("fast");
});

/* Doble click */

$(".cuadro").dblclick(() => {
    $("#dblClickNotification").fadeIn("fast");
    $("#dblClickNotification").fadeOut("fast");
});

/* Mover el mouse */

/*$(window).mousemove(() => {
    $("#mouseMoveNotification").fadeIn("fast");
    $("#mouseMoveNotification").fadeOut("fast");
});*/


/* Verificaciones al salir del Input*/

$("#input1").blur(() => {
    //alert("Focus lost");

    var inputText = $("#input1").val();

    console.log(inputText);

    if (inputText == "Password") {
        $("#input1").removeClass("inputBad");
        $("#input1").addClass("inputGood");
    } else {
        $("#input1").removeClass("inputGood");
        $("#input1").addClass("inputBad");
    }
});

/* Verificación a tiempo real */
/*$("#input1").keyup(() => {
    //alert("Focus lost");

    var inputText = $("#input1").val();

    console.log(inputText);

    if (inputText == "Password") {
        $("#input1").removeClass("inputBad");
        $("#input1").addClass("inputGood");
    } else {
        $("#input1").removeClass("inputGood");
        $("#input1").addClass("inputBad");
    }
});*/


/* Cambiar color mediante una opción de select */

//var cambio = 0;
$("#colorChange").change(() => {
    //cambio++;
    //console.log(cambio);

    var color = Number($("#colorChange").val());

    switch (color) {
        case 1:
            {
                $("#circulo").removeClass();
                $("#circulo").addClass("rojo");
                break;
            }
        case 2:
            {
                $("#circulo").removeClass();
                $("#circulo").addClass("verde");
                break;
            }
        case 3:
            {
                $("#circulo").removeClass();
                $("#circulo").addClass("azul");
                break;
            }
        default:
            {
                $("#circulo").removeClass();
                $("#circulo").addClass("negro");
                break;
            }
    }
});

/* Change aplicado a un input */

$("#input1").change(() => {
    console.log("Texto nuevo: " + $("#input1").val());
});

/* Focus */

$("#input1").focusin(() => {
    $("#input1").addClass("inputFocus");
});
$("#input1").focusout(() => {
    $("#input1").removeClass("inputFocus");
});


/* Pseudoclases */

var menuItems = ["Home", "About", "Products", "Contact"];
$("#llenarMenu").click(() => {
    for (var i = 0; i < menuItems.length; i++) {
        $("#menu li:nth-child(" + (i + 1) + ")").append('<a href="#">' + menuItems[i] + '</a>');
    }
});