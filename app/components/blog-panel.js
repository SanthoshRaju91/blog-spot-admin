import Ember from 'ember';
// import moment from 'moment';

export default Ember.Component.extend({
  tagged: Ember.computed('data.tags', function() {
    return this.get('data.tags').split(',');
  }),
  timestamp: Ember.computed('data.createDate', function() {
    //return moment.unix(this.get('data.createDate'));
    return  this.get('data.createDate');
  }),
  actions: {
    navigate: function(data) {
      console.log(data);
    }
  }
});
