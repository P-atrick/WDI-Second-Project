const router = require('express').Router();
const Attraction = require('../models/attraction');
const sessions = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const attractions = require('../controllers/attractions');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/attractions')
  .get(attractions.index)
  .post(attractions.create);

router.route('/attractions/new')
  .post(attractions.new);

router.route('/attractions/:id')
  .get(attractions.show)
  .put(attractions.update)
  .delete(attractions.delete);

router.route('/attractions/:id/edit')
  .get(attractions.edit);
//
// //Index
// router.get('/attractions', (req, res) => {
//   Attraction
//     .find()
//     .exec()
//     .then((attractions) => {
//       res.render('attractions/index', { attractions });
//     })
//     .catch((err) => {
//       res.status(500).render('error', {err});
//     });
// });
//
// //New
// router.get('/attractions/new', (req, res) => res.render('attractions/new'));
//
// //Show
// router.get('/attractions/:id', (req, res) => {
//   Attraction
//     .findById(req.params.id)
//     .exec()
//     .then((attraction) => {
//       if(!attraction) return res.status(404).send('Not found');
//       res.render('attractions/show', {attraction});
//     })
//     .catch((err) => {
//       res.status(500).render('error', {err});
//     });
// });
//
// //Create
// router.post('/attractions', (req, res) => {
//   Attraction
//     .create(req.body)
//     .then(() => {
//       res.redirect('/attractions');
//     })
//     .catch((err) => {
//       res.status(500).render('error', {err});
//     });
// });
//
// //Edit
// router.get('/attractions/:id/edit', (req, res) => {
//   Attraction
//     .findById(req.params.id)
//     .exec()
//     .then((attraction) => {
//       if(!attraction) return res.status(404).send('Not found');
//       res.render('attractions/edit', {attraction});
//     })
//     .catch((err) => {
//       res.status(500).render('error', {err});
//     });
// });
//
// //Update
// router.get('/attractions/:id', (req, res) => {
//   Attraction
//     .findById(req.params.id)
//     .exec()
//     .then((attraction) => {
//       if(!attraction) return res.status(404).send('Not found');
//
//       attraction = Object.assign(attraction, req.body);
//       return attraction.save();
//     })
//     .then((attraction) => {
//       res.redirect(`/attractions/${attraction.id}`);
//     })
//     .catch((err) => {
//       res.status(500).render('error', {err});
//     });
// });
//
// //Delete
// router.get('/attractions/:id', (req, res) => {
//   Attraction
//     .findById(req.params.id)
//     .exec()
//     .then((attraction) => {
//       if(!attraction) return res.status(404).send('Not found');
//       return attraction.remove();
//     })
//     .then(() => {
//       res.redirect('/attractions');
//     })
//     .catch((err) => {
//       res.status(500).render('error', { err });
//     });
// });

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
