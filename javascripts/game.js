document.addEventListener('DOMContentLoaded', function() {
    const checkers = document.querySelectorAll('.checkers img');
    // Обработчки событий для каждой шашки
    checkers.forEach(checker => {
    checker.addEventListener('mousedown', startDrag);
    checker.addEventListener('touchstart', startDragTouch, { passive: false });
    // Берем позиции шашек из цсс
    const style = window.getComputedStyle(checker);
    checker.dataset.originalLeft = style.left;
    checker.dataset.originalTop = style.top;
    });
    let draggedChecker = null;
    let startX, startY, initialLeft, initialTop;
// Функция начала перетаскивания для мышки
function startDrag(e) {
    e.preventDefault();
    draggedChecker = this;
    const style = window.getComputedStyle(draggedChecker);
    initialLeft = parseFloat(style.left);
    initialTop = parseFloat(style.top);
    startX = e.clientX;
    startY = e.clientY;
    draggedChecker.style.zIndex = '100';
    draggedChecker.style.cursor = 'grabbing';
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}
// Функция начала перетаскивания для сенсорных экранов
function startDragTouch(e) {
    e.preventDefault();
    draggedChecker = this;
    const style = window.getComputedStyle(draggedChecker);
    initialLeft = parseFloat(style.left);
    initialTop = parseFloat(style.top);
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    draggedChecker.style.zIndex = '100';
    draggedChecker.style.cursor = 'grabbing';
    document.addEventListener('touchmove', dragTouch, { passive: false });
    document.addEventListener('touchend', stopDragTouch);
}
// Перемещение для мышки
function drag(e) {
    if (!draggedChecker) return;
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    draggedChecker.style.left = `${initialLeft + dx}px`;
    draggedChecker.style.top = `${initialTop + dy}px`;
}
// Перемещения для телефона
function dragTouch(e) {
    if (!draggedChecker) return;
    e.preventDefault();
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    draggedChecker.style.left = `${initialLeft + dx}px`;
    draggedChecker.style.top = `${initialTop + dy}px`;
}
// Завершение перетаскивания для мышки
function stopDrag() {
    if (!draggedChecker) return;
    draggedChecker.style.zIndex = '';
    draggedChecker.style.cursor = 'pointer';
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    draggedChecker = null;
}
// Завершение перетаскивания для телефона
function stopDragTouch() {
    if (!draggedChecker) return;
    draggedChecker.style.zIndex = '';
    draggedChecker.style.cursor = 'pointer';
    document.removeEventListener('touchmove', dragTouch);
    document.removeEventListener('touchend', stopDragTouch);
    draggedChecker = null;
}
});