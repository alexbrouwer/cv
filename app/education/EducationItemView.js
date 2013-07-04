/**
 *
 */
define([
    'marionette',
    'hbs!./item-template.html'
], function(Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        className: 'row'
    })
});