import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  importance: attr('string'),
  content: attr('string'),

  user: belongsTo('user')
});
