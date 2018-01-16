// client side js here
console.log('JS loaded');

$(() => {
  const $map = $('.map');
  let map = null;
  let locations = null;

  initMap();

  function initMap() {
    const latLng = { lat: 51.515213, lng: -0.072331 };
    map = new google.maps.Map($map.get(0), {
      center: latLng,
      zoom: 14
    });
  }
  
  // function init() {
  //   var input = document.getElementById('locationTextField');
  //   var autocomplete = new google.maps.places.Autocomplete(input);
  // }
  // google.maps.event.addDomListener(window, 'load', init);
});
