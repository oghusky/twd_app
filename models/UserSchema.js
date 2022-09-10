const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: "First name is required",
        trim: true
    },
    last_name: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: "First name is required",
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        select: true,
        required: "Password is required"
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],
}, { timestamps: true });

userSchema.pre('save', function (next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model("User", UserSchema);