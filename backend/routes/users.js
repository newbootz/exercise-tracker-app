const router = require('express').Router();
let User = require('../models/user.model');



//express handle incoming request for '/'
//returns all users
router.route('/').get((req, res) => {
    //mongoose
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
});

//express handle incoming requests for '/add'
//creates new user from payload
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User ({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' +  err));
});

module.exports = router;