/**
 *
 */
define([
    'marionette',
    'hbs!./skill-template.html',
    './SkillItemView'
], function(Marionette, template, SkillItemView) {
    return Marionette.CompositeView.extend({
        template: template,

        itemView: SkillItemView,
        itemViewContainer: 'ul'
    });
});