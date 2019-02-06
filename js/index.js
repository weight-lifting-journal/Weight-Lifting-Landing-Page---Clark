// ––– Sticky Header ––– //
// get nav element
const stickyNav = document.getElementById('header-nav');
// scrollTicking variable to know if `requestAnimationFrame()` has fired
let scrollTicking = false;

function stickyScroll() {
  // Add nav shadow class if scrolled, remove shadow class if not
  if (window.scrollY < 0.45 * window.innerHeight) {
    stickyNav.classList.remove('sticky-header');
  } else {
    stickyNav.classList.add('sticky-header');
  }
}
// create scroll eventListener
window.addEventListener('scroll', function(e) {
    // use `if` conditional to check if `requestAnimationFrame()` has fired
    if (!scrollTicking) {
    window.requestAnimationFrame(function() {
        console.log('scroll tick')
        stickyScroll();
        scrollTicking = false;
    });
    scrollTicking = true;
  } // else, wait for `requestAnimationFrame()` to fire
});


// ––– Menu Display ––– //
// get the nav-menu button
const navMenu = document.getElementById('nav-menu');
// get the menu overlay
const menuOverlay = document.getElementById('menu-overlay');
// add event listener to nav-menu button
navMenu.addEventListener('click', () => menuOverlay.classList.add('display-menu'));
// get menu close button
const menuClose = document.getElementsByClassName('close')['0'];
// add event listener to menu-close button
menuClose.addEventListener('click', () => menuOverlay.classList.remove('display-menu'));
// lightbox effect for menu
// add event listener to menu overlay
menuOverlay.addEventListener('click', () => menuOverlay.classList.remove('display-menu'));