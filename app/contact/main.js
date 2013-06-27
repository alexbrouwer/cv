/**
 *
 */
define([
    'app',
    './View',
    'when'
], function(app, ContactView, when) {

    var deferred = when.defer();
    app.contact.show(new ContactView());
    deferred.resolve();

    return deferred.promise;

});