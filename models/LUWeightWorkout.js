const mongoose = require('mongoose');

//------------ User Schema ------------//
const LUWeightWorkoutSchema = new mongoose.Schema({
    workoutId: {
    type: Number,
    required: true
  },
    WorkoutName: {
    type: String,
    required: true
    },
    WorkoutValue: {
        type: String,
        required: true
        }
}, { timestamps: true });

const LUWeightWorkoutList = mongoose.model('LUWeightWorkoutList', LUWeightWorkoutSchema);

module.exports = LUWeightWorkoutList;