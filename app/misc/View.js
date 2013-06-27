/**
 *
 */
define([
    'marionette',
    'hbs!./template.html'
], function(Marionette, template) {
    return Marionette.ItemView.extend({
        template: template
    });
});