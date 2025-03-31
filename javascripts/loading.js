// загрузка страницы 3 секунды, потом открывается контент, загрузка пропадает
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 3000);
  });