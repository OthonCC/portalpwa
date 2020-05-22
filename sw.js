importScripts('js/sw-utils.js');


const CACHE_ESTATICO    = 'ITK-cache-estatico-v1';
const CACHE_DINAMICO   = 'ITK-cache-dinamico-v1';
const CACHE_INMUTABLE = 'ITK-cache-inmutable-v1';


const APP_SHELL = [
    // '/',
    'index.html',
    'img/ITK.png',
    'img/ITK_ico.png',
    'img/ITK_logo.png',
    'css/main.css',
    'js/login.js',
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