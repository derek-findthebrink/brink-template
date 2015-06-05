(function() {
  console.log('herp');

  $(document).ready(function() {
    return $("#nav-main").sticky({
      topSpacing: 0
    });
  });

  $('.list-hover-show li').hover(function() {
    return $(this).children('.description').css('opacity', 0).slideDown('fast').animate({
      opacity: 1
    }, {
      queue: false,
      duration: 'fast'
    });
  }, function() {
    return $(this).children('.description').css('opacity', 1).slideUp('fast').animate({
      opacity: 0
    }, {
      queue: false,
      duration: 'fast'
    });
  });

}).call(this);
