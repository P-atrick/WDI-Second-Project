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
    image: 'https://i.imgur.com/Qio0q4K.jpg',
    description: 'Old building',
    rating: 5,
    category: 'History',
    address: {
      line1: 'Tower of London',
      line2: 'London',
      postcode: 'EC3N 4AB',
      lat: 51.5081124,
      lng: -0.078138
    }
  }, {
    placeName: 'British Museum',
    website: 'http://www.britishmuseum.org/',
    image: 'https://i.imgur.com/Q4wQB2J.jpg',
    description: 'Museum about Britain',
    rating: 4,
    category: 'Museum',
    address: {
      line1: 'Great Russell St',
      line2: 'London',
      postcode: 'WC1B 3DG',
      lat: 51.5194133,
      lng: -0.1291453
    }
  }, {
    placeName: 'National Gallery',
    website: 'http://www.nationalgallery.org.uk/',
    image: 'https://i.imgur.com/ozhI3ND.jpg',
    description: 'The National Gallery',
    rating: 3,
    category: 'Art',
    address: {
      line1: 'Trafalgar Square',
      line2: 'London',
      postcode: 'WC2N 5DN',
      lat: 51.508929,
      lng: -0.1304877
    }
  }, {
    placeName: 'St.James Park',
    website: 'https://www.royalparks.org.uk/parks/st-jamess-park',
    image: 'https://i.imgur.com/08HHq1X.jpg',
    description: 'Large Park',
    rating: 4,
    category: 'Nature',
    address: {
      line1: 'Horse Guards Road',
      line2: 'London',
      postcode: 'SW1A 2BJ',
      lat: 51.5024597,
      lng: -0.1369996
    }
  }, {
    placeName: 'Tower Bridge',
    website: 'http://www.towerbridge.org.uk/',
    image: 'https://i.imgur.com/VNO9wT1.jpg',
    description: 'Bridge',
    rating: 5,
    category: 'Architecture',
    address: {
      line1: 'Tower Bridge Road',
      line2: 'London',
      postcode: 'SE1 2UP',
      lat: 51.5081124,
      lng: -0.078138
    }
  }])
  .then((attractions) => console.log(`${attractions.length} attractions created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
