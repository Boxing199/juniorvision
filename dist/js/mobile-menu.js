/*
var toggleBox = document.getElementsByClassName('.mobile-menu');

document.getElementsByClassName('.menu-toggle').click = function() {
  if (toggleBox.ClassName === ".open") {
    toggleBox.classList.remove(".open");
  }
  else {
    toggleBox.classList.add(".open");
  }
};
*/
$(document).ready(function() {
  $(".menu-toggle").click(function() {	
  $(".mobile-menu").toggle(0, 1);	
  });	
  	
});