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


// ––– Testimonial Carousel ––– //

class CarouselCreator {
  constructor(carouselData) {
    // create carousel holder
    this.carouselDiv = document.createElement('div');
    this.carouselDiv.classList.add('carousel');
    // create buttons
    this.carouselLeftButton = document.createElement('div');
    this.carouselDiv.appendChild(this.carouselLeftButton);
    this.carouselLeftButton.classList.add('left-button');
    this.carouselLeftButton.textContent = '<';
    this.carouselRightButton = document.createElement('div');
    this.carouselDiv.appendChild(this.carouselRightButton);
    this.carouselRightButton.classList.add('right-button');
    this.carouselRightButton.textContent = '>';
    // add eventListeners to buttons
    this.carouselLeftButton.addEventListener('click', () => this.leftClick());
    this.carouselRightButton.addEventListener('click', () => this.rightClick());

    // create carousel items from sub-class CarouselContent
    // and append each item to carouselDiv
    // NOTE: `new CarouselContent(item)` returns an object
    carouselData.forEach(item => {
      let child = new CarouselContent(item);
      this.carouselDiv.appendChild(child['carouselImage']);
      this.carouselDiv.appendChild(child['carouselCaption']);
    });

    // create counter to track index as user moves through carouselContentList
    this.currentIndex = 0;
  }
  makeContentLists() {
    // create NodeList of carousel images
    this.carouselImageList = document.querySelectorAll('.carousel-image');
    // create NodeList of carousel captions
    this.carouselCaptionList = document.querySelectorAll('.carousel-caption');
  }
  leftClick() {
    // if carousel is at beginning of content list, loop back to end of list
    if (this.currentIndex === 0) {
      this.currentIndex = this.carouselImageList.length - 1;
    } else {
      this.currentIndex -= 1;
    }
    return this.clickHandler();
  }
  rightClick() {
    // if carousel is at end of content list, loop back to beginning of list
    if (this.currentIndex == this.carouselImageList.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    return this.clickHandler();
  }
  clickHandler() {
    if (!this.carouselImageList) {
      this.makeContentLists();
    };
    // hide all images
    this.carouselImageList.forEach(image => image.style.display = 'none');
    // hide all captions
    this.carouselCaptionList.forEach(caption => caption.style.display = 'none');
    // show current image
    this.carouselImageList[this.currentIndex].style.display = 'block';
    // show current caption
    this.carouselCaptionList[this.currentIndex].style.display = 'block';
  }
}

class CarouselContent {
  constructor(contentData) {
    this.carouselImage = document.createElement('img');
    this.carouselImage.classList.add('carousel-image');
    this.carouselImage.src = contentData.imgSrc;
    // ––– Captions ––– (remove or customize, as needed) ––– //
    // create caption holder
    this.carouselCaption = document.createElement('div');
    this.carouselCaption.classList.add('carousel-caption');
    // Customize Caption ––– testimonials for Fit Me
    this.testimonialName = document.createElement('p');
    this.carouselCaption.appendChild(this.testimonialName);
    this.testimonialName.classList.add('testimonial-name');
    this.testimonialName.textContent = contentData.name;
    this.testimonialUserSince = document.createElement('p');
    this.carouselCaption.appendChild(this.testimonialUserSince);
    this.testimonialUserSince.classList.add('testimonial-user-since');
    this.testimonialUserSince.textContent = contentData.userSince;
    this.testimonialWorkoutStyle = document.createElement('p');
    this.carouselCaption.appendChild(this.testimonialWorkoutStyle);
    this.testimonialWorkoutStyle.classList.add('testimonial-workout-style');
    this.testimonialWorkoutStyle.textContent = contentData.workoutStyle;
    this.testimonialQuote = document.createElement('p');
    this.carouselCaption.appendChild(this.testimonialQuote);
    this.testimonialQuote.classList.add('testimonial-quote');
    this.testimonialQuote.textContent = contentData.quote;
  }
}

// ––– Testimonial Data ––– //
const testimonials = [
  {name: 'Susan B', userSince: new Date('January 15, 2018'), workoutStyle: 'Interval Training', imgSrc: './images/scott-webb-22420-unsplash.jpg', quote: 'I just LOVE how easy it is to complete my interval workouts – with two taps, you\'ve logged your interval, and you\'re onto the next one. You never lose your flow.'},
  {name: 'Todd F', userSince: new Date('February 13, 2018'), workoutStyle: 'Body Weight', imgSrc: './images/rawpixel-1064349-unsplash.jpg', quote: 'Other workout apps don\'t care about people who use body weight to workout, like me. They make you create custom exercises for everything – even pushups. But FIT ME doesn\'t. They are ready to go with a TON of built-in exercises.'},
  {name: 'Julian A', userSince: new Date('March 25, 2018'), workoutStyle: 'Interval Training', imgSrc: './images/trust-tru-katsande-592915-unsplash.jpg', quote: 'I workout to stay in shape – I don\'t know about the technical details about macronutrients and carb loading. FIT ME is perfect for my needs. Keeps me motivated toward improving my performance, both for this week and for the long-term. I\'ve never felt better.'},
  {name: 'Celina M', userSince: new Date('July 3, 2017'), workoutStyle: 'Professional', imgSrc: './images/alora-griffiths-781444-unsplash.jpg', quote: 'My workouts are my job. I know I need to see results, and I don\'t want a ton of fuss to track them. So I use FIT ME to keep me in line and to analyze my performance. It couldn\'t be easier.'},
  {name: 'Ophelia Q', userSince: new Date('December 15, 2017'), workoutStyle: 'Professional', imgSrc: './images/geert-pieters-535211-unsplash.jpg', quote: 'I\'m a professional fitness instructor, and I always encourage my clients to use FIT ME to track their progress. It comes built-in with exercises and machines to fit any of my diverse clients\' needs, so I bet it\'ll be a perfect fit for you, too.'}
];

// create carousel with testimonial data
const testimonialCarousel = new CarouselCreator(testimonials);
// get section wrapper from HTML
let carouselWrapper = document.getElementById('four');
// append carousel to section wrapper
// NOTE: `testimonialCarousel` is an object
carouselWrapper.appendChild(testimonialCarousel['carouselDiv']);
// kick things off – display the first item in carouselContentList
testimonialCarousel.clickHandler();
