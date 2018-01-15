const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const attractionSchema = new mongoose.Schema({
  placeName: { type: String, minlength: 3, required: true, trim: true },
  website: { type: String, trim: true },
  image: { type: String, required: true, trim: true },
  description: { type: String, minlength: 10, required: true },
  rating: { type: Number, required: true },
  category: { type: String, minlength: 3, required: true, trim: true },
  address: {
    line1: { type: String, minlength: 3, required: true },
    line2: { type: String, minlength: 3 },
    postcode: { type: String, minlength: 5, required: true }
  },
  latLng: { type: String, minlength: 3, required: true, trim: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
});

attractionSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};


module.exports = mongoose.model('Attraction', attractionSchema);
