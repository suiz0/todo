var jquery = require('jquery');
var _ = require('underscore');
var Backbone =  require('backbone');
var Todos =  require('./src/collections/todos');
var Todo = require('./src/models/todo');
var MasterView =  require('./src/views/todo-master');
var Notification =  require('./src/notification/index.js');

Backbone.$ = jquery;

//jquery(function() {
    var records = new Todos();
    var appView = new MasterView({collection: records, result: new Todos(), model: new Todo()});
    var notif = new Notification({collection: records});

    records.fetch();
//});
