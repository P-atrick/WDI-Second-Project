// client side js here
console.log('JS loaded');

$(() => {
  const $map = $('.map');
  let map = null;
  let locations = null;

  const $lat = $('#lat-lng').attr('data-lat');
  const $lng = $('#lat-lng').attr('data-lng');

  function initMap() {
    const latLng = { lat: parseFloat($lat), lng: parseFloat($lng) };
    map = new google.maps.Map($map.get(0), {
      center: latLng,
      zoom: 14
    });
  }

  //On show attraction page
  if ($('.show-attraction').length !== 0) {
    initMap();
    console.log($lat, $lng);

  }

  //On new attraction page
  if ($('.add-attraction').length !== 0) {
    var input = document.getElementById('autocomplete');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }
});
