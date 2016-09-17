import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', function() {
    this.route('lists');
    this.route('add');
  });
  this.route('video');
  this.route('book');
  this.route('share-blog', {path: '/share-blog'});
});

export default Router;
