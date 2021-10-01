const router = require("express").Router();
const User = require("../models/User");

//GET USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch(err) {
        res.status(500).json(err);
    }
    
});

//CREATE A USER
router.post("/", async (req, res) => {
    try {
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;