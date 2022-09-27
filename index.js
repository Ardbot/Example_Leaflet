var start_point = [50.253313, 127.8073497]

// Создаем пустую карту, . 
var map = L.map('map', { // Используется библиотека Leaflet
  minZoom: 10, // Минимальный масштаб карты (min 0) (действует на всю карту) https://wiki.openstreetmap.org/wiki/RU:Zoom_levels
  maxZoom: 20// Максимальный мастштаб (max >=21) (действует на всю карту)
}).setView(start_point, 13); // Устанавливаем на старте центральную точку и масштаб (13)

// Подключение базовых слоев (подложек)

// Подключение OSM (базовый слой/BaseLayer)
var tiles_OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // WMS сервис. z-высота слоя; x-долгота; y- широта. (s-номер сервера)
  opacity: 1.0, // Прозрачность базового слоя
  attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 0, // Минимальный масштаб карты (min 0)
  maxZoom: 19 // Максимальный масштаб карты (max =19)
}).addTo(map) // Добавляем на карту.

// Выводит текущий зум
map.on('zoomend', function () {
  $("#zoom").text(map.getZoom())
});