define(['curl'], function(curl) {
    var config = {
        baseUrl: '.',
        packages: [
            {name: 'app', location: 'app', main: 'main'},
            {name: 'work', location: 'app/work', main: 'main'},
            {name: 'skills', location: 'app/skills', main: 'main'},
            {name: 'education', location: 'app/education', main: 'main'},
            {name: 'internships', location: 'app/internships', main: 'main'},
            {name: 'misc', location: 'app/misc', main: 'main'},
            {name: 'contact', location: 'app/contact', main: 'main'},
            {name: 'motivation', location: 'app/motivation', main: 'main'},

            { name: 'curl', location: 'lib/curl/src/curl', main: '../curl' },
            { name: 'when', location: 'lib/when', main: 'when' }
        ],

        plugins: {
            hbs: {
                templateExtension: ''
            }
        },

        paths: {
            'lodash': 'lib/lodash.underscore.min',
            'marionette': 'lib/marionette',
            'backbone': 'lib/backbone',
            'hbs': 'lib/hbs-plugin'
        },

        preloads: [
            'app/scroll'
        ]
    };

    curl(config, ['app', 'domReady!']).then(load, error);

    function load(app) {
        app.start();
    }

    function error(err) {
        console.log(err.stack || err);
    }
});