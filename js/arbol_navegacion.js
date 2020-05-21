let tbTiendas = new Tiendas();
var sucursales = [];
var Autoservicios = [];
var Formatos = [];
var Zonas = [];
var Tienda = [];

$(document).ready(function () {
    tbTiendas.ObtieneTodosRegistros().then(tiendas => {
        sucursales = tiendas;
        pintaArbolNavegacion(tiendas);
    });
});

function busqueda() {
    var filter = $("#search").val().toLowerCase();
    if (filter == "") {
        pintaArbolNavegacion(Tienda);
        return;
    }

    var newTiendas = sucursales.filter(o =>         
        o.autoservicioId.toString().indexOf(filter) !== -1 || o.autoservicioNombre.toLowerCase().indexOf(filter) !== -1 ||
        o.formatoId.toString().indexOf(filter) !== -1 || o.formatoNombre.toLowerCase().indexOf(filter) !== -1 ||
        o.zonaId.toString().indexOf(filter) !== -1 || o.zonaNombre.toLowerCase().indexOf(filter) !== -1 ||
        o.tiendaId.toString().indexOf(filter) !== -1 || o.tiendaNombre.toLowerCase().indexOf(filter) !== -1);
        pintaArbolNavegacion(newTiendas);
}

function pintaArbolNavegacion(tiendas) {

    Autoservicios = obtieneRegistrosUnicos(tiendas, 'autoservicioId');
    Formatos = obtieneRegistrosUnicos(tiendas, 'formatoId');
    Zonas = obtieneRegistrosUnicos(tiendas, 'zonaId');
    Tienda = tiendas;

    $('#tblAutoservicio > tbody').empty();
    $('#tblFormato > tbody').empty();
    $('#tblZona > tbody').empty();
    $('#tblTienda > tbody').empty();

    if (Autoservicios.length == 0) {
        return;
    }

    var tr = $("<tr></tr>");
    var tr2 = $("<tr></tr>");

    for (var i = 0; i < Autoservicios.length; i++) {
        if ((i % 2) == 0) {
            //style="background-color: lightblue;" 
            tr.append('<td id="tdAs' + Autoservicios[i].autoservicioId + '" onclick="clickAutoservicio(' + Autoservicios[i].autoservicioId + ')"><img src="' + Autoservicios[i].autoservicioIcon + '" class="img" ></td>');
        } else {
            tr2.append('<td id="tdAs' + Autoservicios[i].autoservicioId + '"  onclick="clickAutoservicio(' + Autoservicios[i].autoservicioId + ')"><img src="' + Autoservicios[i].autoservicioIcon + '" class="img" ></td>');
        }
    }

    $('#tblAutoservicio > tbody').append(tr);
    $('#tblAutoservicio > tbody').append(tr2);
    clickAutoservicio(Autoservicios[0].autoservicioId);
}

function clickAutoservicio(autoservicioId) {
    $('#tblAutoservicio > tbody > tr > td').css("background-color", "");
    $('#tdAs' + autoservicioId).css("background-color", "lightblue");

    $('#tblFormato > tbody').empty();
    $('#tblZona > tbody').empty();
    $('#tblTienda > tbody').empty();

    var formatosByAs = Formatos.filter(o => o.autoservicioId == autoservicioId);

    if (formatosByAs.length == 0) {
        alert("No existen tiendas para el formato seleccionado.");
        return;
    }

    var tr = $("<tr></tr>");
    var tr2 = $("<tr></tr>");

    for (var i = 0; i < formatosByAs.length; i++) {
        if ((i % 2) == 0) {
            //style="background-color: lightblue;" 
            tr.append('<td id="tdFo' + formatosByAs[i].formatoId + '" onclick="clickFormato(' + formatosByAs[i].formatoId + ')"><img src="' + formatosByAs[i].formatoIcon + '" class="img" ></td>');
        } else {
            tr2.append('<td id="tdFo' + formatosByAs[i].formatoId + '" onclick="clickFormato(' + formatosByAs[i].formatoId + ')"><img src="' + formatosByAs[i].formatoIcon + '" class="img" ></td>');
        }
    }
    $('#tblFormato > tbody').append(tr);
    $('#tblFormato > tbody').append(tr2);
    clickFormato(formatosByAs[0].formatoId);
}

