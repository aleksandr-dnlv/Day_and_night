document.addEventListener('DOMContentLoaded', function() {
// Конфигурация элементов, которые меняются при смене темы
const themeElements = {
    moon: document.querySelector('.moon img'),
    body: document.body,
    moonBg: document.querySelector('.moon__background'),
    mapTitles: document.querySelectorAll('.map-title'),
    mapTexts: document.querySelectorAll('.map-overlay-text'),
    labels: document.querySelectorAll('label'),
    textareaBg: document.querySelector('.bgimage'),
    textareaBgMobile: document.querySelector('.bgimage_mobile'),
    textImages: {
        desktop: [
            document.querySelector('.text1 img'),
            document.querySelector('.text2 img'),
            document.querySelector('.text3 img')
        ],
        mobile: [
            document.querySelector('.text1_mobile img'),
            document.querySelector('.text2_mobile img'),
            document.querySelector('.text3_mobile img')
        ]
    },
    switchers: document.querySelectorAll('.switches img'),
    hieroglyphs: document.querySelector('img.template-image[src="images/hieroglyphs_black.png"]'),
    fieldBgs: document.querySelectorAll('img.fieldbg[src="images/game_black.png"]'),
    gameFields: document.querySelectorAll('img.gamefield[src="images/field_black.svg"]'),
    mapEvents: document.querySelectorAll('img.map-event[src="images/MapEventBlack.png"]'),
    restartButtons: {
        desktop: document.querySelector('.restart img[src="images/restart_black.png"]'),
        mobile: document.querySelector('.restart_mobile img[src="images/restart_black.png"]')
    },
    hieroglyphBorders: document.querySelectorAll('.hieroglyphs-border'),
    masterClassTitles: document.querySelectorAll('.mc-title'),
    restartContainers: {
        desktop: document.querySelectorAll('.restart'),
        mobile: document.querySelectorAll('.restart_mobile')
    },
    footerHeadings: document.querySelectorAll('.footer h2'),
    invertFilter: document.getElementById('invert'),
    invert: document.getElementById('invert'),
    clickSound: document.getElementById('themeclick'),
    titles: document.querySelectorAll('.title'),
    titleText: document.querySelector('.title h1'),
    descriptions: [
        document.querySelector('.description1'),
        document.querySelector('.description2'),
        document.querySelector('.description3')
    ],
    descriptionsDay: [
        document.querySelector('.description1_day'),
        document.querySelector('.description2_day'),
        document.querySelector('.description3_day')
    ],
    descriptionsMobile: [
        document.querySelector('.description1_mobile'),
        document.querySelector('.description2_mobile'),
        document.querySelector('.description3_mobile')
    ],
    descriptionsDayMobile: [
        document.querySelector('.description1day_mobile'),
        document.querySelector('.description2day_mobile'),
        document.querySelector('.description3day_mobile')
    ]
};
// Текста для карты мероприятий
const mapTexts = {
    dark: ['Послания ночи', 'Линии', 'Звуки и знаки'],
    light: ['Библиотека', 'Лекторий', 'Пленэр']
};
// Громкость звука клика на луну
if (themeElements.clickSound) {
    themeElements.clickSound.volume = 0.1;
}
// Конфиг для темной темы
const darkThemeSettings = {
    bodyBg: 'black',
    moonBg: "url('images/bg_night.png')",
    moonImg: 'images/moon_night.png',
    textareaBg: 'images/textareablack.png',
    textareaBgMobile: 'images/textareablack_mobile.png',
    textImages: {
        desktop: [
            'images/textarea1.svg',
            'images/textarea2.svg',
            'images/textarea3.svg'
        ],
        mobile: [
            'images/textarea1_mobile.svg',
            'images/textarea2_mobile.svg',
            'images/textarea3_mobile.svg'
        ]
    },
    hieroglyphs: 'images/hieroglyphs_black.png',
    restartImg: 'images/restart_black.png',
    fieldBg: 'images/game_black.png',
    gameField: 'images/field_black.svg',
    mapEvent: 'images/MapEventBlack.png',
    borderColor: 'white',
    textColor: 'white',
    switcherImg: 'images/fishka_black.png',
    invertValue: '0',
    titleColor: 'black',
    titleBg: 'white',
    titleText: 'БЕЛЫМ ПО ЧЕРНОМУ',
    invertTransform: 'scaleX(-1)',
    descriptionDisplay: 'block',
    descriptionDayDisplay: 'none',
    descriptionMobileDisplay: 'block',
    descriptionDayMobileDisplay: 'none'
};
// Конфиг для светлой темы
const lightThemeSettings = {
    bodyBg: 'white',
    moonBg: "url('images/bg_day.png')",
    moonImg: 'images/moon_day.png',
    textareaBg: 'images/textareawhite.png',
    textareaBgMobile: 'images/textareawhite_mobile.png',
    textImages: {
        desktop: [
            'images/textarea1_day.svg',
            'images/textarea2_day.svg',
            'images/textarea3_day.svg'
        ],
        mobile: [
            'images/textarea1_mobile_day.svg',
            'images/textarea2_mobile_day.svg',
            'images/textarea3_mobile_day.svg'
        ]
    },
    hieroglyphs: 'images/hieroglyphs_white.png',
    restartImg: 'images/restart_white.png',
    fieldBg: 'images/game_white.png',
    gameField: 'images/field_white.svg',
    mapEvent: 'images/MapEventWhite.png',
    borderColor: 'black',
    textColor: 'black',
    switcherImg: 'images/fishka_white.png',
    invertValue: '100',
    titleColor: 'white',
    titleBg: 'black',
    titleText: 'ЧЕРНЫМ ПО БЕЛОМУ',
    invertTransform: 'scaleX(1)',
    descriptionDisplay: 'none',
    descriptionDayDisplay: 'block',
    descriptionMobileDisplay: 'none',
    descriptionDayMobileDisplay: 'block'
};
// Функция для определения мобильного для смены бг луны
function isMobile() {
    return window.innerWidth < 768;
}
// Применение стилей темы
function applyTheme(theme) {
    const settings = theme === 'dark' ? darkThemeSettings : lightThemeSettings;
    const mapTextContent = mapTexts[theme];
    
    themeElements.body.style.backgroundColor = settings.bodyBg;
    
    if (themeElements.moonBg) {
        if (isMobile()) {
            themeElements.moonBg.style.backgroundImage = 
                theme === 'dark' 
                    ? "url('images/bg_night_mobile.png')" 
                    : "url('images/bg_day_mobile.png')";
        } else {
            themeElements.moonBg.style.backgroundImage = settings.moonBg;
        }
    }
    
    if (themeElements.moon) themeElements.moon.src = settings.moonImg;
    if (themeElements.textareaBg) themeElements.textareaBg.src = settings.textareaBg;
    if (themeElements.textareaBgMobile) themeElements.textareaBgMobile.src = settings.textareaBgMobile;
    
    settings.textImages.desktop.forEach((src, i) => {
        if (themeElements.textImages.desktop[i]) {
            themeElements.textImages.desktop[i].src = src;
        }
    });
    
    settings.textImages.mobile.forEach((src, i) => {
        if (themeElements.textImages.mobile[i]) {
            themeElements.textImages.mobile[i].src = src;
        }
    });
    
    if (themeElements.hieroglyphs) themeElements.hieroglyphs.src = settings.hieroglyphs;
    if (themeElements.restartButtons.desktop) themeElements.restartButtons.desktop.src = settings.restartImg;
    if (themeElements.restartButtons.mobile) themeElements.restartButtons.mobile.src = settings.restartImg;
    
    themeElements.fieldBgs.forEach(el => el.src = settings.fieldBg);
    themeElements.gameFields.forEach(el => el.src = settings.gameField);
    themeElements.mapEvents.forEach(el => el.src = settings.mapEvent);
    themeElements.switchers.forEach(el => el.src = settings.switcherImg);
    themeElements.hieroglyphBorders.forEach(el => el.style.border = `0.15vw solid ${settings.borderColor}`);
    
    themeElements.restartContainers.desktop.forEach(el => {
        el.style.borderTop = `0.15vw solid ${settings.borderColor}`;
        el.style.borderLeft = `0.15vw solid ${settings.borderColor}`;
    });
    
    themeElements.restartContainers.mobile.forEach(el => {
        el.style.borderTop = `0.15vw solid ${settings.borderColor}`;
        el.style.borderRight = `0.15vw solid ${settings.borderColor}`;
    });
    
    themeElements.mapTitles.forEach(el => el.style.color = settings.textColor);
    
    themeElements.mapTexts.forEach((el, i) => {
        el.style.color = settings.textColor;
        el.textContent = mapTextContent[i] || el.textContent;
    });
    
    themeElements.labels.forEach(el => el.style.color = settings.textColor);
    themeElements.masterClassTitles.forEach(el => el.style.color = settings.textColor);
    themeElements.footerHeadings.forEach(el => el.style.color = settings.textColor);
    
    // Применяем стили для заголовка
    themeElements.titles.forEach(el => {
        el.style.backgroundColor = settings.titleBg;
        el.style.color = settings.titleColor;
    });
    
    // Меняем текст заголовка
    if (themeElements.titleText) {
        themeElements.titleText.textContent = settings.titleText;
    }

    if (themeElements.invertFilter) {
        themeElements.invertFilter.value = settings.invertValue;
        themeElements.invertFilter.dispatchEvent(new Event('input'));
    }
    
    if (themeElements.invert) {
        themeElements.invert.style.transform = settings.invertTransform;
    }
    
    themeElements.descriptions.forEach(el => {
        if (el) el.style.display = settings.descriptionDisplay;
    });
    
    themeElements.descriptionsDay.forEach(el => {
        if (el) el.style.display = settings.descriptionDayDisplay;
    });
    
    themeElements.descriptionsMobile.forEach(el => {
        if (el) el.style.display = settings.descriptionMobileDisplay;
    });
    
    themeElements.descriptionsDayMobile.forEach(el => {
        if (el) el.style.display = settings.descriptionDayMobileDisplay;
    });
    
    updateRangeStyles(theme);
    localStorage.setItem('theme', theme);
    updateFooterTheme();
}
// Обновление стилей ползунков (отдельно т.к это вебкиты)
function updateRangeStyles(theme) {
    const styleId = 'range-styles';
    let oldStyle = document.getElementById(styleId);
    
    if (oldStyle) {
        document.head.removeChild(oldStyle);
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    
    const bgColor = theme === 'dark' ? 'white' : 'black';
    style.textContent = `
        input[type="range"] {
            background-color: ${bgColor};
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: ${bgColor};
        }
    `;
    document.head.appendChild(style);
}
// Обработчик изменения размера окна
function handleResize() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);
    checkScreenSize();
}
// Переключение темы
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    
    if (themeElements.clickSound) {
        themeElements.clickSound.currentTime = 0;
        themeElements.clickSound.play();
    }
}
// Обработчик изменения темы
function handleStorageChange(e) {
    if (e.key === 'theme') {
        applyTheme(e.newValue);
    }
}

