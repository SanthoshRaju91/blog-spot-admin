import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params;
  },
  setupController(model, controller, transition) {
    if(transition.queryParams) {
      this.transitionTo('blog.lists');
    }
  }
});
