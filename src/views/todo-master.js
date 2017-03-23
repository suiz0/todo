var Backbone = require('backbone');
var TodoView = require('./todo-item.js');

module.exports = Backbone.View.extend({
    el: '#todo',
    initialize: function(options) {
        this.listenTo(this.collection, 'add', this.renderOne);
        this.test = options.result;
    },
    renderAll: function() {
        console.log(this.test);
        this.collection.forEach(this.renderOne, this);

    },
    renderOne: function(model) {
        console.log(this.test);
        var itemView = new TodoView({model: model});
        itemView.render();
        this.$el.append(itemView.el);
    }
});
