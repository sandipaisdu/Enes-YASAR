$(document).ready(function() {

      $("#owl-demo").owlCarousel({
        items : 3,
        lazyLoad : true,
        navigation : true,
        navigationText : ["<i class='fa fa-chevron-left left_owl'>","<i class='fa fa-chevron-right right_owl'>"],
      });


      $('.carousel').carousel({
		  interval: 3000
		})

    });