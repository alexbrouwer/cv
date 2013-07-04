/**
 *
 */
define([
    'app',
    './View',
    './EducationCollection',
    'when'
], function(app, EducationView, EducationCollection, when) {

    var deferred = when.defer();
    var collection = new EducationCollection();
    collection.fetch().done(function() {
        app.education.show(new EducationView({
            collection: collection
        }));
        deferred.resolve();
    });

    return deferred.promise;

});