export const myVariable = 'CPSfinal'

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const swiperContainer = document.querySelector('.swiper-container')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiperSlide = document.querySelectorAll('.swiper-slide')

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth

  if (windowWidth >= 768) {
    swiperContainer.classList.remove('swiper-container')
    swiperWrapper.classList.remove('swiper-wrapper')
    swiperSlide.forEach(function (slide) {
      slide.classList.remove('swiper-slide')
    })
  } else {
    swiperContainer.classList.add('swiper-container')
    swiperWrapper.classList.add('swiper-wrapper')
    swiperSlide.forEach(function (slide) {
      slide.classList.add('swiper-slide')
    })
  }
})
