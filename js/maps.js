let tbTiendas = new Tiendas();
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
    tbTiendas.AgregaRegistro(1, 'PROMOACTIVADOR', '', 38, 'PROMOACTIVADOR', '', 16, 'ZONA 16', 666666, 'EDGAR ALFREDO GARCIA ALAVEZ', 19.304738, -99.203846, '~/../../img/moto.png');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '', 38, 'CHEDRAUI', '', 16, 'ZONA 16', 380042, 'TUXTEPEC', 18.091860,-96.131017,'~/../../img/chedraui.png');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '', 38, 'CHEDRAUI', '', 29, 'ZONA 29', 380234, 'AJUSCO', 19.298832,-99.211610,'~/../../img/chedraui.png');
    tbTiendas.AgregaRegistro(2, 'WALMART', '', 44, 'BODEGA AURRERA', '', 16, 'ZONA 16', 441180, 'TUXTEPEC - OAXACA', 18.090689,-96.133418,'~/../../img/bodegaaurrera.png');
    tbTiendas.AgregaRegistro(2, 'WALMART', '', 74, 'SAMS', '', 16, 'ZONA 16', 746277, 'SAMS TUXTEPEC', 18.091146,-96.132068,'~/../../img/sams.png');
    tbTiendas.AgregaRegistro(3, 'SORIANA', '', 17, 'HIPERMERCADO Y SUPER', '', 29, 'ZONA 29', 170937, 'Mega Soriana Coapa', 19.294811,-99.156600,'~/../../img/soriana.png');
    tbTiendas.AgregaRegistro(4, 'COMERCIAL MEXICANA', '', 43, 'MEGA COMERCIAL', '', 29, 'ZONA 29', 430174, 'MEGA COAPA', 19.302624,-99.207281,'~/../../img/superama.png');
    tbTiendas.AgregaRegistro(19, 'CITY FRESKCO', '', 53, 'CITY FRESKO', '', 29, 'ZONA 29', 530017, 'LA COMER TLALPAN', 19.306876,-99.164759,'~/../../img/soriana.png');
    tbTiendas.AgregaRegistro(42, 'SUBURBIA', '', 29, 'SUBURBIA', '', 29, 'ZONA 29', 290496, 'Villa Coapa', 19.295872,-99.155254,'~/../../img/superama.png');

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

        let ventana = '<div class="info_content"><h3>' + markers[i].tiendaId + ' - ' + markers[i].tiendaNombre + '</h3><p>' + markers[i].zonaNombre + '</p></div>'
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

  let suc = new Array();
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
