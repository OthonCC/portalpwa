var tbTiendas = new Tiendas();
function initMap() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
      mapTypeId: 'roadmap'
    };

    //tbTiendas.AgregaRegistro(0, 'PROMOACTIVADOR', '', 38, 'PROMOACTIVADOR', '', 16, 'ZONA 16', 862465, 'JUAN CARLOS CANSINO MARTINEZ', 18.090219, -96.136783, '~/../../img/moto.png');
    tbTiendas.AgregaRegistro(0, 'PROMOACTIVADOR', '', 38, 'PROMOACTIVADOR', '', 16, 'ZONA 16', 666666, 'EDGAR ALFREDO GARCIA ALAVEZ', 19.304738, -99.203846, '../img/moto.png');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 16, 'ZONA 16', 380042, 'TUXTEPEC', 18.091860, -96.131017, '../img/chedraui.png');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 29, 'ZONA 29', 380234, 'AJUSCO', 19.298832, -99.211610, '../img/chedraui.png');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 44, 'BODEGA AURRERA', '../img/Autoservicios/BodegaAurrera.png', 16, 'ZONA 16', 441180, 'TUXTEPEC - OAXACA', 18.090689, -96.133418, '../img/bodegaaurrera.png');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 74, 'SAMS', '../img/Autoservicios/Sams.png', 16, 'ZONA 16', 746277, 'SAMS TUXTEPEC', 18.091146, -96.132068, '../img/sams.png');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 17, 'HIPERMERCADO Y SUPER', '../img/Autoservicios/HiperMercado.png', 29, 'ZONA 29', 170937, 'Mega Soriana Coapa', 19.294811, -99.156600, '../img/soriana.png');
    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '../img/Autoservicios/ComercialMexicana.png', 43, 'MEGA COMERCIAL', '../img/Autoservicios/MegaComercial.png', 29, 'ZONA 29', 430174, 'MEGA COAPA', 19.302624, -99.207281, '../img/superama.png');
    tbTiendas.AgregaRegistro(19, 'CITY FRESKCO', '../img/Autoservicios/CityFresko.png', 53, 'CITY FRESKO', '../img/Autoservicios/CityFresko.png', 29, 'ZONA 29', 530017, 'LA COMER TLALPAN', 19.306876, -99.164759, '../img/soriana.png');
    tbTiendas.AgregaRegistro(42, 'SUBURBIA', '../img/Autoservicios/Suburbia.png', 29, 'SUBURBIA', '../img/Autoservicios/Suburbia.png', 29, 'ZONA 29', 290496, 'Villa Coapa', 19.295872, -99.155254, '../img/superama.png');

    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 15, 'ZONA 15', 380003, 'ALMACENES XALAPA', '', '', '');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 15, 'ZONA 15', 380004, 'XALAPA CRYSTAL', '', '', '');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 15, 'ZONA 15', 380005, 'VER. CENTRO', '', '', '');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 15, 'ZONA 15', 380006, 'VER. FLORESTA', '', '', '');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 38, 'CHEDRAUI', '../img/Autoservicios/Chedraui.png', 15, 'ZONA 15', 380007, 'VER. NORTE', '', '', '');

    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 44, 'BODEGA AURRERA', '../img/Autoservicios/BodegaAurrera.png', 33, 'ZONA 33', 440058, 'Santa Monica', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 44, 'BODEGA AURRERA', '../img/Autoservicios/BodegaAurrera.png', 10, 'ZONA 10', 440460, 'Paseo de las Torres', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 44, 'BODEGA AURRERA', '../img/Autoservicios/BodegaAurrera.png', 28, 'ZONA 28', 441001, 'SAN BUENAVENTURA, EDO. DE MÉXICO', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 44, 'BODEGA AURRERA', '../img/Autoservicios/BodegaAurrera.png', 31, 'ZONA 31', 441002, 'TEOTIHUACAN', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 44, 'BODEGA AURRERA', '../img/Autoservicios/BodegaAurrera.png', 23, 'ZONA 23', 441004, 'TALLERES REGION 102, CANCÚN', '', '', '');

    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 54, 'SUPERCENTER', '../img/Autoservicios/SuperCenter.png', 27, 'ZONA 27', 540383, 'Puerta Tlatelolco', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 54, 'SUPERCENTER', '../img/Autoservicios/SuperCenter.png', 23, 'ZONA 23', 541003, 'Playa del carmen', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 54, 'SUPERCENTER', '../img/Autoservicios/SuperCenter.png', 5, 'ZONA 05', 541007, 'MONCLOVA', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 54, 'SUPERCENTER', '../img/Autoservicios/SuperCenter.png', 20, 'ZONA 20', 541015, 'Irapuato', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 54, 'SUPERCENTER', '../img/Autoservicios/SuperCenter.png', 22, 'ZONA 22', 541016, 'MERIDA NORTE', '', '', '');

    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 74, 'SAMS', '../img/Autoservicios/Sams.png', 4, 'ZONA 04', 744727, 'Universidad', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 74, 'SAMS', '../img/Autoservicios/Sams.png', 1, 'ZONA 01', 744728, 'Mexicali', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 74, 'SAMS', '../img/Autoservicios/Sams.png', 4, 'ZONA 04', 744746, 'Saltillo', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 74, 'SAMS', '../img/Autoservicios/Sams.png', 7, 'ZONA 07', 744790, 'Zacatecas', '', '', '');
    tbTiendas.AgregaRegistro(2, 'WALMART', '../img/Autoservicios/Walmart.png', 74, 'SAMS', '../img/Autoservicios/Sams.png', 2, 'ZONA 02', 744791, 'Los Mochis', '', '', '');

    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 27, 'MERCADO Y EXPRESS', '../img/Autoservicios/MercadoExpress.png', 20, 'ZONA 20', 270123, 'Salamanca', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 27, 'MERCADO Y EXPRESS', '../img/Autoservicios/MercadoExpress.png', 34, 'ZONA 34', 270124, 'Navojoa', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 27, 'MERCADO Y EXPRESS', '../img/Autoservicios/MercadoExpress.png', 14, 'ZONA 14', 270128, 'BOSQUES', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 27, 'MERCADO Y EXPRESS', '../img/Autoservicios/MercadoExpress.png', 34, 'ZONA 34', 270130, 'Guaymas', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 27, 'MERCADO Y EXPRESS', '../img/Autoservicios/MercadoExpress.png', 19, 'ZONA 19', 270134, 'Cárdenas', '', '', '');

    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 17, 'HIPERMERCADO Y SUPER', '../img/Autoservicios/HiperMercado.png', 39, 'ZONA 39', 170004, 'Oriente', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 17, 'HIPERMERCADO Y SUPER', '../img/Autoservicios/HiperMercado.png', 3, 'ZONA 03', 170006, 'Tecnológico', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 17, 'HIPERMERCADO Y SUPER', '../img/Autoservicios/HiperMercado.png', 5, 'ZONA 05', 170007, 'Contry', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 17, 'HIPERMERCADO Y SUPER', '../img/Autoservicios/HiperMercado.png', 4, 'ZONA 04', 170011, 'Francisco Coss', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 17, 'HIPERMERCADO Y SUPER', '../img/Autoservicios/HiperMercado.png', 4, 'ZONA 04', 170012, 'SAN NICOLAS', '', '', '');

    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 37, 'CITY CLUB', '../img/Autoservicios/CityClub.png', 39, 'ZONA 39', 371001, 'TORREON', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 37, 'CITY CLUB', '../img/Autoservicios/CityClub.png', 5, 'ZONA 05', 371002, 'MONCLOVA', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 37, 'CITY CLUB', '../img/Autoservicios/CityClub.png', 3, 'ZONA 03', 371003, 'CHIHUAHUA', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 37, 'CITY CLUB', '../img/Autoservicios/CityClub.png', 4, 'ZONA 04', 371004, 'SALTILLO', '', '', '');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '../img/Autoservicios/Soriana.png', 37, 'CITY CLUB', '../img/Autoservicios/CityClub.png', 31, 'ZONA 31', 371005, 'PACHUCA', '', '', '');


    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '../img/Autoservicios/ComercialMexicana.png', 43, 'MEGA COMERCIAL', '../img/Autoservicios/MegaComercial.png', 29, 'ZONA 29', 430005, 'MEGA PILARES', '', '', '');
    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '../img/Autoservicios/ComercialMexicana.png', 43, 'MEGA COMERCIAL', '../img/Autoservicios/MegaComercial.png', 29, 'ZONA 29', 430016, 'MEGA MIXCOAC', '', '', '');
    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '../img/Autoservicios/ComercialMexicana.png', 43, 'MEGA COMERCIAL', '../img/Autoservicios/MegaComercial.png', 29, 'ZONA 29', 430025, 'MEGA SAN JERONIMO', '', '', '');
    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '../img/Autoservicios/ComercialMexicana.png', 43, 'MEGA COMERCIAL', '../img/Autoservicios/MegaComercial.png', 15, 'ZONA 15', 430043, 'MEGA XALAPA', '', '', '');
    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '../img/Autoservicios/ComercialMexicana.png', 43, 'MEGA COMERCIAL', '../img/Autoservicios/MegaComercial.png', 15, 'ZONA 15', 430102, 'MEGA BOCA DEL RIO', '', '', '');

    tbTiendas.AgregaRegistro(5, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 39, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 27, 'ZONA 27', 390001, 'L CENTRO', '', '', '');
    tbTiendas.AgregaRegistro(5, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 39, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 29, 'ZONA 29', 390002, 'L INSURGENTES', '', '', '');
    tbTiendas.AgregaRegistro(5, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 39, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 30, 'ZONA 30', 390003, 'L POLANCO', '', '', '');
    tbTiendas.AgregaRegistro(5, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 39, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 30, 'ZONA 30', 390004, 'L SATELITE', '', '', '');
    tbTiendas.AgregaRegistro(5, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 39, 'LIVERPOOL', '../img/Autoservicios/Liverpool.png', 29, 'ZONA 29', 390005, 'L PERISUR', '', '', '');

    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 14, 'SUPERMERCADO', '../img/Autoservicios/SuperMercado.png', 2, 'ZONA 02', 141086, 'Ley Tres Rios', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 14, 'SUPERMERCADO', '../img/Autoservicios/SuperMercado.png', 38, 'ZONA 38', 141130, 'Super Ley COMONDU', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 14, 'SUPERMERCADO', '../img/Autoservicios/SuperMercado.png', 2, 'ZONA 02', 141171, 'SUPER LEY LA PRIMAVERA', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 14, 'SUPERMERCADO', '../img/Autoservicios/SuperMercado.png', 2, 'ZONA 02', 141194, 'SUPER LEY COSTA RICA', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 14, 'SUPERMERCADO', '../img/Autoservicios/SuperMercado.png', 2, 'ZONA 02', 141225, 'SUPER LEY INGENIO EL DORADO', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 56, 'EXPRESS', '../img/Autoservicios/Express.png', 2, 'ZONA 02', 561029, 'LEY JUAN JOSE RIOS', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 56, 'EXPRESS', '../img/Autoservicios/Express.png', 2, 'ZONA 02', 561163, 'LEY EXPRESS EL FUERTE', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 56, 'EXPRESS', '../img/Autoservicios/Express.png', 2, 'ZONA 02', 561223, 'LEY EXPRESS VILLA JUAREZ', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 56, 'EXPRESS', '../img/Autoservicios/Express.png', 2, 'ZONA 02', 561237, 'LEY EXPRESS LA CRUZ', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 63, 'FIESTA COMPACTA', '../img/Autoservicios/FiestaCompacta.png', 2, 'ZONA 02', 631056, 'Ley Humaya', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 63, 'FIESTA COMPACTA', '../img/Autoservicios/FiestaCompacta.png', 35, 'ZONA 35', 631068, 'LEY ESCUINAPA', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 63, 'FIESTA COMPACTA', '../img/Autoservicios/FiestaCompacta.png', 2, 'ZONA 02', 631090, 'LEY EL CONCHI', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 63, 'FIESTA COMPACTA', '../img/Autoservicios/FiestaCompacta.png', 2, 'ZONA 02', 631123, 'LEY LAS FUENTES', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 63, 'FIESTA COMPACTA', '../img/Autoservicios/FiestaCompacta.png', 2, 'ZONA 02', 631133, 'LEY MILENIUM', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 65, 'FIESTA EUROPEA', '../img/Autoservicios/FiestaEuropea.png', 2, 'ZONA 02', 651004, 'LEY PLAZA RIO', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 65, 'FIESTA EUROPEA', '../img/Autoservicios/FiestaEuropea.png', 34, 'ZONA 34', 651012, 'LEY CAJEME', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 65, 'FIESTA EUROPEA', '../img/Autoservicios/FiestaEuropea.png', 2, 'ZONA 02', 651016, 'Ley Plaza Fiesta', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 65, 'FIESTA EUROPEA', '../img/Autoservicios/FiestaEuropea.png', 2, 'ZONA 02', 651017, 'PLAZA FIESTA LAS PALMAS', '', '', '');
    tbTiendas.AgregaRegistro(7, 'CASA LEY', '../img/Autoservicios/CasaLey.png', 65, 'FIESTA EUROPEA', '../img/Autoservicios/FiestaEuropea.png', 2, 'ZONA 02', 651021, 'PLAZA LEY MAZATLAN', '', '', '');

    UbicaAutoServiciosCercanos(19.304738, -99.203846).then(markers => {

      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      //18.090219, -96.136783
      //crd.latitude, crd.longitude

      for (i = 0; i < markers.length; i++) {

        var position = new google.maps.LatLng(markers[i].longitud, markers[i].latitud);
        var waypts = [{ location: { lat: markers[i].latitud, lng: markers[i].longitud }, stopover: true }];

        bounds.extend(position);
        marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markers[i].formatoNombre,
          icon: markers[i].rutaImagen,
          animation: google.maps.Animation.DROP,
        });

        var ventana = '<div class="info_content"><h3>' + markers[i].tiendaId + ' - ' + markers[i].tiendaNombre + '</h3><p>' + markers[i].zonaNombre + '</p></div>'
        var infoWindow = new google.maps.InfoWindow(), marker, i;
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infoWindow.setContent(ventana);
            infoWindow.open(map, marker);
          }
        })(marker, i));
      }
      map.fitBounds(bounds);

    });
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}


function UbicaAutoServiciosCercanos(lon, lat) {
  var db = new PouchDB('ITK');

  lon = parseInt(lon);
  lat = parseInt(lat);
  lonMax = lon + 1;
  latMax = lat - 1;

  var suc = new Array();
  var promesa = new Promise((resolve, reject) => {
    db.allDocs({ include_docs: true, descending: false })
      .then(doc => {
        doc.rows.forEach(element => {
          if (element.doc.table == "Tiendas"
            && (parseInt(element.doc.longitud) == lon
              && parseInt(element.doc.latitud) == lat)) {
            suc.push(element.doc);
          }
        });
        resolve(suc);
      });
  });
  return promesa;
}
