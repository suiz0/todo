var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    tagName: 'div',
    className: 'log-item',
    template: _.template('<span><%=message%></span>'),
    initialize: function() {
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
