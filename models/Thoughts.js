const Schema = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {},
    createdAt: {},
    username: {},
    reactions: [{}]
});