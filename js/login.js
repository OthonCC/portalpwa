

// ==================================================================
//                        Registro de SW
// ==================================================================
var url = window.location.href;
var swLocation = '/twittor/sw.js'; // Indicar nombre de la aplicación

if (navigator.serviceWorker) {
    if (url.includes('localhost')) {
        swLocation = '/sw.js';
    }
    //navigator.serviceWorker.register(swLocation);
}

// ==================================================================
//                   Evento para inicio de sesión
// ==================================================================

$("#InicioSesion").click(() => {
    //fetch('')
    var datosRequeridos = true;
    if (!validaCampoVacio($("#usuario"))) { datosRequeridos = false; }
    if (!validaCampoVacio($("#pass"))) { datosRequeridos = false; }

    if (!datosRequeridos) { return false; }


    //var sesion = {
    //    usuarioId: '850195',
    //    password: 'italika',
    //    conn: ""
    //};

    var usuario = $("#usuario").val();
    var password = $("#pass").val();


    if (usuario=="USUARIO1" && password=="CONTRASENA1") { 
        window.location="pages/ArbolNavegacion.html"; 

    //fetch('http://localhost:8085/pruebanav.html', {
    //    method: 'GET',
    //    headers: {
    //        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    //    },
        //body: $.param(sesion)
    }
    //).then(res => console.log);
    else if (usuario=="USUARIO" && password=="CONTRASENA") { 
        window.location="pages/ArbolNavegacion.html"; }
    else if (usuario=="USUARIO2" && password=="CONTRASENA2") { 
        window.location="pages/ArbolNavegacion.html"; }
    else if (usuario=="USUARIO3" && password=="CONTRASENA3") { 
        window.location="pages/ArbolNavegacion.html"; }
    else{
        window.location="usuarioocontraseña.html";
    }

    //return window.location.href = "/pages/ArbolNavegacion.html";
});


$("#Inicio").click(() => {
    //fetch('')
    

    return window.location.href = "index.html";
});

function validaCampoVacio(input) {
    if (input.val().trim() == '') {
        muestraAlerta(input);
        return false;
    }
    return true;
}

function muestraAlerta(input) {
    var thisAlert = input.parent();
    $(thisAlert).addClass('alert-validate');
}

function ocultaAlerta(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}

// Oculta alerta cuando se hace foco en control
$('.validate-form .input100').each(function () {
    $(this).focus(function () {
        ocultaAlerta(this);
    });
});

// evita hacer el postback en la pagina
$('.validate-form').on('submit', function () { return false; });

//valida si campo esta vacio para maximizar el titulo del campo
$('.input100').each(function () {
    $(this).on('blur', function () {
        if ($(this).val().trim() != "") {
            $(this).addClass('has-val');
        }
        else {
            $(this).removeClass('has-val');
        }
    })
})