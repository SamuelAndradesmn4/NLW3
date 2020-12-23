//tipos de dados:
//String ""
// NUmber 01
// Object {}
// boolean true or false
// Array []


//create map
const map = L.map('mapid').setView([-3.0443101,-60.1071883], 16);
11111111
//create and add tilelayer

L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create incon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


//Create PopUp overlay
const popup = L.popup({
    closeButton: false,
    className:'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanege"> <img src="./public/images/arrow-white.svg"></a>')

//create and add marker
L
    .marker([-3.0443101,-60.1071883], {icon})
    .addTo(map)
    .bindPopup(popup)