    $(document).ready(function(){
      $('.carousel').carousel();
    });
        
    $(document).ready(function(){
      $('.parallax').parallax();
    });
        
// Scripts for rows.html

$('.animate-on-mouseenter').on('mouseenter', function() {
	$(this).toggleClass("animated fadeIn");
}).on('mouseleave', function() {
  $(this).toggleClass("animated fadeIn");
});