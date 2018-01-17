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
  placeName: { type: String, minlength: 3, required: true },
  website: { type: String, trim: true },
  image: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  rating: { type: String, required: true },
  category: { type: String, minlength: 3, required: true, trim: true },
  address: { type: String },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [ commentSchema ]
});

attractionSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};


module.exports = mongoose.model('Attraction', attractionSchema);
