/**
 *
 */
define([
    'app',
    './View',
    './InternshipCollection',
    'when'
], function(app, InternshipsView, InternshipCollection, when) {

    var deferred = when.defer();
    var collection = new InternshipCollection();
    collection.fetch().done(function() {
        app.internships.show(new InternshipsView({
            collection: collection
        }));
        deferred.resolve();
    });

    return deferred.promise;

});