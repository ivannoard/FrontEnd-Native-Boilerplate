// Navbar Responsive
const navMenu = document.getElementById('navmenu');
const navClose = document.getElementById('navclose');
const navToggle = document.getElementById('navtoggle');

if (navToggle) {
  navMenu.classList.add('show-menu'); //make your own css class or use this name
} else {
  navMenu.classList.remove('show-menu'); //make your own css class or use this name
}

// Close NavMenu when NavLink clicked
const navLinks = document.querySelectorAll('.nav-link');
function closeMenu() {
  navMenu.classList.remove('show-menu'); //make your own css class or use this name
}
navLinks.forEach(navLink => navLink.addEventListener('click', closeMenu));

// Scroll Header will create a box shadow when pageYOffset is greater than 50
function scrollHeader() {
  const header = document.getElementById('header');
  if (scrollY >= 50) {
    header.classList.add('shadow-box'); //make your own css class or use this name
  } else {
    header.classList.remove('shadow-box'); //make your own css class or use this name
  }
}
window.addEventListener('scroll', scrollHeader);
