
var toggleBox = document.getElementById('mobile-menu'),
    toggleMenu = document.getElementById('menu-toggle');

  toggleMenu.addEventListener("click", function() {
    toggleBox.classList.toggle("open");
});
