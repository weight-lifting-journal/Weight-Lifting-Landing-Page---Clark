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
