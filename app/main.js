/**
 *
 */
define([
    'marionette',
    'require',
    'when'
], function(Marionette, require, when) {
    var app = new Marionette.Application();

    Marionette.Renderer.render = function(template, data) {
        if(typeof template == 'string') {
            return template;
        } else {
            return template(data);
        }
    };

    app.addRegions({
        'motivation': '#motivation',
        'work': '#work',
        'skills': '#skills',
        'education': '#education',
        'internships': '#internships',
        'misc': '#misc',
        'contact': '#contact'
    });

    app.module('modules', function(modules, app) {
        require(['motivation', 'work', 'skills', 'education', 'internships', 'misc', 'contact'], function(motivation) {

            var modules = Array.prototype.slice.call(arguments, 0);
            when.all(modules).then(function(){
                app.trigger('modules:loaded');
            });
        }, function(err) {
            console.log(err.stack || err);
        });
    });

    app.on('modules:loaded', function() {
        Backbone.history.start();
    });

    app.on('modules:loaded', function() {
        $('html').removeClass('loading');
        $('[data-spy="scroll"]').each(function(){
            $(this).scrollspy('refresh');
        })
    });

    return app;
});