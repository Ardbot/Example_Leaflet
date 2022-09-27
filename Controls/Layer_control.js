// Управление слоями (Control.Layers). Document: https://leafletjs.com/reference.html#control-layers

// Слои добавляются через папку "layers" методом "Geojson" (Other Layers\GeoJSON.js)

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
layer_control = L.control.layers(baseLayers).addTo(map)


// Раскрыть или свернуть список слоев
$('#expand').click(function () {
  if ($('#expand').is(':checked')) {
    layer_control.expand()  // Раскрыть список слоев
  }
  else {
    layer_control.collapse()  // Свернуть список слоев
  }
})

$('.leaflet-control-layers').on('keydown',function () {
  console.log('123456');
})


//////----------------Добавляем базовый слой--------------------//////
function add_base_layer(layer, name = 'Базовый слой') {
  layer_control.addBaseLayer(layer, name)
}
// Обработка кнопки добавления базового слоя
$("#add_base_layer").on("click", function () {
  add_base_layer(graph, "База")
})


//////----------------Добавляем надслой--------------------//////
function add_over_layer(layer, name = 'Слой карты') {
  layer_control.addOverlay(layer, name)
}
// Обработка кнопки добавления надслоя
$("#add_over_layer").on("click", function () {
  add_over_layer(graph, "Название слоя")
})


//////----------------Удаляем слой--------------------//////
function del_layer(layer) {
  layer_control.removeLayer(layer)
}
// Обработка кнопки удаления слоя
$("#del_layer").on("click", function () {
  del_layer(graph)
})


//////----------------Выводит в консоль местоположение элемента--------------------//////
console.log(layer_control.getPosition()); // Положение элемента ==> topright


//////----------------Выводит в консоль HTML разметку элемента--------------------//////
console.log(layer_control.getContainer());  // ==> "<div class="leaflet-control-layers..."


//////----------------Устанавливает положение группы слоёв вверху слева--------------------//////
$("#set_topleft").on("click", function () {
  layer_control.setPosition("topleft")  // Возможно: topleft, topright, bottomleft, bottomright
})


//////----------------Удаляет инструмент работы со слоями--------------------//////
$("#remove_layer").on("click", function () {
  layer_control.remove()  // Удалит элемент
})


//////----------------Возвращает элемент на карту--------------------//////
$("#add_layer").on("click", function () {
  layer_control.addTo(map) // отрисовка элемента
})



