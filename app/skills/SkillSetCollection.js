/**
 *
 */
define([
    'backbone',
    './SkillSetModel'
], function(Backbone, SkillSetModel) {
    return Backbone.Collection.extend({
        model: SkillSetModel
    });
});