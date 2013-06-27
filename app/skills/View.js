/**
 *
 */
define([
    'marionette',
    'hbs!./template.html',
    './SkillView'
], function(Marionette, template, SkillView) {
    return Marionette.CompositeView.extend({
        template: template,

        itemView: SkillView,
        currentIndex: null,

        getItemViewContainer: function() {
            var model = this.collection.at(this.currentIndex);
            return this.$el.find('[data-skill="' + model.id + '"]');
        },

        buildItemView: function(item, ItemViewType, itemViewOptions) {
            this.currentIndex = this.collection.indexOf(item);

            var options = _.extend({model: item, collection: item.get('skillSet')}, itemViewOptions);
            return new ItemViewType(options);
        }
    });
});