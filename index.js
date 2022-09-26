var start_point = [50.253313, 127.8073497]

// Создаем пустую карту, . 
var map = L.map('map', { // Используется библиотека Leaflet
  minZoom: 10, // Минимальный масштаб карты (min 0) (действует неа всю карту)
  maxZoom: 20 // Максимальный мастштаб (max >=21) (действует неа всю карту)
}).setView(start_point, 13); // Устанавливаем на старте центральную точку и масштаб (13)

// Подключение базовых слоев (подложек)

// Подключение OSM
var tiles_OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // WMS сервис
  opacity: 1.0, // Прозрачность подложки
  attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 0, // Минимальный масштаб карты (min 0)
  maxZoom: 20
}).addTo(map) // Добавляем на карту.