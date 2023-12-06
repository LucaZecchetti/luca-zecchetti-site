window.addEventListener('scroll', function() {
    //add to the navbar a class when it goes over another specific class and removes it when it goes out
    var navbar = document.querySelector('.navbar');
    var otherClass = document.querySelector('.content-container');
    var navbarPosition = navbar.getBoundingClientRect();
    var otherClassPosition = otherClass.getBoundingClientRect();
    if (navbarPosition.bottom >= otherClassPosition.top) {
      navbar.classList.add('scrolled-past');
    } else {
      navbar.classList.remove('scrolled-past');
    }
});
  