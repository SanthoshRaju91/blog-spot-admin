import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTag: [],
  actions: {
    selectedTag: function(value) {
      if(value) {
        this.set('selectedTag', value);
      }
    },
    submitBlog: function() {
      let blog = this.store.createRecord('blogs', {
        header: this.get('header'),
        summary: this.get('summary'),
        tags: this.get('selectedTag'),
        createDate: Date.now(),
        content: this.get('bodyContent')
      });

      blog.save();
      this.transitionToRoute('blog.lists');
    }
  }
});
