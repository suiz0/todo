var Backbone = require('backbone');
var TodoView = require('./todo-item.js');

module.exports = Backbone.View.extend({
    el: '#app',
    events: {
        'click #addTodo': function(e) {
            this.addNewTodo();
        },
        'keypress #todo-desc': function (e) {
            if (e.which === 13) {
                this.addNewTodo();
            }
        }
    },
    initialize: function(options) {
        this.listenTo( this.collection, 'add', this.renderOne );
        this.input = this.$( '#todo-desc' );
    },
    renderAll: function() {
        this.collection.forEach( this.renderOne, this );
    },
    renderOne: function(model) {
        var itemView = new TodoView( {model: model} );
        this.$('#todo-list').append( itemView.render().el );
    },
    addNewTodo: function() {
        this.collection.create( {name: this.input.val(), id: Date.now()} );
        this.input.val( '' );
    }
});
