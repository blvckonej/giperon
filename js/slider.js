// const swiper = new Swiper('.slider-block', {
//     slidesPerView: 1,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
// });

// const sliderNavItems = document.querySelectorAll('.product__page-slider_item');

// sliderNavItems.forEach((el, index) => {
//     el.setAttribute('data-index', index + 1);
//     el.addEventListener('click', (e) => {
//         const index = parseInt(e.currentTarget.dataset.index);
//         console.log(index)
//         swiper.slideTo(index)
//     })
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });