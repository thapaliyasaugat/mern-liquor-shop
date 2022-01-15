const express = require("express")
const router = express.Router()
const User = require("../models/User")
const Cryptojs = require("crypto-js")
const jwt = require('jsonwebtoken')

//Register user
router.post('/register', async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),


    })


    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Login user
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong Creadientials!")
        }
        const hashedPassword = Cryptojs.AES.decrypt(user.password, process.env.PASS_SEC);

        const originalpassword = hashedPassword.toString(Cryptojs.enc.Utf8)

        if (originalpassword !== req.body.password) {
            return res.status(401).json("Wrong Creadientials")
        }
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET,
        )

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken })

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router