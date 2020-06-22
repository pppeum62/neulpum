/*
jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(800);
    $("a.tran").click(function(event) {
      event.preventDefault();
      hrefLocation = this.href;
      $("body").fadeOut(300, redPage);
    });
 
    function redPage() {
      window.location = hrefLocation;
    }
});
*/

$(document).ready(function() {
    $("body").delay(50).animate({ opacity: 1 }, 800);
});