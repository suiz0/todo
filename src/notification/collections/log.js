var Backbone =  require('backbone');
var Entry =  require('../models/entry');
module.exports = Backbone.Collection.extend({
    model: Entry
});
