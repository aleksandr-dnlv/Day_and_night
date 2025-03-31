document.addEventListener('DOMContentLoaded', function() {
    // Щелчок при переключении текстов
    const clickSound = document.getElementById('textareaclick');
    clickSound.volume = 0.1;
    // Все элементы переключателей и текстов (десктоп)
    const switcher1 = document.querySelector('.switcher1');
    const switcher2 = document.querySelector('.switcher2');
    const switcher3 = document.querySelector('.switcher3');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');
    // Все элементы переключателей и текстов (мобилтный)
    const switcher1Mobile = document.querySelector('.switcher1_mobile');
    const switcher2Mobile = document.querySelector('.switcher2_mobile');
    const switcher3Mobile = document.querySelector('.switcher3_mobile');
    const text1Mobile = document.querySelector('.text1_mobile');
    const text2Mobile = document.querySelector('.text2_mobile');
    const text3Mobile = document.querySelector('.text3_mobile');

    function resetAll() {
        // Сброс десктопных элементов
        switcher1.style.opacity = '0';
        switcher2.style.opacity = '0';
        switcher3.style.opacity = '0';
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        
        // Сброс мобильных элементов
        switcher1Mobile.style.opacity = '0';
        switcher2Mobile.style.opacity = '0';
        switcher3Mobile.style.opacity = '0';
        text1Mobile.style.display = 'none';
        text2Mobile.style.display = 'none';
        text3Mobile.style.display = 'none';
    }
    // Общая функция для переключения
    function switchTo(switcher, switcherMobile, text, textMobile) {
        resetAll();
        switcher.style.opacity = '1';
        if (switcherMobile) switcherMobile.style.opacity = '1';
        text.style.display = 'block';
        if (textMobile) textMobile.style.display = 'block';
        clickSound.currentTime = 0;
        clickSound.play();
    }
    // Обработчики для десктопных переключателей
    switcher1.addEventListener('click', function() {
        switchTo(switcher1, switcher1Mobile, text1, text1Mobile);
    });
    switcher2.addEventListener('click', function() {
        switchTo(switcher2, switcher2Mobile, text2, text2Mobile);
    });
    switcher3.addEventListener('click', function() {
        switchTo(switcher3, switcher3Mobile, text3, text3Mobile);
    });
    // Обработчики для мобильных переключателей
    if (switcher1Mobile) {
        switcher1Mobile.addEventListener('click', function() {
            switchTo(switcher1, switcher1Mobile, text1, text1Mobile);
        });
    }
    if (switcher2Mobile) {
        switcher2Mobile.addEventListener('click', function() {
            switchTo(switcher2, switcher2Mobile, text2, text2Mobile);
        });
    }
    if (switcher3Mobile) {
        switcher3Mobile.addEventListener('click', function() {
            switchTo(switcher3, switcher3Mobile, text3, text3Mobile);
        });
    }
    // Инициализация - показ первого переключателя и текста
    switcher1.style.opacity = '1';
    text1.style.display = 'block';
    if (switcher1Mobile) switcher1Mobile.style.opacity = '1';
    if (text1Mobile) text1Mobile.style.display = 'block';
});