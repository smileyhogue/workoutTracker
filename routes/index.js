const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name,
    id: req.user.id,
    email: req.user.email,
    weight: req.user.weight,
    height: (Math.floor(req.user.height / 12) + '\'' + (req.user.height % 12) + '"'),
    age: req.user.age
}));
const editController = require('../controllers/editController')
router.post('/dashboard/edit', editController.editHandle);
router.get('/dashboard/edit', ensureAuthenticated, (req, res) => res.render('edit', {
    name: req.user.name,
    id: req.user.id,
    email: req.user.email,
    weight: req.user.weight,
    height: req.user.height,
    age: req.user.age,
    item: req.query.item
}));
const workoutController = require('../controllers/workoutController')
router.post('/dashboard/add', workoutController.addHandle);
// use workoutController to get workoutList
router.get('/dashboard/add', ensureAuthenticated, (req, res) => {
    workoutController.weightWorkoutList(function(err, workoutList){
        if (err) console.log(err);
        res.render('add', {
            name: req.user.name,
            id: req.user.id,
            email: req.user.email,
            weight: req.user.weight,
            height: req.user.height,
            age: req.user.age,
            workout: req.query.workout,
            workoutList: workoutList });
        console.log(workoutList);
    });
});

module.exports = router;