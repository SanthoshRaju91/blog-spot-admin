import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    shareBook: function() {
      let book = this.store.createRecord('resources', {
        author: this.get('author'),
        description: this.get('description'),
        img: this.get('img'),
        name: this.get('name'),
        url: this.get('url'),
        createDate: Date.now()
      });

      book.save();
      this.set('author', '');
      this.set('description', '');
      this.set('img', '');
      this.set('url', '');
      this.set('name', '');
    }
  }
});