// ФУТЕР. НАВЕДЕНИЕ, АНИМАЦИЯ ДЛЯ МОБИЛЬНОГО
const footer = document.querySelector('.footer');
const footerColumns = document.querySelector('.footer-columns');
const originalFooterTexts = document.querySelectorAll('.footer-columns h2:not(.hidden)');
let animationInterval = null;

const footerLogo = document.createElement('img');
footerLogo.alt = 'logo';
footerLogo.className = 'logo hidden';

const footerName = document.createElement('h2');
footerName.innerHTML = 'Данилов<br>Александр';
footerName.className = 'hidden';

footerColumns.insertBefore(footerLogo, footerColumns.children[1]);
footerColumns.appendChild(footerName);

// Обновление темы футера
function updateFooterTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    footerLogo.src = theme === 'dark' ? 'images/LogoBlack.svg' : 'images/LogoWhite.svg';
    footerName.style.color = theme === 'dark' ? 'white' : 'black';
}
// Анимация для мобильных устройств
function startMobileAnimation() {
    let isOriginalVisible = false;
    
    return setInterval(() => {
        isOriginalVisible = !isOriginalVisible;
        
        if (isOriginalVisible) {
            originalFooterTexts.forEach(el => el.classList.remove('hidden'));
            footerLogo.classList.add('hidden');
            footerName.classList.add('hidden');
        } else {
            originalFooterTexts.forEach(el => el.classList.add('hidden'));
            footerLogo.classList.remove('hidden');
            footerName.classList.remove('hidden');
        }
    }, 1000);
}
// Проверка размера экрана
function checkScreenSize() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile && !animationInterval) {
        originalFooterTexts.forEach(el => el.classList.add('hidden'));
        footerLogo.classList.remove('hidden');
        footerName.classList.remove('hidden');
        animationInterval = startMobileAnimation();
    } else if (!isMobile && animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
        originalFooterTexts.forEach(el => el.classList.remove('hidden'));
        footerLogo.classList.add('hidden');
        footerName.classList.add('hidden');
    }
}
// Инициализация темы
function initTheme() {
    const defaultTheme = 'dark';
    const currentTheme = localStorage.getItem('theme') || defaultTheme;
    
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', defaultTheme);
    }
    
    applyTheme(currentTheme);
}
// Обработчики событий для футера
function handleFooterHover(showLogo) {
    if (window.innerWidth >= 768) {
        originalFooterTexts.forEach(el => el.classList.toggle('hidden', showLogo));
        footerLogo.classList.toggle('hidden', !showLogo);
        footerName.classList.toggle('hidden', !showLogo);
    }
}
if (themeElements.moon) {
    themeElements.moon.addEventListener('click', toggleTheme);
}
window.addEventListener('storage', handleStorageChange);
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', handleResize);
footer.addEventListener('mouseenter', () => handleFooterHover(true));
footer.addEventListener('mouseleave', () => handleFooterHover(false));
initTheme();
});