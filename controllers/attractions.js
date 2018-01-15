const Attraction = require('../models/attraction');

function indexRoute(req, res) {
  Attraction
    .find()
    .exec()
    .then((attractions) => {
      res.render('attractions/index', { attractions });
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function newRoute(req, res) {
  res.render('attractions/new');
}

function showRoute(req, res) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.status(404).send('Not found');
      res.render('attractions/show', {attraction});
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function createRoute(req, res) {
  Attraction
    .create(req.body)
    .then(() => {
      res.redirect('/attractions');
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function editRoute(req, res) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.status(404).send('Not found');
      res.render('attractions/edit', {attraction});
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function updateRoute(req, res) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.status(404).send('Not found');

      attraction = Object.assign(attraction, req.body);
      return attraction.save();
    })
    .then((attraction) => {
      res.redirect(`/attractions/${attraction.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function deleteRoute(req, res) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.status(404).send('Not found');
      return attraction.remove();
    })
    .then(() => {
      res.redirect('/attractions');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}





module.exports = {
  index: indexRoute,
  new: newRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
