const express = require('express');
const router = express.Router();
const User = require('../models/User');

//create a user using: POST "/api/auth/createuser" . No login required



router.get('/', (req, res) => {
    res.send('Hello World! this is my first express app');
console.log(req.body);	
const user =User(req.body);
user.save()
res.send(req.body);

}
);
module.exports = router;