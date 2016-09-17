import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  description: DS.attr('string'),
  img: DS.attr('string'),
  name: DS.attr('string'),
  url: DS.attr('string')
});
