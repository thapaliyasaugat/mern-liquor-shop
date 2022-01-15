const express = require("express")
const Cryptojs = require("crypto-js")
const User = require('../models/User')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const router = express.Router()
//update user
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = Cryptojs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted sucessfully")
    } catch (err) {
        res.status(500).json(err);
    }

})
//single user 
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {

        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err);
    }

})


//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS

module.exports = router