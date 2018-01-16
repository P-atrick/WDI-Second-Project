// client side js here
console.log('JS loaded');

$(() => {
  const $map = $('.map');
  let map = null;
  let locations = null;

  function initMap() {
    const latLng = { lat: 51.515213, lng: -0.072331 };
    map = new google.maps.Map($map.get(0), {
      center: latLng,
      zoom: 14
    });
  }

  if ($('.show-attraction').length !== 0) {
    initMap();
  }


  if ($('.add-attraction').length !== 0) {
    var input = document.getElementById('autocomplete');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }
});
