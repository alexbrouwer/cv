define([
    'backbone'
], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            "title": "",
            "subTitle": "",
            "level": 0
        },

        initialize: function() {
            Backbone.Compute(this);
        },

        expertize: {
            fields: ['level'],
            compute: function(fields) {
                var expertize = '', i;
                for(i = 0; i < fields.level; i++) {
                    expertize += 'X';
                }
                return expertize;
            }
        }
    });
});