document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт машинки загружен!');
    
    const car = document.querySelector('.car');
    
    if (!car) {
        console.error('Элемент .car не найден!');
        return;
    }
    
    console.log('Машинка найдена:', car);
    
    // Добавляем дорогу
    const road = document.createElement('div');
    road.className = 'road';
    document.body.insertBefore(road, car);
    
    // Функция перезапуска анимации
    function restartAnimation() {
        console.log('Перезапуск анимации...');
        car.style.animation = 'none';
        void car.offsetWidth; // Триггер перерисовки
        car.style.animation = 'drive 3s ease-out forwards';
    }
    
    // Клик для перезапуска
    car.addEventListener('click', restartAnimation);
    
    // Автоматический перезапуск каждые 4 секунды
    setInterval(restartAnimation, 4000);
    
    console.log('✅ Машинка готова! Кликните по ней для перезапуска.');
    console.log('🔄 Анимация автоматически перезапускается каждые 4 секунды');
});