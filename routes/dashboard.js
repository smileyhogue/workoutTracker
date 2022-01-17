const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
//------------ Dashboard Route ------------//
router.get('/', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name,
    id: req.user.id,
    email: req.user.email,
    weight: req.user.weight,
    height: (Math.floor(req.user.height / 12) + '\'' + (req.user.height % 12) + '"'),
    age: req.user.age
}));
const workoutController = require('../controllers/workoutController')
router.get('/add', ensureAuthenticated, function(req, res){
    var workoutList = workoutController.getWorkouts();
    console.log(workoutList);
    res.render('add', {
        name: req.user.name,
        id: req.user.id,
        email: req.user.email,
        weight: req.user.weight,
        height: req.user.height,
        age: req.user.age,
        workout: req.query.workout,
        workoutList: workoutList
        });
});

module.exports = router;