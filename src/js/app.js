// client side js here
console.log('JS loaded');

$(() => {
  const $map = $('.map');
  let map = null;
  let locations = null;

  const $lat = $('#lat-lng').attr('data-lat');
  const $lng = $('#lat-lng').attr('data-lng');
  const latLng = { lat: parseFloat($lat), lng: parseFloat($lng) };


  function initMap() {
    map = new google.maps.Map($map.get(0), {
      center: latLng,
      zoom: 14
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'Hello World!'
    });
  }


  //On show attraction page
  if ($('.show-attraction').length !== 0) {
    initMap();
  }

  //On new attraction page
  if ($('.add-attraction').length !== 0) {
    var input = document.getElementById('autocomplete');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }
});
