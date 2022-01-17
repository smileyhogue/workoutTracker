//------------ weightTracker Model ------------//
const LUWeightWorkout = require('../models/LUWeightWorkout');
const User = require('../models/User');

// exports.weightWorkoutList = (req, res) => {
//     LUWeightWorkout.find({}, (err, workoutList) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('add', {
//                 name: req.user.name,
//                 id: req.user.id,
//                 email: req.user.email,
//                 weight: req.user.weight,
//                 height: req.user.height,
//                 age: req.user.age,
//                 workout: req.query.workout,
//                 workoutList: workoutList
//             });
//         }
//     });
// };

exports.weightWorkoutList = function(cb){
    LUWeightWorkout.find({}, cb);
};

exports.addHandle = (req, res) => {
    const { name, id, email, weight, feet, inches, age } = req.body;
    let errors = [];

    //------------ Checking required fields ------------//
    
}
