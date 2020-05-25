importScripts('js/sw-utils.js');


const CACHE_ESTATICO = 'ITK-cache-estatico-v1';
const CACHE_DINAMICO = 'ITK-cache-dinamico-v1';
const CACHE_INMUTABLE = 'ITK-cache-inmutable-v1';


const APP_SHELL = [
    // '/',
    'index.html',
    'img/bodegaaurrera.png',
    'img/chedraui.png',
    'img/favicon.png',
    'img/Icon.psd',
    'img/ITK.png',
    'img/ITK_ico.png',
    'img/ITK_logo.png',
    'img/ITK__.png',
    'img/logo_italika.png',
    'img/moto.png',
    'img/sams.png',
    'img/soriana.png',
    'img/superama.png',
    'img/Autoservicios/Batarse.png',
    'img/Autoservicios/Bestbuy.png',
    'img/Autoservicios/BodegaAurrera.png',
    'img/Autoservicios/Bodesa.png',
    'img/Autoservicios/Calimax.png',
    'img/Autoservicios/Casaley.png',
    'img/Autoservicios/Chedraui.png',
    'img/Autoservicios/CityClub.png',
    'img/Autoservicios/CityFresko.png',
    'img/Autoservicios/ComercialMexicana.png',
    'img/Autoservicios/Express.png',
    'img/Autoservicios/FiestaCompacta.png',
    'img/Autoservicios/FiestaEuropea.png',
    'img/Autoservicios/Heb.png',
    'img/Autoservicios/HiperMercado.png',
    'img/Autoservicios/Liverpool.png',
    'img/Autoservicios/MegaComercial.png',
    'img/Autoservicios/MercadoExpress.png',
    'img/Autoservicios/MueblesAmerica.png',
    'img/Autoservicios/Sams.png',
    'img/Autoservicios/Soriana.png',
    'img/Autoservicios/Suburbia.png',
    'img/Autoservicios/SuperCenter.png',
    'img/Autoservicios/SuperMercado.png',
    'img/Autoservicios/Walmart.png',
    'js/app.js',
    'js/arbol_navegacion.js',
    'js/datos.js',
    'js/login.js',
    'js/main.js',
    'js/maps.js',
    'js/BD/tbTiendas.js',
    'css/arbol_navegacion.css',
    'css/estilosheader.css',
    'css/main.css',
    'css/util.css',
    'css/base/datatables.min.css',
    'css/base/estilosheader.css',
    'css/base/estilos_generalesbasic.css',
    'css/base/font-awesome.css',
    'css/base/font-roboto.css',
    'css/base/fonts.css',
    'css/base/menu.css',
    'css/base/modales.css',
    'css/base/reset.css',
    'css/particular/admEvePreO.css',
    'css/particular/admobjetivos.css',
    'css/particular/catalogos.css',
    'css/particular/datepicker-ITKEKT-calendario.css',
    'css/particular/modales.css',
    'css/particular/style.css',
    'datos/usuarios.json',
    'pages/a2.html',
    'usuarioocontraseña.html',
    'pages/ArbolNavegacion.html',
    'pages/MapaAutoServicios.html'
];

