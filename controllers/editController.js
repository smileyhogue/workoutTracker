//------------ weightTracker Model ------------//
const weightTracker = require('../models/weightTracker');
const User = require('../models/User');


exports.editHandle = (req, res) => {
    const { name, id, email, weight, feet, inches, age } = req.body;
    let errors = [];

    //------------ Checking required fields ------------//
    if (weight) {
        const newWeight = new weightTracker({
            userId: id,
            weight: weight
        });
        User.findByIdAndUpdate(
            { _id: id },
            { weight },
            function (err, result) {
                if (err) {
                    req.flash(
                        'error_msg',
                        'Error updating weight!'
                    );
                    res.redirect(`/Dashboard`);
                } else {
                    newWeight
                        .save()
                        .then(weightTracker => {
                            req.flash('success_msg', 'Updated Weight');
                            res.redirect('/dashboard');
                        })
                        .catch(err => console.log(err));
                }
            }
        );
        
    }if (feet && inches) {
        const height = (feet * 12) + +inches;
        User.findByIdAndUpdate(
            { _id: id },
            { height },
            function (err, result) {
                if (err) {
                    req.flash(
                        'error_msg',
                        'Error updating height!'
                    );
                    res.redirect(`/dashboard`);
                } else {
                    req.flash(
                        'success_msg',
                        'Updated Height Successfully!'
                    );
                    res.redirect('/dashboard');
                }
            }
        );
    }if (age) {
        User.findByIdAndUpdate(
            { _id: id },
            { age },
            function (err, result) {
                if (err) {
                    req.flash(
                        'error_msg',
                        'Error updating age!'
                    );
                    res.redirect(`/dashboard`);
                } else {
                    req.flash(
                        'success_msg',
                        'Updated age Successfully!'
                    );
                    res.redirect('/dashboard');
                }
            }
        );
    }if (!weight && (!feet || !inches) && !age) {
        errors.push({ msg: 'Please enter all fields' });
        if (errors.length > 0) {
            res.render('edit', {
                errors,
                name: req.user.name,
                id: req.user.id,
                email: req.user.email,
                weight: req.user.weight,
                height: req.user.height,
                age: req.user.age,
                item: req.query.item
            });
        }
    }
}

// The below code does not work. lmao
exports.getCurrWeight = (id) => {
    weightTracker.find({userId: '61e48e2f06a0de2e3a583ca9'}).sort({createdAt: -1}).limit(1)
}