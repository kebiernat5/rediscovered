const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema ({
    photoUrl: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
})

const Photos = mongoose.model("Photos", PhotoSchema)

module.exports = Photos