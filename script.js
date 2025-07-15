
const map = L.map('map').setView([43.5, 11], 6);

// Layer base: OpenStreetMap
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Layer base alternativo: CartoDB Positron
const positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
});

// Scelta layer
const baseLayers = {
    "OpenStreetMap": osm,
    "CartoDB Positron": positron
};

// Dati GeoJSON incorporati
const data = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"place": "Sant\u2019Anna di Stazzema", "region": "Tuscany", "date": "1944-08-12", "victims": 560.0, "perpetrators": "SS troops (Walter Reder)", "popup": "<strong>Sant\u2019Anna di Stazzema</strong><br>Date: 1944-08-12<br>Region: Tuscany<br>Victims: 560.0<br>Perpetrators: SS troops (Walter Reder)<br><img src='https://tse3.mm.bing.net/th/id/OIP.5UCxl8RIbHCcG_otdrVdBgHaFW?pid=Api' width='200'>", "highlight": true}, "geometry": {"type": "Point", "coordinates": [10.2978, 43.9703]}}, {"type": "Feature", "properties": {"place": "Marzabotto", "region": "Emilia-Romagna", "date": "1944-09 to 1944-10", "victims": 770.0, "perpetrators": "16th SS Panzergrenadier Division", "popup": "<strong>Marzabotto</strong><br>Date: 1944-09 to 1944-10<br>Region: Emilia-Romagna<br>Victims: 770.0<br>Perpetrators: 16th SS Panzergrenadier Division", "highlight": true}, "geometry": {"type": "Point", "coordinates": [11.1794, 44.3056]}}, {"type": "Feature", "properties": {"place": "Civitella in Val di Chiana", "region": "Tuscany", "date": "1944-06-29", "victims": 244.0, "perpetrators": "Hermann G\u00f6ring Division", "popup": "<strong>Civitella in Val di Chiana</strong><br>Date: 1944-06-29<br>Region: Tuscany<br>Victims: 244.0<br>Perpetrators: Hermann G\u00f6ring Division", "highlight": true}, "geometry": {"type": "Point", "coordinates": [11.7283, 43.3886]}}, {"type": "Feature", "properties": {"place": "San Pietro Infine", "region": "Campania", "date": "1943", "victims": 0, "perpetrators": "German troops during Gustav Line operations", "popup": "<strong>San Pietro Infine</strong><br>Date: 1943<br>Region: Campania<br>Victims: nan<br>Perpetrators: German troops during Gustav Line operations", "highlight": true}, "geometry": {"type": "Point", "coordinates": [13.9875, 41.4544]}}, {"type": "Feature", "properties": {"place": "Boves", "region": "Piedmont", "date": "1943-09-19", "victims": 24.0, "perpetrators": "Waffen-SS (Joachim Peiper)", "popup": "<strong>Boves</strong><br>Date: 1943-09-19<br>Region: Piedmont<br>Victims: 24.0<br>Perpetrators: Waffen-SS (Joachim Peiper)", "highlight": true}, "geometry": {"type": "Point", "coordinates": [7.5511, 44.3089]}}, {"type": "Feature", "properties": {"place": "Vallaura (Castel d\u2019Aiano)", "region": "Emilia-Romagna", "date": "1944-45", "victims": 0, "perpetrators": "German troops", "popup": "<strong>Vallaura (Castel d\u2019Aiano)</strong><br>Date: 1944-45<br>Region: Emilia-Romagna<br>Victims: nan<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [10.9825, 44.2733]}}, {"type": "Feature", "properties": {"place": "Caiazzo", "region": "Campania", "date": "1943-10-13", "victims": 22.0, "perpetrators": "German troops", "popup": "<strong>Caiazzo</strong><br>Date: 1943-10-13<br>Region: Campania<br>Victims: 22.0<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [14.3832, 41.2476]}}, {"type": "Feature", "properties": {"place": "Roccaraso", "region": "Abruzzo", "date": "1943", "victims": 0, "perpetrators": "German troops", "popup": "<strong>Roccaraso</strong><br>Date: 1943<br>Region: Abruzzo<br>Victims: nan<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [14.0736, 41.8192]}}, {"type": "Feature", "properties": {"place": "Gubbio", "region": "Umbria", "date": "1944-06-22", "victims": 0, "perpetrators": "German troops", "popup": "<strong>Gubbio</strong><br>Date: 1944-06-22<br>Region: Umbria<br>Victims: nan<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [12.5735, 43.3471]}}, {"type": "Feature", "properties": {"place": "Forno di Massa", "region": "Tuscany", "date": "1944-06-13", "victims": 0, "perpetrators": "German troops", "popup": "<strong>Forno di Massa</strong><br>Date: 1944-06-13<br>Region: Tuscany<br>Victims: nan<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [10.1406, 44.0708]}}, {"type": "Feature", "properties": {"place": "San Terenzo Monti", "region": "Tuscany", "date": "1944-08-19", "victims": 0, "perpetrators": "German troops", "popup": "<strong>San Terenzo Monti</strong><br>Date: 1944-08-19<br>Region: Tuscany<br>Victims: nan<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [10.0103, 44.2014]}}, {"type": "Feature", "properties": {"place": "Padule di Fucecchio", "region": "Tuscany", "date": "1944-08-23", "victims": 174.0, "perpetrators": "German troops", "popup": "<strong>Padule di Fucecchio</strong><br>Date: 1944-08-23<br>Region: Tuscany<br>Victims: 174.0<br>Perpetrators: German troops", "highlight": false}, "geometry": {"type": "Point", "coordinates": [10.7814, 43.816]}}]};

// Crea i layer
const geoLayer = L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
        const victims = feature.properties.victims || 0;
        const radius = Math.max(5, Math.sqrt(victims));
        const color = feature.properties.highlight ? 'darkred' : 'blue';

        const circle = L.circleMarker(latlng, {
            radius: radius,
            color: color,
            fillColor: color,
            fillOpacity: 0.4,
            weight: 1
        }).addTo(map);

        const centerPoint = L.circleMarker(latlng, {
            radius: 2.5,
            color: 'gray',
            fillColor: 'gray',
            fillOpacity: 1
        }).addTo(map);

        centerPoint.bindPopup(feature.properties.popup);
        return circle;
    }
}).addTo(map);

// Aggiungi il selettore di layer
const overlays = { "Martyr Sites": geoLayer };
L.control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);

// Legenda
const legend = L.control({position: 'bottomleft'});
legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
        <strong>Legend</strong>
        <div><span style="background: darkred"></span> Major massacre sites</div>
        <div><span style="background: blue"></span> Other massacre sites</div>
        <div><span style="background: gray"></span> Clickable point with popup</div>
    `;
    return div;
};
legend.addTo(map);
