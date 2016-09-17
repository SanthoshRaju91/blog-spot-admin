import DS from 'ember-data';

export default DS.Model.extend({
  createDate: DS.attr('string'),
  header: DS.attr('string'),
  summary: DS.attr('string'),
  tags: DS.attr('string'),
  content: DS.attr('string')
});
