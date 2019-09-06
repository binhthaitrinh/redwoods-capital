const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  disableScroll: true, // [5]
  disableFocus: false, // [6]
  awaitCloseAnimation: false, // [7]
  debugMode: true // [8]
});

var button = document.querySelector('.myButton');
button.addEventListener('click', function() {
  MicroModal.show('modal-1');
});

console.log('connected...');
