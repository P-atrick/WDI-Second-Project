// client side js here
console.log('JS loaded');

$(() => {
  const $map = $('.map');
  let map = null;
  let locations = null;
  let autocomplete = null;

  const $lat = $('#lat-lng').attr('data-lat');
  const $lng = $('#lat-lng').attr('data-lng');
  const latLng = { lat: parseFloat($lat), lng: parseFloat($lng) };
  const $placeName = $('#placeName');
  const $address = $('#address');
  const $website = $('#website');
  const $newLat = $('#lat');
  const $newLng = $('#lng');


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

  function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete($('#autocomplete').get(0));
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    var place = autocomplete.getPlace();
    console.log(place);
    $placeName.val(place.name);
    $address.val(place.formatted_address)
    $website.val(place.website);
    $newLat.val(place.geometry.location.lat());
    $newLng.val(place.geometry.location.lng());
  }

  //On show attraction page
  if ($('.show-attraction').length !== 0) initMap();

  //On new attraction page
  if ($('.add-attraction').length !== 0) initAutocomplete();
});
