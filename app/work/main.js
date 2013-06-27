/**
 *
 */
define([
    'app',
    './View',
    './WorkCollection',
    'when'
], function(app, WorkView, WorkCollection, when) {

    var deferred = when.defer();
    var collection = new WorkCollection();
    collection.fetch().done(function() {
        app.work.show(new WorkView({
            collection: collection
        }));
        deferred.resolve();
    });

    return deferred.promise;

});