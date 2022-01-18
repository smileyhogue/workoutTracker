const mongoose = require('mongoose');

//------------ User Schema ------------//
const workoutHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
    workoutId: {
    type: Number,
    required: true
    },
    reps: {
    type: Number,
    required: false
    },
    sets: {
    type: Number,
    required: false
    },
    weight: {
    type: Number,
    required: false
    },
    isMaxAttempt: {
    type: Boolean,
    required: false
    }
}, { timestamps: true });

const workoutHistory = mongoose.model('workoutHistory', workoutHistorySchema);

module.exports = workoutHistory;