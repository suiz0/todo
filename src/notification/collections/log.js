var Backbone =  require('backbone');
var Entry =  require('../models/entry.js');
module.exports = Backbone.Collection.extend({
    model: Entry
});
