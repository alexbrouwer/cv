/**
 *
 */
define([
    'marionette',
    'hbs!./template.html',
    './EducationItemView'
], function(Marionette, template, EducationItemView) {
    return Marionette.CompositeView.extend({
        template: template,
        itemView: EducationItemView,
        itemViewContainer: '[data-content="items"]'
    });
});