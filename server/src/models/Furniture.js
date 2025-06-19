import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
        minLength: [4, 'Make should have at least 4 characters'],
    },
    model: {
        type: String,
        required: true,
        minLength: [4, 'Model should have at least 4 characters'],
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
    }
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;

