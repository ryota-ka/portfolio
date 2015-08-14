'use strict';

$(function() {
  $('#status-bar').find('a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top + 10 }, 500);
  });

  var pad = function(n) {
    if (n < 10) {
      return '0' + n;
    } else {
      return '' + n;
    }
  };

  var getCurrentDatetimeString = function() {
    var d = new Date();
    var yy = d.getFullYear();
    var mm = pad(d.getMonth() + 1);
    var dd = pad(d.getDate());
    var h = pad(d.getHours());
    var m = pad(d.getMinutes());
    var str = ['[', yy, '-', mm, '-', dd, ' ', h, ':', m, ']'].join('');

    return str;
  };

  var $datetime = $('#datetime');

  var updateDatetime = function() {
    var str = getCurrentDatetimeString();
    $datetime.text(str);
  };

  updateDatetime();
  setInterval(updateDatetime, 15000);
});

$(window).keydown(function(e) {
  switch (e.which) {
    case 74: // j
      window.scrollBy(0, 14);
      break;
    case 75: // k
      window.scrollBy(0, -14);
      break;
  }
});
