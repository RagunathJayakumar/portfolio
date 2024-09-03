

var navbar = document.getElementById("side-nav_icon");
var navitem = document.getElementById("side-nav");
var closing = document.getElementById("closing");
var navLinks = document.querySelectorAll(".itemds li a"); 


navbar.addEventListener("click", function() {
    navitem.style.right = "0";
});


closing.addEventListener("click", function() {
    navitem.style.right = "-50%";
});


navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navitem.style.right = "-50%";
    });
});



