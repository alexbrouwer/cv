/**
 *
 */
define([
    'backbone',
    './InternshipModel'
], function(Backbone, InternshipModel) {
    return Backbone.Collection.extend({
        url: 'data/internships.json',
        model: InternshipModel
    });
});