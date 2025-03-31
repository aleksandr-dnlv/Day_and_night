document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.template-image');
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const restartBtn = document.querySelector('.restart');
    const restartMobileBtn = document.querySelector('.restart_mobile');

    // Конфигурация кисточки для рисования
    const CONFIG = {
        lineWidth: {
            mobile: 5,
            desktop: 16
        },
        initDelay: 50,
        theme: {
            dark: '#ffffff',
            light: '#000000'
        }
    };

    // Состояние рисования
    const drawingState = {
        isDrawing: false,
        lastX: 0,
        lastY: 0
    };

    // Получение цвета рисования на основе темы
    function getDrawingColor() {
        const theme = localStorage.getItem('theme') || 'dark';
        return CONFIG.theme[theme];
    }

    // Обновление стиля рисования при смене темы
    function updateDrawingStyle() {
        ctx.strokeStyle = getDrawingColor();
    }

    // Очистка холста
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Инициализация холста
    function initCanvas() {
        if (!img.naturalWidth || !img.offsetWidth || !img.offsetHeight) {
            requestAnimationFrame(initCanvas);
            return;
        }
        
        canvas.width = img.offsetWidth;
        canvas.height = img.offsetHeight;
        updateDrawingStyle();
        ctx.lineWidth = window.innerWidth < 768 ? CONFIG.lineWidth.mobile : CONFIG.lineWidth.desktop;
        ctx.lineCap = 'round';
    }

    // Получение позиции курсора/касания
    function getPosition(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.type.includes('touch') 
            ? (e.touches[0] || e.changedTouches[0]).clientX 
            : e.clientX;
        const clientY = e.type.includes('touch') 
            ? (e.touches[0] || e.changedTouches[0]).clientY 
            : e.clientY;
        
        return [
            clientX - rect.left,
            clientY - rect.top
        ];
    }

    // Обработчики рисования
    function startDrawing(e) {
        drawingState.isDrawing = true;
        [drawingState.lastX, drawingState.lastY] = getPosition(e);
    }

    function draw(e) {
        if (!drawingState.isDrawing) return;
        const [x, y] = getPosition(e);
        ctx.beginPath();
        ctx.moveTo(drawingState.lastX, drawingState.lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [drawingState.lastX, drawingState.lastY] = [x, y];
    }

    function stopDrawing() {
        drawingState.isDrawing = false;
    }

    // Обработчик изменения темы
    function handleThemeChange(e) {
        if (e.key === 'theme') {
            updateDrawingStyle();
        }
    }

    // Установка обработчиков событий
    function setupEventListeners() {
        // Кнопка сброса
        const handleRestart = (e) => {
            if (e.type === 'touchend') e.preventDefault();
            clearCanvas();
        };

        restartBtn.addEventListener('click', handleRestart);
        restartBtn.addEventListener('touchend', handleRestart);

        if (restartMobileBtn) {
            restartMobileBtn.addEventListener('click', handleRestart);
            restartMobileBtn.addEventListener('touchend', handleRestart);
        }

        // Рисование мышью
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        // Рисование касанием
        const handleTouch = (e) => {
            e.preventDefault();
            if (e.type === 'touchstart') startDrawing(e);
            else if (e.type === 'touchmove') draw(e);
            else stopDrawing();
        };

        canvas.addEventListener('touchstart', handleTouch);
        canvas.addEventListener('touchmove', handleTouch);
        canvas.addEventListener('touchend', handleTouch);

        // Изменение темы
        window.addEventListener('storage', handleThemeChange);
        
        // Добавляем кастомное событие для смены темы (если используется в вашем основном скрипте)
        document.addEventListener('themeChanged', updateDrawingStyle);
    }

    // Запуск инициализации
    function startInitialization() {
        if (img.complete) {
            setTimeout(initCanvas, CONFIG.initDelay);
        } else {
            img.addEventListener('load', () => setTimeout(initCanvas, CONFIG.initDelay));
        }
    }

    setupEventListeners();
    startInitialization();
});