const { dbURI } = require('../config/environment');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

const Attraction = require('../models/attraction');

Attraction.collection.drop();

Attraction
  .create([{
    placeName: 'Tower of London',
    website: 'https://www.hrp.org.uk/tower-of-london/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Tower_of_London_White_Tower.jpg/300px-Tower_of_London_White_Tower.jpg',
    description: 'Old building',
    rating: 5,
    category: 'History',
    address: {
      line1: 'Tower of London',
      line2: 'London',
      postcode: 'EC3N 4AB'
    },
    latLng: '51.5081124,-0.078138'
  }, {
    placeName: 'British Museum',
    website: 'http://www.britishmuseum.org/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/British_Museum_from_NE_2.JPG/220px-British_Museum_from_NE_2.JPG',
    description: 'Museum about Britain',
    rating: 4,
    category: 'Museum',
    address: {
      line1: 'Great Russell St',
      line2: 'London',
      postcode: 'WC1B 3DG'
    },
    latLng: '51.5194133,-0.1291453'
  }])
  .then((attractions) => console.log(`${attractions.length} attraction created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
