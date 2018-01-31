
$(document).ready(function() {

      //smooth scroll
      $('a').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function() {
            window.location.hash = hash;
          });
        }
      });


      //slick slider
      $('.slider').slick({
        dots : true,
        autoplay : true,
        arrows : false
      });



      //modal
      $('.modal-btn').on('click', function() {
        var modal = $(this).data('modal');
        $(modal).show();
      });

      $('.modall').on('click', function(e) {
        var className = e.target.className;
        if(className === 'modall' || className === 'modal-close') {
          $(this).closest('.modall').hide();
        }
      });


});
