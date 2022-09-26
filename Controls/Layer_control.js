// Управление слоями (Control.Layers). Document: https://leafletjs.com/reference.html#control-layers

// Базовые слои (подложка)
var baseLayers = {
    "OpenStreetMap": tiles_OSM
  };
  
  // Слои поверх подложки
  var overlays = {
    "Поля": field,
    // "Дороги": graph
  };
  
  // Выводим панель управления слоями на карту
  layer_control = L.control.layers(baseLayers, overlays).addTo(map)
  

