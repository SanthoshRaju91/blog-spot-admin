import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {
    let links = [{
      name: 'Blogs',
      url: 'blog'
    }, {
      name: 'Share Video',
      url: 'video'
    }, {
      name: 'Share Book',
      url: 'book'
    }, {
      name: 'Share Blogs',
      url: 'share-blog'
    }];
    return links;
  },
  actions: {
    signIn: function() {
      this.get('session').open('firebase', {provider: 'google'})
        .then(function(data) {
          Ember.Logger.log('Logged in: ' + JSON.stringify(data));
        });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
