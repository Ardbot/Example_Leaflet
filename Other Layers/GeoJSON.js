//  Подгружает векторные данные (GeoJSON)  Document: https://leafletjs.com/reference.html#geojson
// YouTube:

// Добавляем векторные слои (shp-файлы)

// Контура полей (fields)
var field = L.geoJson(field, { // Данные из файла "field.js" папки "layers"
    onEachFeature: function (feature, lyr) {
        let text_html = '<div><h3>Поле №' + feature.properties.Name + '</h3><h4> Площадь: ' + feature.properties.area + ' га' // Выводим ярлык с номером поля (можно HTML)
        lyr.bindPopup(text_html);
        //   lyr.bindTooltip("Поле №: "+ feature.properties.Name).openTooltip(); // Выводится ярлык при наведении
    },
    style: {    // Стиль отображения слоя
        "color": "#0000FF", // Цвет контура
        "weight": 2, // Толщина контура
        "opacity": 0.65, // Прозрачность контура
        "fillColor": "#00ff00", // Заливка полигона
        "fillOpacity": 0.1, // Прозрачность полигона (заливки)
    }
})
//   .addTo(map); // Сразу добавляет слой на карту

// Графы дорог (дороги)
var graph = L.geoJson(graph, { // Данные из файла "graph.js" папки "layers"
    onEachFeature: function (feature, lyr) {
        let text_html = '<div><h3>Дорога №' + feature.properties.name + '</h3>' // Выводим ярлык с номером дороги (можно HTML)
        lyr.bindPopup(text_html);
        // lyr.bindTooltip("Поле №: "+ feature.properties.Name).openTooltip(); // Выводится ярлык при наведении
    },
    style: {    // Стиль отображения слоя
        "color": "#005e00", // Цвет контура
        "weight": 3, // Толщина контура
        "opacity": 0.65, // Прозрачность контура
        // "fillColor": "#00FF00", // Заливка полигона
        "fillOpacity": 0, // Прозрачность полигона (заливки)
    }
})
//   .addTo(map); // Сразу добавляет слой на карту