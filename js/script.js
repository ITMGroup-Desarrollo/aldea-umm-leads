  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    effect: 'slide', // o 'fade', 'cube', 'coverflow', 'flip'
  });
  const features = document.querySelectorAll('.feature');

  features.forEach((feature) => {
    feature.addEventListener('mouseenter', () => {
      features.forEach((f) => f.classList.remove('active'));
      feature.classList.add('active');
    });
  });

  document.querySelector('.features-container').addEventListener('mouseleave', () => {
    features.forEach((f) => f.classList.remove('active'));
  });