function clickFormato(formatoId) {
    $('#tblFormato > tbody > tr > td').css("background-color", "");
    $('#tdFo' + formatoId).css("background-color", "lightblue");

    $('#tblZona > tbody').empty();
    $('#tblTienda > tbody').empty();

    var zonasByFormatos = Zonas.filter(o => o.formatoId == formatoId);
    if (zonasByFormatos.length == 0) {
        alert("No existen tiendas para la zona seleccionada.");
        return;
    }

    var tr = $("<tr></tr>");
    var tr2 = $("<tr></tr>");

    for (var i = 0; i < zonasByFormatos.length; i++) {
        if ((i % 2) == 0) {
            //style="background-color: lightblue;" 
            tr.append('<td id="tdZn' + zonasByFormatos[i].zonaId + '" onclick="clickZona(' + zonasByFormatos[i].zonaId + ', ' + formatoId + ')">' + zonasByFormatos[i].zonaNombre + '</td>');
        } else {
            tr2.append('<td id="tdZn' + zonasByFormatos[i].zonaId + '" onclick="clickZona(' + zonasByFormatos[i].zonaId + ', ' + formatoId + ')">' + zonasByFormatos[i].zonaNombre + '</td>');
        }
    }

    $('#tblZona > tbody').append(tr);
    $('#tblZona > tbody').append(tr2);
    clickZona(zonasByFormatos[0].zonaId, formatoId);
}

function clickZona(zonaId, formatoId) {
    $('#tblZona > tbody > tr > td').css("background-color", "");
    $('#tdZn' + zonaId).css("background-color", "lightblue");

    $('#tblTienda > tbody').empty();

    var tiendasByZona = Tienda.filter(o => o.zonaId == zonaId && o.formatoId == formatoId);
    if (tiendasByZona.length == 0) {
        return;
    }

    var tr = $("<tr></tr>");
    var tr2 = $("<tr></tr>");

    for (var i = 0; i < tiendasByZona.length; i++) {
        if ((i % 2) == 0) {
            tr.append('<td id="tdTd' + tiendasByZona[i].tiendaId + '" onclick="clickTienda(' + tiendasByZona[i].tiendaId + ')">' + tiendasByZona[i].tiendaId + ' - ' + tiendasByZona[i].tiendaNombre + '</td>');
        } else {
            tr2.append('<td id="tdTd' + tiendasByZona[i].tiendaId + '" onclick="clickTienda(' + tiendasByZona[i].tiendaId + ')">' + tiendasByZona[i].tiendaId + ' - ' + tiendasByZona[i].tiendaNombre + '</td>');
        }
    }

    $('#tblTienda > tbody').append(tr);
    $('#tblTienda > tbody').append(tr2);
}

function clickTienda(tiendaId) {
    alert('Seleccionaste la tienda ' + tiendaId);
}


function obtieneRegistrosUnicos(json, filter) {
    var newJson = [];
    for (var i = 0; i < json.length; i++) {
        if (newJson.length == 0) {
            newJson.push(json[i]);
            continue;
        }

        var bool = true;
        for (var j = 0; j < newJson.length; j++) {
            if (newJson[j][filter] == json[i][filter]) {
                bool = false;
                break;
            }
        }

        if (bool) {
            newJson.push(json[i]);
        }
    }

    return sortJSON(newJson, filter);
}

function sortJSON(data, key, way) {
    if (data == null || typeof data === 'undefined' || data.length === 0) {
        return data;
    }

    if (typeof way === 'undefined' || way.length === 0) {
        way = 'asc';
    }

    return data.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (way === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        if (way === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}
