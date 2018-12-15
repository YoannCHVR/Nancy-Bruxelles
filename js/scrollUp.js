/*Variables*/
var $button = $('.button_scrollUp');

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $button.addClass('transform');
    $button.blur();
  } else {
    $button.removeClass('transform');
  }
});

$button.on('click', function() {
  TweenLite.to(window, 1 //set the speed
    , {
      scrollTo: {
        y: 0
      }, //set the y offset
      ease: Expo.easeInOut //set the ease
    });
});