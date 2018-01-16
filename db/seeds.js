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
    description: 'One of Londons most famous landmarks, the historic Tower houses the Crown Jewels, the prison cell of Sir Walter Raleigh, known as the Bloody Tower, and the Chapel of St. John and the Royal Armories.',
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
    description: 'A museum of the world, for the world. Discover over two million years of human history and culture. Some of the world-famous objects include the Rosetta Stone, the Parthenon sculptures and Egyptian mummies.',
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
    description: 'The National Gallery houses the national collection of paintings in the Western European tradition from the 13th to the 19th centuries. It is on show 361 days a year, free of charge.',
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
    description: 'This 90-acre park, the oldest Royal Park in London, features a large lake that is a wildlife sanctuary for ducks, geese, swans and even pelicans.',
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
    description: 'An iconic London landmark and one of Britains best loved historic sites. Within the Bridges iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world! Enjoy stunning panoramic views across London from our high-level walkways, 42 metres above the River Thames.',
    rating: 5,
    category: 'Architecture',
    address: {
      line1: 'Tower Bridge Road',
      line2: 'London',
      postcode: 'SE1 2UP',
      lat: 51.5054,
      lng: -0.0755235
    }
  }])
  .then((attractions) => console.log(`${attractions.length} attractions created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
