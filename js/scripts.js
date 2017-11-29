(function($) {
  "use strict";

  // Learn More button toggle
  $('.solution button').on("click", function() {
    $(this).closest('.solution').addClass('open');
  });
  // Close Button
  $('.solution .close').on("click", function() {
    $(this).closest('.solution').removeClass('open');
  });
  // Small Managers Button toggle
  $('button.small-managers').on("click", function() {
    $('.solution .items ul').removeClass('open');
    $('.solution .back button').removeClass('active');
    $(this).addClass('active');
    $('#small-managers').addClass('open');
  });
  // Enterprise Managers toggle
  $('button.enterprise-managers').on("click", function() {
    $('.solution .items ul').removeClass('open');
    $('.solution .back .toggles button').removeClass('active');
    $(this).addClass('active');
    $('#enterprise-managers').addClass('open');
  });
  // Video Popup
  $('.video-popup').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade'
  });

  // Parallax Scroll
  if ($(window).width() > 767) {
    var s = skrollr.init({
      edgeStrategy: 'set',
      easing: {
        inverted: function(p) {
          return 1 - p;
        }
      }
    });
  }

  // Smooth Scroll

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000 );
        }
      }
    });

  var sectionSolutionsHeader = new Waypoint({
    element: $('#section-solutions h2'),
    handler: function(direction) {
      $(this.element).addClass('viewed');
    },
    offset: '80%'
  });

  var sectionSolutions = new Waypoint({
    element: $('#section-solutions .solutions'),
    handler: function(direction) {
      $(this.element).addClass('viewed');
    },
    offset: '80%'
  });

  var sectionPriciplesHeader = new Waypoint({
    element: $('#section-principles > h2'),

    handler: function(direction) {
      $(this.element).addClass('viewed');
    },
    offset: '80%'
  });

  var sectionPriciples = new Waypoint({
    element: $('.principles'),

    handler: function(direction) {
      $(this.element).addClass('viewed');
    },
    offset: '80%'
  });

  var sectionRequest = new Waypoint({
    element: document.getElementById('request'),
    handler: function(direction) {
      $('#request').addClass('viewed');
    },
    offset: '80%'
  });


})(jQuery);
