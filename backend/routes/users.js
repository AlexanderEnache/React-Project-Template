const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const repassword = req.body.repassword;

    if(password === repassword){
        const newUser = new User({username, password});
        newUser.save()
            .then(() => res.json('User added'))
            .catch(err => {
                if(err.errors.username.properties.type === "mongoose-unique-validator"){
                    res.json("username-already-exists")
                }else{
                    res.status(400).json('Error: ' + err);
                }
            });
    }else{
        User.find()
        .then(() => res.json('password-not-match'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
});

router.route('/login').get((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username, password: password}, function (err, user) {
        if(err){
            console.log(err);
            res.json(err);
        }
        res.json(user);
    });
});

module.exports = router;