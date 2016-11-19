$(function() {
  var $photo = $('#photo');
  var $overlay = $('#overlay');

  $(window).on('scroll', function() {
    var offset = window.scrollY;

    $photo.css('filter', 'blur(' + (offset / 250) + 'px)');
    $overlay.css('opacity', offset / 7500);
  });

  $('nav a').on('click', function() {
    var target = $($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top + 1,
    }, 500);
  });
});
