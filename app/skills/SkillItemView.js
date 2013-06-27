/**
 *
 */
define([
    'marionette',
    'hbs!./skill-item-template.html'
], function(Marionette, template) {
    return Marionette.ItemView.extend({
        tagName: 'li',
        template: template
    });
});