const APP_SHELL_INMUTABLE = [
    'js/template.js',
    'js/base/funciones.js',
    'js/base/jquery-3.3.1.min.js',
    'vendor/jquery/jquery-3.2.1.min.js',
    'vendor/mdtoast/mdtoast.min.js',
    'vendor/mdtoast/mdtoast.min.css',
    'vendor/animate/animate.css',
    'vendor/animsition/animsition.css',
    'vendor/animsition/animsition.js',
    'vendor/animsition/animsition.min.css',
    'vendor/animsition/animsition.min.js',
    'vendor/animsition/css/animsition.css',
    'vendor/animsition/css/animsition.min.css',
    'vendor/animsition/js/animsition.js',
    'vendor/animsition/js/animsition.min.js',
    'vendor/pouchdb/pouchdb-7.1.1.min.js',
    'vendor/pouchdb/pouchdb.min.js',
    'vendor/select2/select2.css',
    'vendor/select2/select2.js',
    'vendor/select2/select2.min.css',
    'vendor/select2/select2.min.js',
    'vendor/bootstrap/bootstrap-grid.css',
    'vendor/bootstrap/bootstrap-grid.css.map',
    'vendor/bootstrap/bootstrap-grid.min.css',
    'vendor/bootstrap/bootstrap-grid.min.css.map',
    'vendor/bootstrap/bootstrap-reboot.css',
    'vendor/bootstrap/bootstrap-reboot.css.map',
    'vendor/bootstrap/bootstrap-reboot.min.css',
    'vendor/bootstrap/bootstrap-reboot.min.css.map',
    'vendor/bootstrap/bootstrap.css',
    'vendor/bootstrap/bootstrap.css.map',
    'vendor/bootstrap/bootstrap.js',
    'vendor/bootstrap/bootstrap.min.css',
    'vendor/bootstrap/bootstrap.min.css.map',
    'vendor/bootstrap/bootstrap.min.js',
    'vendor/bootstrap/popper.js',
    'vendor/bootstrap/popper.min.js',
    'vendor/bootstrap/tooltip.js',
    'vendor/bootstrap/css/bootstrap-grid.css',
    'vendor/bootstrap/css/bootstrap-grid.css.map',
    'vendor/bootstrap/css/bootstrap-grid.min.css',
    'vendor/bootstrap/css/bootstrap-grid.min.css.map',
    'vendor/bootstrap/css/bootstrap-reboot.css',
    'vendor/bootstrap/css/bootstrap-reboot.css.map',
    'vendor/bootstrap/css/bootstrap-reboot.min.css',
    'vendor/bootstrap/css/bootstrap-reboot.min.css.map',
    'vendor/bootstrap/css/bootstrap.css',
    'vendor/bootstrap/css/bootstrap.css.map',
    'vendor/bootstrap/css/bootstrap.min.css',
    'vendor/bootstrap/css/bootstrap.min.css.map',
    'vendor/bootstrap/js/bootstrap.bundle.js',
    'vendor/bootstrap/js/bootstrap.bundle.js.map',
    'vendor/bootstrap/js/bootstrap.bundle.min.js',
    'vendor/bootstrap/js/bootstrap.bundle.min.js.map',
    'vendor/bootstrap/js/bootstrap.js',
    'vendor/bootstrap/js/bootstrap.js.map',
    'vendor/bootstrap/js/bootstrap.min.js',
    'vendor/bootstrap/js/bootstrap.min.js.map',
    'vendor/bootstrap/js/popper.js',
    'vendor/bootstrap/js/popper.min.js',
    'vendor/bootstrap/js/tooltip.js',
    'vendor/countdowntime/countdowntime.js',
    'vendor/css-hamburgers/hamburgers.css',
    'vendor/css-hamburgers/hamburgers.min.css',
    'vendor/daterangepicker/daterangepicker.css',
    'vendor/daterangepicker/daterangepicker.js',
    'vendor/daterangepicker/moment.js',
    'vendor/daterangepicker/moment.min.js',
    'vendor/perfect-scrollbar/perfect-scrollbar.css',
    'vendor/perfect-scrollbar/perfect-scrollbar.min.js',
    'fonts/font-awesome-4.7.0/css/font-awesome.css',
    'fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    'fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.eot',
    'fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg',
    'fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf',
    'fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff',
    'fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2',
    'fonts/font-awesome-4.7.0/fonts/FontAwesome.otf',
    'fonts/font-awesome-4.7.0/less/animated.less',
    'fonts/font-awesome-4.7.0/less/bordered-pulled.less',
    'fonts/font-awesome-4.7.0/less/core.less',
    'fonts/font-awesome-4.7.0/less/fixed-width.less',
    'fonts/font-awesome-4.7.0/less/font-awesome.less',
    'fonts/font-awesome-4.7.0/less/icons.less',
    'fonts/font-awesome-4.7.0/less/larger.less',
    'fonts/font-awesome-4.7.0/less/list.less',
    'fonts/font-awesome-4.7.0/less/mixins.less',
    'fonts/font-awesome-4.7.0/less/path.less',
    'fonts/font-awesome-4.7.0/less/rotated-flipped.less',
    'fonts/font-awesome-4.7.0/less/screen-reader.less',
    'fonts/font-awesome-4.7.0/less/stacked.less',
    'fonts/font-awesome-4.7.0/less/variables.less',
    'fonts/font-awesome-4.7.0/scss/font-awesome.scss',
    'fonts/fontawesome/fa-brands-400.eot',
    'fonts/fontawesome/fa-brands-400.svg',
    'fonts/fontawesome/fa-brands-400.ttf',
    'fonts/fontawesome/fa-brands-400.woff',
    'fonts/fontawesome/fa-brands-400.woff2',
    'fonts/fontawesome/fa-light-300.eot',
    'fonts/fontawesome/fa-light-300.svg',
    'fonts/fontawesome/fa-light-300.ttf',
    'fonts/fontawesome/fa-light-300.woff',
    'fonts/fontawesome/fa-light-300.woff2',
    'fonts/fontawesome/fa-regular-400.eot',
    'fonts/fontawesome/fa-regular-400.svg',
    'fonts/fontawesome/fa-regular-400.ttf',
    'fonts/fontawesome/fa-regular-400.woff',
    'fonts/fontawesome/fa-regular-400.woff2',
    'fonts/fontawesome/fa-solid-900.eot',
    'fonts/fontawesome/fa-solid-900.svg',
    'fonts/fontawesome/fa-solid-900.ttf',
    'fonts/fontawesome/fa-solid-900.woff',
    'fonts/fontawesome/fa-solid-900.woff2',
    'fonts/fontawesome/FjallaOne-Regular.ttf',
    'fonts/fontawesome/fontawesome-webfont.eot',
    'fonts/fontawesome/fontawesome-webfont.svg',
    'fonts/fontawesome/fontawesome-webfont.ttf',
    'fonts/fontawesome/fontawesome-webfont.woff',
    'fonts/fontawesome/fontawesome-webfont.woff2',
    'fonts/fontawesome/FontAwesome.otf'
];



self.addEventListener('install', e => {


    const cacheStatic = caches.open(CACHE_ESTATICO).then(cache =>
        cache.addAll(APP_SHELL));

    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));



    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            if (key !== CACHE_ESTATICO && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== CACHE_DINAMICO && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});


/* self.addEventListener('fetch', e => {
    const responseSw = caches.match(e.request).then(respCache => {
        if (respCache) {
            return respCache;
        }
        else {
            fetch(e.request).then(respNetwork => {
                return updateDynamicCache(CACHE_DINAMICO, e.request, respNetwork);
            });
        }

    });
    e.respondWith(responseSw);
}); */

self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  });

// // tareas asíncronas
// self.addEventListener('sync', e => {

//     console.log('SW: Sync');

//     if ( e.tag === 'nuevo-post' ) {

//         // postear a BD cuando hay conexión
//         const respuesta = postearMensajes();

//         e.waitUntil( respuesta );
//     }



// });