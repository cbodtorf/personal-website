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

    },

    /*******************************
    * EVENTS
    ********************************/
    events: function() {

      /*******************************
      * Browser tab action [change img, url, tab focus]
      ********************************/
      var addy = document.getElementById('addressBar');
      var webImg = document.getElementById('webImg');
      var tabs  = Array.from(document.querySelectorAll('.tab'));

      tabs.forEach(handleClick);

      function handleClick(e,i) {
        e.addEventListener('click', function(){

          tabs.forEach(function(e,i){
            e.classList.remove('active');
          })
          webImg.src = e.dataset.img;
          addy.value = e.dataset.id;
          e.classList.add('active');
          console.log(e);
        })
      }



    },

  }

  /*******************************
  * END
  ********************************/
})()
