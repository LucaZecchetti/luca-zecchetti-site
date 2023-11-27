window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var otherClass = document.querySelector('.content-container');
    var navbarPosition = navbar.getBoundingClientRect();
    var otherClassPosition = otherClass.getBoundingClientRect();
    console.log(navbarPosition.bottom+" >= "+otherClassPosition.top,navbarPosition.bottom >= otherClassPosition.top)
    if (navbarPosition.bottom >= otherClassPosition.top) {
      navbar.classList.add('scrolled-past');
    } else {
      navbar.classList.remove('scrolled-past');
    }
  });