const {mongoose, model} = require('mongoose');
const validator = require('validator');

const thoughtSchema = new mongoose.Schema({
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reaction'
        }]
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts;