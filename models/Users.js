const mongoose = require('mongoose');
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
            ref: 'Thought'
        },
      ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Friend'
        },
      ],
});

// Create a virtual property `tagCount` that gets the amount of comments per user
postSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

module.export = userSchema;