const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
//------------ Edit Route ------------//
const editController = require('../controllers/editController')
router.post('/', editController.editHandle);
router.get('/', ensureAuthenticated, (req, res) => res.render('edit', {
    name: req.user.name,
    id: req.user.id,
    email: req.user.email,
    weight: req.user.weight,
    height: req.user.height,
    age: req.user.age,
    item: req.query.item
}));
module.exports = router;

