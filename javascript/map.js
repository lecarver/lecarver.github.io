function webmap() {
//Adjust map screen control to allow full screen plugin
    var mymap = L.map('mapid',{zoomControl: false});

    //Geocoder
    // var options = {
    //   key: geocoder_api_key,
    //   limit: 10
    // };
    // var control = L.control.openCageSearch(options).addTo(mymap);

    //Setting up basemap
    //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    //     maxZoom: 18,
    //     id: 'mapbox/dark-v10',
    //     accessToken: mapbox_access_token,
    // }).addTo(mymap);
    //L.tileLayer('https://tile.openstreetmap.org/5/30/10.png', {}).addTo(mymap);
    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    	subdomains: 'abcd',
    	minZoom: 1,
    	maxZoom: 20,
    	ext: 'png',
      noWrap: true
    }).addTo(mymap);

    //SEVEN WONDERS OF THE WORLD -- with custom icons
    var tj = L.icon({
      iconUrl: '../lecarver.github.io/images/tajmah.png',
      iconSize:[45, 45], // size of the icon
    });
    var taj_mahal = L.marker([27.174961, 78.042385], {icon: tj}).addTo(mymap);
    taj_mahal.bindPopup("<h3>India's Taj Mahal</h3> \
    <img src = '../lecarver.github.io/images/taj_mahal.jpg', width = '250px'/> \
    <p>The Taj Mahal is an Islamic ivory-white marble mausoleum on the right \
    bank of the river Yamuna in the Indian city of Agra. It was commissioned in \
    1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of \
    his favourite wife, Mumtaz Mahal. It was designated a UNESCO World Heritage \
    Site in 1983.</p>").openPopup();
    taj_mahal.on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
    var wall = L.icon({
      iconUrl: '../lecarver.github.io/images/gwall.png',
      iconSize:[45, 45], // size of the icon
    });
    var great_wall = L.marker([40.334245, 116.477652], {icon: wall}).addTo(mymap);
    great_wall.bindPopup("<h3>Great Wall of China</h3> \
    <img src = '../lecarver.github.io/images/great_wall.jpg', width = '250px'/> \
    <p>The Great Wall of China is a collection of foritifications built by several \
    ruling states in China from arou 771-221 BC. The walls were connected by \
    Win Shi Huang, the first emperor of the Qin dynasty, to protect against invasion \
    by nomads from central Asia. </p>").openPopup();
    great_wall.on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
    var pet = L.icon({
      iconUrl: '../lecarver.github.io/images/petra.png',
      iconSize:[45, 45], // size of the icon
    });
    var petra = L.marker([30.328611, 35.441944], {icon: pet}).addTo(mymap);
    petra.bindPopup("<h3> Jordan's Petra </h3> \
    <img src = '../lecarver.github.io/images/petra.jpg', width = '250px'/> \
    <p>Petra is a city of hand-hewn caves, temples,tombs, and even a theatre that \
    could fit more than 3000 people all carved from pink sandstone in Jordan around 2,000 years ago. \
    It is estimated that only 15% of the city has been uncovered to date and it \
    was made a UNESCO World Heritage Site in 1985.").openPopup();
    petra.on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
    var chrst = L.icon({
      iconUrl: '../lecarver.github.io/images/christ.png',
      iconSize:[45, 45], // size of the icon
    });
    var christ = L.marker([-22.951389, -43.2108334], {icon: chrst}).addTo(mymap);
    christ.bindPopup("<strong> Brazil's statue of Christ the Redeemer </strong>").openPopup();
    christ.on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
    var mp = L.icon({
      iconUrl: '../lecarver.github.io/images/macpic.png',
      iconSize:[45, 45], // size of the icon
    });
    var machu_picchu = L.marker([-13.163056, -72.545556], {icon: mp}).addTo(mymap);
    machu_picchu .bindPopup("<strong> Peru's Machu Picchu </strong>").openPopup();
    machu_picchu .on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
    var ci = L.icon({
      iconUrl: '../lecarver.github.io/images/chitz.png',
      iconSize:[45, 45], // size of the icon
    });
    var chichen_itza = L.marker([20.682778, -88.569167], {icon: ci}).addTo(mymap);
    chichen_itza.bindPopup("<strong> Mexico's Chichen Itza pyramid </strong>").openPopup();
    chichen_itza.on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
    var colo = L.icon({
      iconUrl: '../lecarver.github.io/images/colo.png',
      iconSize:[45, 45], // size of the icon
    });
    var colosseum = L.marker([41.890169, 12.492269], {icon: colo}).addTo(mymap);
    colosseum.bindPopup("<strong> Rome'a Colosseum </strong>").openPopup();
    colosseum.on('click', function(e){
      mymap.setView(e.latlng, 14);
    });
  //Add mini-map plugin to the map
  var worldMiniMap = L.control.worldMiniMap({position: 'bottomright', style: {opacity: 0.9, borderRadius: '0px', backgroundColor: '#90B77D'}}).addTo(mymap);

  //Add coordinates plugin to the map
  var c = new L.Control.Coordinates();
  c.addTo(mymap);
  mymap.on('click', function(e) {
  	c.setCoordinates(e);
  });

  //Add Homescreen button
  var zoomHome = L.Control.zoomHome({position: 'topleft'});
  zoomHome.setHomeCoordinates([0,0])
  zoomHome.setHomeZoom(2)
  zoomHome.addTo(mymap);

  //Add credit button to link back to website
  var credctrl = L.controlCredits({
    image: "../lecarver.github.io/images/profile-pic-small.jpg",
    link: "https://lecarver.github.io/",
    text: "Check out my website here!"
  }).addTo(mymap);

  //   //Adding a new marker + popup
  //   var marker = L.marker([51.5, -0.09]).addTo(mymap);
  //   marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  //   marker.on('click', function(e){
  //     mymap.setView(e.latlng, 14);
  //   });
  //
  //   //Draw circle object + popup
  //   var circle = L.circle([51.508, -0.11], {
  //   color: 'red',
  //   fillColor: '#f03',
  //   fillOpacity: 0.5,
  //   radius: 500
  // }).addTo(mymap);
  //   circle.bindPopup("I am a circle.");
  //   circle.on('click', function(e){
  //     mymap.setView(e.latlng, 13);
  //   });
  //
  //   //Draw polygon object + popup
  //   var polygon = L.polygon([
  //   [51.509, -0.08],
  //   [51.503, -0.06],
  //   [51.51, -0.047]], {
  //   }).addTo(mymap);
  //   polygon.bindPopup("I am a polygon.");
  //   polygon.on('click', function(e){
  //     mymap.setView(e.latlng, 13);
  //   });
  //
  //   //Draw polyline
  //   var polyline = L.polyline([
  //     [51.506, -0.08],
  //     [51.502, -0.06],
  //     [51.507, -0.047]
  //   ]).addTo(mymap);

    var ZoomViewer = L.Control.extend({
      onAdd: function(){
        var gauge = L.DomUtil.create('div');
        gauge.style.width = '200px';
        gauge.style.background = 'rgba(255, 255, 255, 0.5)';
        gauge.style.textAlign = "left";
        mymap.on('zoomstart zoom zoomend', function(ev){
          gauge.innerHTML = 'Zoom level:' + mymap.getZoom();
        })
        return gauge;
      }
    });

    (new ZoomViewer).addTo(mymap);
    mymap.setView([0, 0], 1);
}
