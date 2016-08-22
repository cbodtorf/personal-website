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
      var ctx = document.getElementById("myChart");

      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
              labels: ["HTML", "ANGULAR", "CSS", "SASS", "JAVASCRIPT", "NODE", "JQUERY", "GULP"],
              datasets: [
                {
                    label: "Mastery",
                    backgroundColor: "rgba(144, 255, 194, 0.3)",
                    borderColor: "rgba(144, 255, 194, 1)",
                    pointBackgroundColor: "rgba(144, 255, 194, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(144, 255, 194, 1)",
                    data: [90, 75, 90, 80, 80, 55, 70, 80]
                },
                {
                    label: "Experience",
                    backgroundColor: "rgba(167, 107, 204, 0.3)",
                    borderColor: "rgba(167, 107, 204, 1)",
                    pointBackgroundColor: "rgba(167, 107, 204, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(167, 107, 204, 1)",
                    data: [80, 60, 80, 70, 75, 40, 50, 65]
                }
            ]
          },
          options: {
                  scale: {
                      ticks: {
                          beginAtZero: true
                      }
                  }
          }
      });
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
