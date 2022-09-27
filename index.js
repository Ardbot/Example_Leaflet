var start_point = [50.253313, 127.8073497]

// Создаем пустую карту, . 
var map = L.map('map', { // Используется библиотека Leaflet
  minZoom: 10, // Минимальный масштаб карты (min 0) (действует неа всю карту)
  // maxZoom: 20 // Максимальный мастштаб (max >=21) (действует неа всю карту)
}).setView(start_point, 13); // Устанавливаем на старте центральную точку и масштаб (13)

// Подключение базовых слоев (подложек)

// Подключение OSM (базовый слой/BaseLayer)
var tiles_OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // WMS сервис. z-высота слоя; x-долгота; y- широта. (s-номер сервера)
  opacity: 1.0, // Прозрачность базового слоя
  attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 0, // Минимальный масштаб карты (min 0)
  // maxZoom: 20 // Максимальный масштаб карты (max >=21)
}).addTo(map) // Добавляем на карту.