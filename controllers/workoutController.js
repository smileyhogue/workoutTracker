//------------ weightTracker Model ------------//
const LUWeightWorkout = require('../models/LUWeightWorkout');
const User = require('../models/User');

// create function to get workout array from LUWeightWorkout
exports.getWorkouts = function(cb) {
    LUWeightWorkout.find({}, cb).sort({ workoutId: 1 });
};


exports.addHandle = (req, res) => {
    const { name, id, email, weight, feet, inches, age } = req.body;
    let errors = [];

    //------------ Checking required fields ------------//
    
}
