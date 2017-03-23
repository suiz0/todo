var Backbone = require('backbone');
var Entry = require('./models/entry.js');
var Logs = require('./collections/log.js');
var NotificationView = require('./views/log.js');

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
