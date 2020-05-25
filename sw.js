importScripts('js/sw-utils.js');


const CACHE_ESTATICO    = 'ITK-cache-estatico-v1';
const CACHE_DINAMICO   = 'ITK-cache-dinamico-v1';
const CACHE_INMUTABLE = 'ITK-cache-inmutable-v1';


const APP_SHELL = [
    // '/',
    'index.html',

    //-----------------Imagenes
    'img/ITK.png',
    'img/ITK_ico.png',
    'img/ITK_logo.png',
    'img/ITK__.png',
    'img/favicon.png',
    'img/Icon.psd',
    'img/logo_italika.png',
    'img/bodegaaurrera.png',
    'img/chedraui.png',
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

    //-----------------estilos
    'css/main.css',
    'css/arbol_navegacion.css',
    'css/estilosheader.css',
    'css/util.css',
    //'css/base/datatables.min.css',
    'css/base/estilosheader.css',
    'css/base/estilos_generalesbasic.css',
    'css/base/reset.css',
    'vendor/bootstrap/css/bootstrap.css',
    //'css/base/font-awesome.css',
    //'css/base/font-roboto.css',
    //'css/base/fonts.css',
    //'css/base/menu.css',
    //'css/base/modales.css',
    //'css/particular/admEvePreO.css',
    //'css/particular/admobjetivos.css',
    //'css/particular/catalogos.css',
    //'css/particular/datepicker-ITKEKT-calendario.css',
    //'css/particular/modales.css',
    //'css/particular/style.css',

    //-----------------JS
    'js/login.js',
    'js/BD/tbTiendas.js',
    'js/maps.js',
    'js/base/jquery-3.3.1.min.js',
    'js/base/funciones.js',
    'vendor/pouchdb/pouchdb-7.1.1.min.js',
    'vendor/bootstrap/js/bootstrap.js',
    'js/template.js',
    'js/arbol_navegacion.js',
    'js/app.js',
    'js/sw-utils.js',

    //-----------------Paginas
     'usuarioocontraseña.html',
     'pages/ArbolNavegacion.html',
     'pages/MapaAutoServicios.html' 
];

const APP_SHELL_INMUTABLE = [
    'vendor/jquery/jquery-3.2.1.min.js',
    'vendor/mdtoast/mdtoast.min.js',
    'vendor/mdtoast/mdtoast.min.css'
];



self.addEventListener('install', e => {


    const cacheStatic = caches.open( CACHE_ESTATICO ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( CACHE_INMUTABLE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));



    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== CACHE_ESTATICO && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== CACHE_DINAMICO && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});


self.addEventListener('fetch', e => { 
    const responseSw =  caches.match(e.request).then( respCache => {
        if(respCache){
            return respCache;
        }
        else
        {
            fetch(e.request).then(respNetwork => {
                return updateDynamicCache(CACHE_DINAMICO, e.request, respNetwork);
            });
        }

    }); 
    e.respondWith(responseSw);
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