var Backbone = require('backbone');
var Entry = require('./models/entry');
var Logs = require('./collections/log');
var NotificationView = require('./views/log');

function NotificationWidget(options) {
    // Description: Entry point
    var log = new Logs();
    var view  = new NotificationView({collection: log, source: options.collection});

    this.getLog = function() {
        return log;
    }

    view.render();
}

module.exports = NotificationWidget;
