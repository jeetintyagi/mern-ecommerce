const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var productSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                maxlength: 32,
                trim: true,
        },
        discription: {
                type: String,
                required: true,
                maxlength: 1000,
        },
        price: {
                type: Number,
                required: true,
                maxlength: 32,
                trim: true,
        },
        size: {
                type: Array,
                required: true,
                maxlength: 32,
                trim: true,
        },
        category: {
                type: ObjectId,
                ref: category,
                required: true,
                maxlength: 32,
        },
        stock: {
                type: Number,
                required: true,
        },
        sold: {
                type: Number,
                default: 0,
        },
        discount: {
                type: Number,
                default: 0,
        },
        photo: {
                type: Buffer,
                contentType: String,
        }

},
        { timestamps: true },
)
module.export = mongoose.model("Product", productSchema);
