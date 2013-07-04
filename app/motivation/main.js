/**
 *
 */
define([
    'app',
    './View',
    'when'
], function(app, MiscView, when) {

    var deferred = when.defer();

    app.motivation.show(new MiscView());
    deferred.resolve();

    return deferred.promise;
});