const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const databaseURL = 'mongodb://localhost/restful-routing';
mongoose.connect(databaseURL);

const Attraction = require('../models/attraction');

Attraction.collection.drop();

Attraction
  .create([{
    placeName: 'Tower of London',
    website: 'https://www.hrp.org.uk/tower-of-london/',
    image: 'http://cdn.ltstatic.com/2005/February/VI983354_942long.jpg',
    description: 'Tower of London',
    rating: 5,
    category: 'old',
    address: {
      line1: 'Tower of London',
      line2: 'London',
      postcode: 'EC3N 4AB'
    },
    latLng: '51.5081124,-0.078138'
  }])
  .then((attractions) => console.log(`${attractions.length} hotels created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
