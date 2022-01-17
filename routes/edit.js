const express = require('express');
const router = express.Router();


//------------ Importing Controllers ------------//
const editController = require('../controllers/editController')

//------------ Register POST Handle ------------//
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

module.exports = router;

