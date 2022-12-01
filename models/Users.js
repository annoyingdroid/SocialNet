const {mongoose, model} = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email']
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thoughts'
        },
      ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
      ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// Create a virtual property `friendCount` that gets the amount of comments per user
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const Users = model('user', userSchema);

module.exports = Users;