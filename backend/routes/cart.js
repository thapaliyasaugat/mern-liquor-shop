const express = require("express")
const router = express.Router()

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const Cart = require("../models/Cart");



//create/update cart
router.post("/", verifyToken, async (req, res) => {
    try {
        // console.log(req.body)
        const user = await Cart.findOne({ userId: req.user.id })
        if (user) {
            const updateCart = await Cart.findOneAndUpdate({ userId: req.user.id },
                {

                    userId: req.user.id,
                    products: req.body

                })
            res.status(200).json(updateCart)
        } else {
            const newCart = new Cart({ userId: req.user.id, products: req.body });
            const saveCart = await newCart.save();
            res.status(200).json(saveCart)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router