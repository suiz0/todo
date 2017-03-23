var Backbone =  require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        action: -1,
        message: '',
        data: {},
    }
});
