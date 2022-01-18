const express = require('express');
const { append } = require('express/lib/response');
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
router.post('/add', workoutController.editHandle);
router.get('/add', ensureAuthenticated, function(req, res) {
    workoutController.getWorkouts(function(err, workouts) {
        if (err) console.log(err);
        res.render('add', {
            workouts: workouts,
            name: req.user.name,
            id: req.user.id,
            email: req.user.email,
            weight: req.user.weight,
            height: (Math.floor(req.user.height / 12) + '\'' + (req.user.height % 12) + '"'),
            age: req.user.age,
            workout: req.query.workout
        });
    });
});
module.exports = router;