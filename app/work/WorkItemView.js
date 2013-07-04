/**
 *
 */
define([
    'marionette',
    'hbs!./item-template.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({
        className: "row",
        template: template
    });
});