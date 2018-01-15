const Attraction = require('../models/attraction');

function indexRoute(req, res, next) {
  Attraction
    .find()
    .exec()
    .then((attractions) => {
      res.render('attractions/index', { attractions });
    })
    .catch(next);
}

function newRoute(req, res) {
  return res.render('attractions/new');
}

function showRoute(req, res, next) {
  Attraction
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((attraction) => {
      if(!attraction) return res.notFound();
      return res.render('attractions/show', { attraction });
    })
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.user;
  Attraction
    .create(req.body)
    .then(() => res.redirect('/attractions'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/attractions/new', err.toString());
      }
      next(err);
    });
}

function editRoute(req, res, next) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.notFound();
      return res.render('attractions/edit', { attraction });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.notFound();

      attraction = Object.assign(attraction, req.body);

      return attraction.save();
    })
    .then(() => res.redirect(`/attractions/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/attractions/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.notFound();
      return attraction.remove();
    })
    .then(() => res.redirect('/attractions'))
    .catch(next);
}

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.notFound();

      attraction.comments.push(req.body);
      return attraction.save();
    })
    .then((attraction) => {
      res.redirect(`/attractions/${attraction.id}`);
    })
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Attraction
    .findById(req.params.id)
    .exec()
    .then((attraction) => {
      if(!attraction) return res.notFound();

      const comment = attraction.comments.id(req.params.commentId);
      comment.remove();
      return attraction.save();
    })
    .then((attraction) => {
      res.redirect(`/attractions/${attraction.id}`);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
