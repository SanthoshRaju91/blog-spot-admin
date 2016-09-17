import Ember from 'ember';

const {
  set,
  get
} = Ember;

export default Ember.Controller.extend({
  computedUrl: Ember.computed('url', function() {
    return (this.get('editMode')) ? this.get('url') : 'https://www.youtube.com/embed/' + this.get('url');
  }),
  actions: {
    /**
    * Functiont to create a new video record or updating an existing one.
    * @method: shareVideo
    */
    shareVideo: function() {
      if(this.get('editMode')) {
        var video = this.store.update('videos', {
          header: this.get('header'),
          summary: this.get('summary'),
          url: this.get('url')
        });
        video.save();
      } else {
        var video = this.store.createRecord('videos', {
          header: this.get('header'),
          summary: this.get('summary'),
          url: 'https://www.youtube.com/embed/' + this.get('url'),
          createDate: Date.now()
        });
        video.save();
      }
      this.set('header', '');
      this.set('summary', '');
      this.set('url', '');
    },

    /**
    * Function to edit the record
    * @method: editCurrentVideo
    */
    editCurrentVideo: function(data) {
      this.set('editMode', true);
      this.set('header', data.get('header'));
      this.set('summary', data.get('summary'));
      this.set('url', data.get('url'));
    }
  }
});
