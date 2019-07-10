/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();
console.debug(active_section.attr("id"))
			var active_link = $('#nav-wrap a[href="#' + ((active_section.attr("id") === 'howItWorks') ? 'howItWorksAnchor' : active_section.attr("id")) + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 3000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


     particlesJS("particles-js", {
         particles: {
             number: { value: 53, density: { enable: true, value_area: 800 } },
             color: { value: "#bbb000" },
             shape: {
                 type: "star",
                 stroke: { width: 0, color: "#ffffff" },
                 polygon: { nb_sides: 5 },
             },
             opacity: {
                 value: 1,
                 random: true,
                 anim: {
                     enable: false,
                     speed: 1,
                     opacity_min: 0.5116086437498474,
                     sync: false
                 }
             },
             size: {
                 value: 8.017060304327615,
                 random: true,
                 anim: {
                     enable: true,
                     speed: 2.4362316369040355,
                     size_min: 0.1,
                     sync: false
                 }
             },
             line_linked: {
                 enable: true,
                 distance: 150,
                 color: "#5864b9",
                 opacity: 0.6734330655635196,
                 width: 0.8017060304327615
             },
             move: {
                 enable: true,
                 speed: 6,
                 direction: "none",
                 random: true,
                 straight: false,
                 out_mode: "bounce",
                 bounce: false,
                 attract: { enable: false, rotateX: 600, rotateY: 1200 }
             }
         },
         interactivity: {
             detect_on: "canvas",
             events: {
                 onhover: { enable: true, mode: "grab" },
                 onclick: { enable: true, mode: "push" },
                 resize: true
             },
             modes: {
                 grab: { distance: 231.44200550588337, line_linked: { opacity: 1 } },
                 bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                 repulse: { distance: 64.96617698410762, duration: 0.4 },
                 push: { particles_nb: 4 },
                 remove: { particles_nb: 2 }
             }
         },
         retina_detect: true
     });
     var update;
     update = function() {
         requestAnimationFrame(update);
     };
     requestAnimationFrame(update);

 });








