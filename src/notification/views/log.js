var Backbone = require('backbone');
var EntryView =  require('./entry.js');
var Entry =  require('../models/entry.js');

module.exports = Backbone.View.extend({
    el: 'body',
    template: _.template('<div class="notification-wrapper"></div>'),
    initialize: function(options) {
        this.log = options.log;
        this.listenTo(this.collection, 'add', this.notifyAdd);
        this.listenTo(this.collection, 'remove', this.notifyRemove);
    },
    render: function() {
        // do nothing
        this.$el.append(this.template());
    },
    notifyAdd: function(model) {
        var entry = new Entry();

        entry.set('action', 0);
        entry.set('message', 'Added new item');
        entry.set('data', model);
        this.notify(entry);
    },
    notifyRemove: function(model) {
        var entry = new Entry();

        entry.set('action', 1);
        entry.set('message', 'Removed new item');
        entry.set('data', model);
        this.notify(entry);
    },
    notify: function(entry) {
        this.log.add(entry);
        this.renderOne(entry);
    },
    renderOne: function(entry) {
        var entryView =  new EntryView({model: entry});
        this.$('.notification-wrapper').append(entryView.render().el);
    }
});
