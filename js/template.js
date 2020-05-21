$('head').append('<title>AUTOSERVICIOS</title>');
$('head').append('<meta charset="UTF-8">');
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
$('head').append('<link rel="icon" type="image/png" href="../img/ITK_ico.png" />');
$('head').append('<link rel="stylesheet" type="text/css" href="../vendor/bootstrap/css/bootstrap.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="../fonts/font-awesome-4.7.0/css/font-awesome.min.css">');
//$('head').append('<link rel="stylesheet" type="text/css" href="../css/reset.css">');
//$('head').append('<link rel="stylesheet" type="text/css" href="../css/menu.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="../css/estilosheader.css">');


$('head').append('<script src="../vendor/bootstrap/js/bootstrap.js"></script>');



function muestraTemplate(menu, header, footer) {

    if (!validaEstadoSesion()) {
        return window.location.href = "/index.html";
    }

    if (header) {
        creaHeader();
    }
    if (menu) {
        creaMenu();
    }

    if (footer) {
        creaFooter();
    }
}

function validaEstadoSesion() {
    return true;
}


function creaMenu() {
    var html = "";
    $('#menu').html(html);
}

function creaHeader() {
    var html = "";
    html += '    <div class="headContent">';
    html += '    <div class="hamburgermenu"> <a href="#" id="hamburger"><i class="fa fa-bars txtWhite"></i></a> </div>';
    html += '    <div class="headerLogo"> <a href="index.html"><img src="../img/logo_italika.png" id="imgLogo"></a> </div>';
    html += '    <div class="headerUser">';
    html += '        <div class="nameUsr"><span>Monica</span></div>';
    html += '    </div>';
    html += '    </div>';

    $('#header').html(html);
}

function creaFooter() {
    var html = "";
    html += '<div class="wrapper">';
    html += '    <p class="tCenter">Italika 2019<br>';
    html += '    Todos los derechos reservados. <a href="http://www.italika.mx/">www.italika.com</a></p>';
    html += '</div>';
    $('#footer').html(html);
}
