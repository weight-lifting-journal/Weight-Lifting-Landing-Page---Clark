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


// ––– Testimonial Data ––– //
const testimonials = [
  {name: 'Susan B', userSince: new Date('January 15, 2018'), workoutStyle: 'Interval Training', photoSrc: './images/fit-me-logo.png', quote: 'I just LOVE how easy it is to complete my interval workouts – with two taps, you\'ve logged your interval, and you\'re onto the next one. You never lose your flow.'},
  {name: 'Todd F', userSince: new Date('February 13, 2018'), workoutStyle: 'Body Weight', photoSrc: './images/fit-me-logo.png', quote: 'Other workout apps don\'t care about people who use body weight to workout, like me. They make you create custom exercises for everything – even pushups. But FIT ME doesn\'t. They are ready to go with a TON of built-in exercises.'},
  {name: 'Julian A', userSince: new Date('March 25, 2018'), workoutStyle: 'Interval Training', photoSrc: './images/fit-me-logo.png', quote: 'I workout to stay in shape – I don\'t know about the technical details about macronutrients and carb loading. FIT ME is perfect for my needs. Keeps me motivated toward improving my performance, both for this week and for the long-term. I\'ve never felt better.'},
  {name: 'Celina M', userSince: new Date('July 3, 2017'), workoutStyle: 'Professional', photoSrc: './images/fit-me-logo.png', quote: 'My workouts are my job. I know I need to see results, and I don\'t want a ton of fuss to track them. So I use FIT ME to keep me in line and to analyze my performance. It couldn\'t be easier.'},
  {name: 'Ophelia Q', userSince: new Date('December 15, 2017'), workoutStyle: 'Professional', photoSrc: './images/fit-me-logo.png', quote: 'I\'m a professional fitness instructor, and I always encourage my clients to use FIT ME to track their progress. It comes built-in with exercises and machines to fit any of my diverse clients\' needs, so I bet it\'ll be a perfect fit for you, too.'}
]

// ––– Testimonial Carousel ––– //
class Carousel {
  constructor(carousel) {
      this.carousel = carousel;
      console.log('class', this.carousel);
      // get your buttons
      this.leftButton = this.carousel.getElementsByClassName('left-button')['0'];
      this.rightButton = this.carousel.getElementsByClassName('right-button')['0'];
      // add eventListeners to buttons
      this.leftButton.addEventListener('click', () => this.leftClick());
      this.rightButton.addEventListener('click', () => this.rightClick());
      // get your images
      this.imagesList = this.carousel.querySelectorAll('img');
      // current index
      this.currentIndex = 0;
      this.clickHandler();
  }
  leftClick() {
      if (this.currentIndex === 0) {
          this.currentIndex = this.imagesList.length - 1;
      } else {
          this.currentIndex -= 1;
      }
      console.log(this.currentIndex);
      return this.clickHandler();
  }
  rightClick() {
      if (this.currentIndex == this.imagesList.length - 1) {
          this.currentIndex = 0;
      } else {
          this.currentIndex += 1;
      }
      console.log(this.currentIndex);
      return this.clickHandler();
  }
  clickHandler() {
      this.imagesList.forEach(image => image.style.display = 'none');
      this.imagesList[this.currentIndex].style.display = 'block';
  }
}

let carouselWrapper = document.getElementsByClassName('carousel-wrapper')['0'];
let carousel = document.getElementsByClassName('carousel')['0'];
carousel = new Carousel(carousel);