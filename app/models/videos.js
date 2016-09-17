import DS from 'ember-data';

export default DS.Model.extend({
  header: DS.attr('string'),
  summary: DS.attr('string'),
  url: DS.attr('string'),
  createDate: DS.attr('number')
});
