/**
 *
 */
define([
    'backbone',
    './SkillModel'
], function(Backbone, SkillModel) {
    return Backbone.Collection.extend({
        url: 'data/skills.json',
        model: SkillModel
    });
});