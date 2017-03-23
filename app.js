var jquery = require('jquery');
var _ = require('underscore');
var Backbone =  require('backbone');
var Todos =  require('./src/collections/todos.js');
var Todo = require('./src/models/todo.js');
var MasterView =  require('./src/views/todo-master.js');
var Notification =  require('./src/notification/index.js');

Backbone.$ = jquery;

//jquery(function() {
    var records = new Todos();
    var appView = new MasterView({collection: records, result: new Todos(), model: new Todo()});
    var notif = new Notification({collection: records});

    records.fetch();
//});
