var Backbone = require('backbone');
var todo = require('../models/todo');

module.exports = Backbone.Collection.extend({
    model: todo,
    url: './src/collections/todos.mock.js',
    initialize: function() {

    }
});
