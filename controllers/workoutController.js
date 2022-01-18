//------------ weightTracker Model ------------//
const LUWeightWorkout = require('../models/LUWeightWorkout');
const User = require('../models/User');
const workoutHistory = require('../models/workoutHistory');

// handle the post request to add a new workout
exports.editHandle = (req, res) => {
    const { exercise, reps, sets, weight, isMaxAttempt, id, name, workout } = req.body;
    console.log (isMaxAttempt);
    let errors = [];
    // if workout is weight
    if (workout === 'weight') {
        const newWorkout = new workoutHistory({
            userId: id,
            workoutId: exercise,
            reps,
            sets,
            weight,
            isMaxAttempt
        });
        newWorkout
            .save()
            .then(workoutHistory => {
                req.flash('success_msg', 'Added Workout Successfully!');
                res.redirect('/dashboard');
            })

    }
}

// create function to get workout array from LUWeightWorkout
exports.getWorkouts = function(cb) {
    LUWeightWorkout.find({}, cb).sort({ workoutName: 1 });
};

// create function to get workout array from LUWeightWorkout
exports.getWeightWorkoutHistory = function(workoutId, userId, maxAttempt, cb) {
    if (maxAttempt != "true") {
    workoutHistory.find(({userId: userId, workoutId: workoutId}), cb).sort({ createdAt: 1 });
    } else {
    workoutHistory.find(({userId: userId, workoutId: workoutId, isMaxAttempt: maxAttempt}), cb).sort({ createdAt: 1 });
    }
};

exports.addHandle = (req, res) => {
    const { name, id, email, weight, feet, inches, age } = req.body;
    let errors = [];

    //------------ Checking required fields ------------//
    
}
