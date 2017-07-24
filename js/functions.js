window.onload = function() {
  (function($){
    $("body").addClass("ready");
    
    var count = 0;

    function timer(timerVal) {
      count = count+1;
      if (count >= timerVal) {
        clearInterval(counter);
        $(".progress").empty().text("Completed");
        return;
      }
      $(".progress").text(count+'%')
    }
    var counter = setInterval(timer, 100, 100);
    
    
    
  })(jQuery);
}

document.addEventListener("DOMContentLoaded", function(event) {
  function is_touch_device() {
    return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    }
  var pHtml = document.getElementsByTagName( 'html' )[0];
  if (!is_touch_device()) {
    pHtml.setAttribute( 'class', 'no-touch' );
  }
  else {
    pHtml.setAttribute( 'class', 'touch' );
  }

});
