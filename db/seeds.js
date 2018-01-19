const { dbURI } = require('../config/environment');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

const Attraction = require('../models/attraction');
const User = require('../models/user');

Attraction.collection.drop();
User.collection.drop();

User
  .create({
    firstName: 'Patrick',
    lastName: 'Kelly',
    email: 'patrick.kelly@ga.co',
    password: 'patrick',
    passwordConfirmation: 'patrick'
  })
  .then((user) => {
    return Attraction
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
        createdBy: user
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
        createdBy: user
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
        createdBy: user
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
        createdBy: user
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
        createdBy: user
      }, {
        placeName: 'Houses of Parliament',
        website: 'http://www.parliament.uk/',
        image: 'https://i.imgur.com/numjcXc.jpg',
        description: 'Most of this iconic building was built in the mid-19th century following a devastating fire in 1834. Westminster Hall survived the fire and dates from 1097. Visitors can book tours through the House of Commons and the House of Lords, and are welcome to watch debates and committees when the Houses are sitting.',
        rating: 4.4,
        category: 'Architecture',
        address: 'Palace of Westminster, Westminster, London SW1A 0PW, UK',
        lat: 51.4997381,
        lng: -0.1268353,
        createdBy: user
      }, {
        placeName: 'HMS Belfast',
        website: 'http://www.iwm.org.uk/visits/hms-belfast',
        image: 'https://i.imgur.com/EP4LSLG.jpg',
        description: 'Launched in 1938, this cruiser served in World War II, playing a major role in the sinking of the German battle ship "Scharnhorst" in the Normandy landings.',
        rating: 4.5,
        category: 'History',
        address: 'The Queens Walk, London SE1 2JH, UK',
        lat: 51.506579,
        lng: -0.08138899999994464,
        createdBy: user
      }, {
        placeName: 'Buckingham Palace',
        website: 'https://www.royalcollection.org.uk/visit/the-queens-gallery-buckingham-palace',
        image: 'https://i.imgur.com/4XlYjng.jpg',
        description: 'Buckingham Palace serves as both the office and London residence of Her Majesty The Queen. During a visit to Buckingham Palace, visitors can see the nineteen magnificent State Rooms, which provide the setting for ceremonial occasions and official entertaining.',
        rating: 4.4,
        category: 'History',
        address: 'Buckingham Palace Rd, London, UK',
        lat: 51.4949662,
        lng: -0.14615460000004532,
        createdBy: user
      }, {
        placeName: 'St Pauls Cathedral',
        website: 'http://www.stpauls.co.uk/',
        image: 'https://i.imgur.com/OkcB63S.jpg',
        description: 'Rebuilt by Christopher Wren after the great Fire of 1666, St. Pauls has been the site of many historic state occasions; including Winston Churchills state funeral and the Royal Wedding of Prince Charles and Lady Diana Spencer.',
        rating: 4.5,
        category: 'Architecture',
        address: 'St. Pauls Churchyard, London EC4M 8AD, UK',
        lat: 51.5138453,
        lng: -0.0983506000000034,
        createdBy: user
      }, {
        placeName: 'Sky Garden',
        website: 'https://skygarden.london/',
        image: 'https://i.imgur.com/e9QRFr7.jpg',
        description: 'The famous enlarged glass dome of 20 Fenchurch Street is dedicated to three storeys of exquisitely landscaped public gardens and Londons most exclusive social spaces, including observation decks and an open air terrace. Sky Garden also houses restaurants Darwin Brasserie, Fenchurch Seafood Bar & Grill and Sky Pod Bar.',
        rating: 4.6,
        category: 'Architecture',
        address: '20 Fenchurch St, London EC3M 8AF, UK',
        lat: 51.5110985,
        lng: -0.08363729999996394,
        createdBy: user
      }, {
        placeName: 'Shakespeares Globe Theatre',
        website: 'http://www.shakespearesglobe.com/',
        image: 'https://i.imgur.com/vsE3Rmo.jpg',
        description: 'Shakespeares Globe is a unique international resource dedicated to the exploration of Shakespeares work and the playhouse for which he wrote, through the connected means of performance and education.',
        rating: 4.5,
        category: 'Entertainment',
        address: '21 New Globe Walk, London SE1 9DT, UK',
        lat: 51.508076,
        lng: -0.09719399999994494,
        createdBy: user
      }, {
        placeName: 'Borough Market',
        website: 'http://boroughmarket.org.uk/',
        image: 'https://i.imgur.com/IlHeoL9.jpg',
        description: 'An amazing food market dating back to the 13th century.',
        rating: 4.6,
        category: 'Shopping',
        address: '8 Southwark Street, London SE1 1TL, UK',
        lat: 51.50544,
        lng: -0.09106059999999161,
        createdBy: user
      }])
      .then((attractions) => console.log(`${attractions.length} attractions created`))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
