'use strict';

$(function() {
  $('#status-bar').find('a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 500);
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
