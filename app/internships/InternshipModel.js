/**
 *
 */
define([
    'backbone'
], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            'title': '',
            'periodStart': '',
            'periodEnd': '',
            'description': ''
        },

        initialize: function() {
            Backbone.Compute(this);
        },

        period: {
            fields: ['periodStart', 'periodEnd'],
            compute: function(fields) {
                return fields.periodStart + ' t/m ' + fields.periodEnd;
            }
        }
    })
});