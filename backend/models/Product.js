

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        img: { type: String, required: true },
        categories: { type: Array, require: true },
        size: { type: Array, required: true },
        price: { type: Number, required: true },
        inStock: {
            type: String, default: '1'
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);