import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  url: attr('string'),
  shortUrl: attr('string'),

  headers: hasMany('header'),
  friends: hasMany('user')
});
