define([
    'backbone',
    'lodash',
    './SkillSetCollection'
], function(Backbone, _, SkillSetCollection) {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            title: "",
            skillSet: null
        },

        parse: function(response) {
            if(_.isArray(response.skillSet)) {
                response.skillSet = new SkillSetCollection(response.skillSet);
            }
            return response;
        }
    });
});