const mongoose = require('mongoose');

//------------ User Schema ------------//
const weightTrackerSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
    weight: {
    type: Number,
    required: true
    },
}, { timestamps: true });

const weightTracker = mongoose.model('weightTracker', weightTrackerSchema);

module.exports = weightTracker;