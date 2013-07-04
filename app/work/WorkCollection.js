/**
 *
 */
define([
    'backbone',
    './WorkModel'
], function(Backbone, WorkModel) {
    return Backbone.Collection.extend({
        url: 'data/work.json',
        model: WorkModel
    })
});