const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth');
const editController = require('../controllers/editController');
const workoutController = require('../controllers/workoutController');
var moment = require('moment');
router.get('/weight', ensureAuthenticated, function(req, res) {
    editController.getAllWeight(function(err, weights) {
        if (err) console.log(err);
        res.render('weight', {
            weights: weights,
            name: req.user.name,
            id: req.user.id,
            email: req.user.email,
            weight: req.user.weight,
            height: (Math.floor(req.user.height / 12) + '\'' + (req.user.height % 12) + '"'),
            age: req.user.age,
            workout: req.query.workout,
            moment: moment
        });
    });
});

router.get('/lifting', ensureAuthenticated, function(req, res) {
    workoutController.getWeightWorkoutHistory(1, req.user.id, "" , function(err, weights) {
        if (err) console.log(err);
        res.render('weightWorkout', {
            weights: weights,
            name: req.user.name,
            id: req.user.id,
            email: req.user.email,
            weight: req.user.weight,
            height: (Math.floor(req.user.height / 12) + '\'' + (req.user.height % 12) + '"'),
            age: req.user.age,
            workout: req.query.workout,
            moment: moment
        });
    });
});

module.exports = router;