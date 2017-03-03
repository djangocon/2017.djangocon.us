var myElement = document.querySelector("nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init({
  offset : 200,
});


// init Foundation
$(document).foundation();

// toggle hamburger menu on offcanvas open
$("[data-off-canvas-wrapper]").bind("opened.zf.offcanvas closed.zf.offcanvas", function(e) {
  $(".hamburger").toggleClass("is-active");
});
