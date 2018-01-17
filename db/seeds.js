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
    rating: 4.6,
    category: 'History',
    address: '362 Tower Hill, St Katharines & Wapping, London EC3N 4DR, UK',
    lat: 51.508094,
    lng: -0.076119,
    createdBy: '5a5c916e04ee24b55caa98fe'
  }, {
    placeName: 'British Museum',
    website: 'http://www.britishmuseum.org/',
    image: 'https://i.imgur.com/Q4wQB2J.jpg',
    description: 'A museum of the world, for the world. Discover over two million years of human history and culture. Some of the world-famous objects include the Rosetta Stone, the Parthenon sculptures and Egyptian mummies.',
    rating: 4.7,
    category: 'Museum',
    address: 'Great Russell St, Bloomsbury, London WC1B 3DG, UK',
    lat: 51.5192765,
    lng: -0.1269454,
    createdBy: '5a5c916e04ee24b55caa98fe'
  }, {
    placeName: 'National Gallery',
    website: 'http://www.nationalgallery.org.uk/',
    image: 'https://i.imgur.com/ozhI3ND.jpg',
    description: 'The National Gallery houses the national collection of paintings in the Western European tradition from the 13th to the 19th centuries. It is on show 361 days a year, free of charge.',
    rating: 4.7,
    category: 'Art',
    address: 'Trafalgar Square, London WC2N 5DN, UK',
    lat: 51.5089102,
    lng: -0.128466,
    createdBy: '5a5c916e04ee24b55caa98fe'
  }, {
    placeName: 'St.James Park',
    website: 'https://www.royalparks.org.uk/parks/st-jamess-park',
    image: 'https://i.imgur.com/08HHq1X.jpg',
    description: 'This 90-acre park, the oldest Royal Park in London, features a large lake that is a wildlife sanctuary for ducks, geese, swans and even pelicans.',
    rating: 4.7,
    category: 'Nature',
    address: 'Horse Guards Road, London SW1A 2BJ, UK',
    lat: 51.5023845,
    lng: -0.1346359,
    createdBy: '5a5c916e04ee24b55caa98fe'
  }, {
    placeName: 'Tower Bridge',
    website: 'http://www.towerbridge.org.uk/',
    image: 'https://i.imgur.com/VNO9wT1.jpg',
    description: 'An iconic London landmark and one of Britains best loved historic sites. Within the Bridges iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world! Enjoy stunning panoramic views across London from our high-level walkways, 42 metres above the River Thames.',
    rating: 4.7,
    category: 'Architecture',
    address: 'Tower Bridge, London SE1 2AA, UK',
    lat: 51.5055252,
    lng: -0.0754933,
    createdBy: '5a5c916e04ee24b55caa98fe'
  }])
  .then((attractions) => console.log(`${attractions.length} attractions created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
