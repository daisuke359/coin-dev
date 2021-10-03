const router = require("express").Router();
const User = require("../models/User");

//get all users
router.get("/allUsers", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch(err) {
        res.status(500).json(err);
    }
});

//get a user
router.get("/:email", async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({email: email});
        res.status(200).json(user);
    } catch(err) {
        return res.status(500).json(err);
    }
});

//Add coin to a watchlist
router.put("/:id/watchlist/add", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user.watchList.includes(req.body.currency)) {
            await user.updateOne({
                $push: {watchList: req.body.currency}
            });
            res.status(200).json("The currency has been added");
        } else {
            res.status(403).json("The currency is already in your watchlist");
        }
    } catch(err) {
        return res.status(500).json(err);
    }
});

//Remove coin from a watchlist
router.put("/:id/watchlist/remove", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(user.watchList.includes(req.body.currency)) {
            await user.updateOne({
                $pull: {watchList: req.body.currency}
            });
            res.status(200).json("The currency has been removed");
        } else {
            res.status(403).json("The currency is not in your watchlist");
        }
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;