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
  const $rating = $('#rating');


  function initMap() {
    map = new google.maps.Map($map.get(0), {
      center: latLng,
      zoom: 14,
      styles: [
        {
          "featureType": "road",
          "stylers": [
            {
              "hue": "#5e00ff"
            },
            {
              "saturation": -79
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "saturation": -78
            },
            {
              "hue": "#6600ff"
            },
            {
              "lightness": -47
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "lightness": 22
            }
          ]
        },
        {
          "featureType": "landscape",
          "stylers": [
            {
              "hue": "#6600ff"
            },
            {
              "saturation": -11
            }
          ]
        },
        {},
        {},
        {
          "featureType": "water",
          "stylers": [
            {
              "saturation": -65
            },
            {
              "hue": "#1900ff"
            },
            {
              "lightness": 8
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "weight": 1.3
            },
            {
              "lightness": 30
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "hue": "#5e00ff"
            },
            {
              "saturation": -16
            }
          ]
        },
        {
          "featureType": "transit.line",
          "stylers": [
            {
              "saturation": -72
            }
          ]
        },
        {}
      ]
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }

  //When text in attraction field has changed fill in the new data for that address
  function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete($('#autocomplete').get(0));
    autocomplete.addListener('place_changed', fillInAddress);
  }
  function fillInAddress() {
    var place = autocomplete.getPlace();
    console.log(place);
    $placeName.val(place.name);
    $address.val(place.formatted_address);
    $website.val(place.website);
    $newLat.val(place.geometry.location.lat());
    $newLng.val(place.geometry.location.lng());
    $rating.val(place.rating);
  }

  //On show attraction page
  if ($('.show-attraction').length !== 0) initMap();

  //On new attraction page
  if ($('.add-attraction').length !== 0) initAutocomplete();
});
