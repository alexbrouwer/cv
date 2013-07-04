/**
 *
 */
define([
    'backbone',
    './EducationModel'
], function(Backbone, EducationModel) {
    return Backbone.Collection.extend({
        url: 'data/education.json',
        model: EducationModel
    });
});