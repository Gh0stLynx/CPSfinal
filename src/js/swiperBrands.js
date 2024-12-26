const swiperContainer = document.querySelector('.swiper')

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth

  if (windowWidth >= 768) {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 'auto',
      //spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
