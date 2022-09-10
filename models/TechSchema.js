const mongoose = require('mongoose');
const TechSchema = new mongoose.Schema({
    tech_type: {
        type: String,
        minLength: 1,
        maxLength: 255,
        trim: true,
        lower: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
module.exports = mongoose.model("Tech", TechSchema);