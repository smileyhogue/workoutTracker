const mongoose = require('mongoose');

//------------ User Schema ------------//
const LUWeightWorkoutSchema = new mongoose.Schema({
    workoutId: {
    type: Number,
    required: true
  },
    workoutName: {
    type: String,
    required: true
    }
}, { timestamps: true });

const LUWeightWorkout = mongoose.model('LUWeightWorkout', LUWeightWorkoutSchema);

module.exports = LUWeightWorkout;