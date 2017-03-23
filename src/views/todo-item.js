var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#todo-item').html()),
    initialize: function(options) {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
