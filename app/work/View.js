/**
 *
 */
define([
    'marionette',
    'hbs!./template.html',
    './WorkItemView'
], function(Marionette, template, WorkItemView) {
    return Marionette.CompositeView.extend({
        template: template,

        itemView: WorkItemView,
        itemViewContainer: '[data-content="items"]'
    });
});