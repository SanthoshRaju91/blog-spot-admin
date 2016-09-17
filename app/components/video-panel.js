import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    /**
    * Function to delete the selected video
    * @method: deleteVideo
    */
    deleteVideo: function(video) {
      video.deleteRecord();
      video.save();
    },

    /**
    * Function to edit the video
    * @method: editVideo
    */
    editVideo: function() {
      this.sendAction('editVideo', this.get('data'));
    }
  }
});
