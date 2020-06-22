jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(300);
    $("a.tran").click(function(event) {
      event.preventDefault();
      hrefLocation = this.href;
      $("body").fadeOut(300, redPage);
    });
 
    function redPage() {
      window.location = hrefLocation;
    }
});