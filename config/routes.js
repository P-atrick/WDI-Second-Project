const router = require('express').Router();
const sessions = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const attractions = require('../controllers/attractions');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/attractions')
  .get(attractions.index)
  .post(attractions.create);

router.route('/attractions/new')
  .get(attractions.new);

router.route('/attractions/:id')
  .get(attractions.show)
  .put(attractions.update)
  .delete(attractions.delete);

router.route('/attractions/:id/edit')
  .get(attractions.edit);

router.route('/attractions/:id/comments')
  .post(attractions.createComment);

router.route('/attractions/:id/comments/:commentId')
  .delete(attractions.deleteComment);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
