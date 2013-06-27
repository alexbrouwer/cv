/**
 *
 */
define([
    'app',
    './View',
    './SkillCollection',
    'when'
], function(app, SkillsView, SkillCollection, when) {

    var deferred = when.defer();
    var collection = new SkillCollection();
    collection.fetch().done(function() {
        app.skills.show(new SkillsView({
            collection: collection
        }));
        deferred.resolve();
    });

    return deferred.promise;
});