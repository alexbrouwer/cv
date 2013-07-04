/**
 *
 */
define([
    'backbone'
], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            "company": "",
            "city": "",
            "companyDescription": "",
            "periodStart": "",
            "periodEnd": "",
            "jobTitle": "",
            "jobDescription": "",
            "jobSkills": [],
            "jobTools": []
        },

        initialize: function(){
            Backbone.Compute(this);
        },

        period: {
            fields: ['periodStart','periodEnd'],
            compute: function(fields) {
                return fields.periodStart + ' t/m ' + fields.periodEnd;
            }
        }
    });
});