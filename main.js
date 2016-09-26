/*******************************
* PERSONAL WEBSITE AND PORTFOLIO
* 8-16-2016
* Caleb Bodtorf
********************************/


(function(){
  /*******************************
  * LOAD
  ********************************/

  window.addEventListener('load', function() {
    app.init();

  })

  var app = {

    /*******************************
    * Initialize events and styles
    ********************************/
    init: function() {

      app.events();
      app.styles();
    },

    /*******************************
    * STYLES
    ********************************/
    styles: function() {

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.5, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth * 2, window.innerHeight * 2 );
      renderer.domElement.classList.add('parallax', 'parallax__layer', 'three-bkg');

      var parLayer = document.querySelector('.parallax');
      parLayer.appendChild( renderer.domElement );

      var geometry = new THREE.OctahedronGeometry( 5,6 );
      var material = new THREE.MeshDepthMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading, wireframe: true} );
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      camera.position.z = 2;

      function render() {
      	requestAnimationFrame( render );
        cube.rotation.x += 0.0001;
        cube.rotation.y += 0.0001;
      	renderer.render( scene, camera );
      }
      render();

    },

    /*******************************
    * EVENTS
    ********************************/
    events: function() {

      /*******************************
      * Browser tab action [change img, url, tab focus]
      ********************************/
      var addy = document.getElementById('addressBar');
      var webImgs = Array.from(document.querySelectorAll('.web-img'));
      var tabs  = Array.from(document.querySelectorAll('.tab'));

      tabs.forEach(handleClick);

      function handleClick(e,i) {
          e.addEventListener('click', function(){

              // remove active from all tabs
              //
              tabs.forEach(function(el,i){
                el.classList.remove('active');
              })

              // remove active from all images
              //
              webImgs.forEach(function(el,i){
                  el.classList.remove('active-img');

                  // matches clicked tab with proper image based on data-id
                  // .active-img { display: block }
                  //
                  if(el.dataset.id === e.dataset.id) {
                    el.classList.add('active-img');
                  }
              })

              // changes address bar (anchor tag) href and textContent to match img
              // .active { highlights active tab styling }
              //
              addy.textContent = e.dataset.id;
              addy.href = e.dataset.id;
              e.classList.add('active');
          })
      }



    },

  }

  /*******************************
  * END
  ********************************/
})()
