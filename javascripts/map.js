document.getElementById('trigger-map').classList.add('active');
// Все элементы управления и изображения
const overlayBtn = document.getElementById('trigger-event');
const resetBtn = document.getElementById('trigger-map');
const overlayImage = document.querySelector('.map-event');
const image = document.getElementById('map');
const grayscaleSlider = document.getElementById('grayscale');
const invertSlider = document.getElementById('invert');
const contrastSlider = document.getElementById('contrast');
const overlayTexts = document.querySelectorAll('.map-overlay-text');
const controls = document.querySelector('.controls');

// Обработчик клика по карте мероприятий
overlayBtn.addEventListener('click', function() {
  document.getElementById('trigger-map').classList.remove('active');
  this.classList.add('active');
  overlayImage.style.zIndex = 1;
  overlayImage.classList.add('visible');
  // Показываем названия мероприятий
  overlayTexts.forEach(text => {
    text.style.display = 'block';
  });
  updateControlsVisibility();
});
// Функция для включения и выключения видимости ползунков фильтров
function updateControlsVisibility() {
  if (overlayImage.classList.contains('visible')) {
    controls.style.display = 'none';
  } else {
    controls.style.display = 'flex';
  }
}
// Обработчик клика по кнопке сброса наложения
resetBtn.addEventListener('click', function() {
  document.getElementById('trigger-event').classList.remove('active');
  this.classList.add('active');
  overlayImage.classList.remove('visible');
  
  // Скрываем названия мероприятий
  overlayTexts.forEach(text => {
    text.style.display = 'none';
  });
  // Обновляем видимость ползунков
  overlayImage.addEventListener('transitionend', () => {
    overlayImage.style.zIndex = 0;
    updateControlsVisibility();
  }, { once: true });
  updateControlsVisibility();
});
// Функция для обновления фильтров изображения
function updateFilters() {
  const grayscaleValue = grayscaleSlider.value + '%';
  const invertValue = invertSlider.value + '%';
  const contrastValue = contrastSlider.value + '%';
  image.style.filter = `
    grayscale(${grayscaleValue})
    invert(${invertValue})
    contrast(${contrastValue})
  `;
}
// Обновление фильтров при изменении значений
document.addEventListener('DOMContentLoaded', function() {
  updateFilters();
  updateControlsVisibility();
});
grayscaleSlider.addEventListener('input', updateFilters);
invertSlider.addEventListener('input', updateFilters);
contrastSlider.addEventListener('input', updateFilters);

// Обработчик клика по "Звуки и знаки"
document.querySelector('.map-overlay-text.text_3').addEventListener('click', function() {
  // Изменяем видимость для text1, text2, text3 для десктопа и мобильного
  document.querySelector('.text1').style.display = 'none';
  document.querySelector('.text2').style.display = 'block';
  document.querySelector('.text3').style.display = 'none';

  document.querySelector('.text1_mobile').style.display = 'none';
  document.querySelector('.text2_mobile').style.display = 'block';
  document.querySelector('.text3_mobile').style.display = 'none';

  // Изменяем кнопку активной секции для десктопа и мобильного
  document.querySelector('.switcher1').style.opacity = '0';
  document.querySelector('.switcher2').style.opacity = '1';
  document.querySelector('.switcher3').style.opacity = '0';

  document.querySelector('.switcher1_mobile').style.opacity = '0';
  document.querySelector('.switcher2_mobile').style.opacity = '1';
  document.querySelector('.switcher3_mobile').style.opacity = '0';

  // Прокрутка к textarea 
  document.querySelector('.textarea').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.textarea_mobile').scrollIntoView({ behavior: 'smooth' });
});

// Обработчик клика по "Линии"
document.querySelector('.map-overlay-text.text_2').addEventListener('click', function() {
  // Изменяем видимость для text1, text2, text3 для десктопа и мобильного
  document.querySelector('.text1').style.display = 'none';
  document.querySelector('.text2').style.display = 'none';
  document.querySelector('.text3').style.display = 'block';

  document.querySelector('.text1_mobile').style.display = 'none';
  document.querySelector('.text2_mobile').style.display = 'none';
  document.querySelector('.text3_mobile').style.display = 'block';
  // Изменяем кнопку активной секции для десктопа и мобильного
  document.querySelector('.switcher1').style.opacity = '0';
  document.querySelector('.switcher2').style.opacity = '0';
  document.querySelector('.switcher3').style.opacity = '1';

  document.querySelector('.switcher1_mobile').style.opacity = '0';
  document.querySelector('.switcher2_mobile').style.opacity = '0';
  document.querySelector('.switcher3_mobile').style.opacity = '1';
  // Прокрутка к textarea 
  document.querySelector('.textarea').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.textarea_mobile').scrollIntoView({ behavior: 'smooth' });
});

// Обработчик клика по "Послания ночи"
document.querySelector('.map-overlay-text.text_1').addEventListener('click', function() {
  // Изменяем видимость для text1, text2, text3 для десктопа и мобильного
  document.querySelector('.text1').style.display = 'block';
  document.querySelector('.text2').style.display = 'none';
  document.querySelector('.text3').style.display = 'none';

  document.querySelector('.text1_mobile').style.display = 'block';
  document.querySelector('.text2_mobile').style.display = 'none';
  document.querySelector('.text3_mobile').style.display = 'none';
  // Изменяем кнопку активной секции для десктопа и мобильного
  document.querySelector('.switcher1').style.opacity = '1';
  document.querySelector('.switcher2').style.opacity = '0';
  document.querySelector('.switcher3').style.opacity = '0';

  document.querySelector('.switcher1_mobile').style.opacity = '1';
  document.querySelector('.switcher2_mobile').style.opacity = '0';
  document.querySelector('.switcher3_mobile').style.opacity = '0';
  // Прокрутка к textarea 
  document.querySelector('.textarea').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.textarea_mobile').scrollIntoView({ behavior: 'smooth' });
});