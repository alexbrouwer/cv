/**
 *
 */
define([
    'marionette',
    'hbs!./template.html',
    './InternshipItemView'
], function(Marionette, template, InternshipItemView) {
    return Marionette.CompositeView.extend({
        template: template,

        itemView: InternshipItemView,
        itemViewContainer: '[data-content="items"]'
    });
});