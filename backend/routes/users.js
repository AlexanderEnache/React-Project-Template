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
                // if(err.errors.username.properties.type === "mongoose-unique-validator"){
                //     res.json("username-already-exists")
                // }else{
                    res.status(400).json('Error: ' + err);
                // }
            });
    }else{
        User.find()
        .then(() => res.json('password-not-match'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
});

router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username, password: password}, function (err, user) {
        if(err){
            console.log(err);
            res.json(err);
        }
        console.log(user);
        res.json(user);
    });
});

router.route('/authentication').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username, password: password}, function (err, user) {
        if(err){
            console.log(err);
            res.json(err);
        }
        console.log(user);
        res.json(user);
    });
});

router.route('/add-dog').post((req, res) => {
    const username = req.body.username;
    const sessionID = req.body.sessionID;
    const name = req.body.name;
    const description = req.body.description;

    const Dog = {name, description}

    User.findOneAndUpdate({username: username, password: sessionID, "dogs.name": { $ne: name }}, { $push : { dogs : Dog } }, function (err, resp) {
        if(err){
            console.log(err);
            res.json(err);
        }
        // console.log(res);
        res.json(resp);
    });
});

router.route('/get-dog').post((req, res) => {
    const username = req.body.username;
    const sessionID = req.body.sessionID;

    User.findOne({username: username, password: sessionID}, function (err, resp) {
        if(err){
            console.log(err);
            res.json(err);
        }
        console.log(res);
        res.json(resp);
    });
});

router.route('/find-dogs').post((req, res) => {
    User.find()
    .then((resp) => res.json(resp))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add-friend').post((req, res) => {
    const username = req.body.username;
    const sessionID = req.body.sessionID;
    const dogName = req.body.dogName
    const friendName = req.body.friendName;

    User.findOneAndUpdate({username: username, password: sessionID, "friends": { $ne: friendName }}, { $push : { friends : friendName } }, function (err, resp) {
        if(err){
            console.log(err);
            res.json(err);
        }
        console.log(res);
        res.json(resp);
    });
});

router.route('/get-friends').post((req, res) => {
    const username = req.body.username;
    const sessionID = req.body.sessionID;

    // User.find()
    // .then(users => res.json(users))
    // .catch(err => res.status(400).json('Error: ' + err));

    User.findOne({username: username, password: sessionID}, function (err, resp) {
        if(err){
            console.log(err);
            res.json(err);
        }
        console.log(res);
        res.json(resp);
    });
});

module.exports = router;