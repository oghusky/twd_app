const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
    role_type: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: "Name of tech used is required",
        trim: true
    },
    base_salary: {
        type: Number,
        min: 1,
    },
    technologies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technology"
    }],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
module.exports = mongoose.model("Role", RoleSchema);