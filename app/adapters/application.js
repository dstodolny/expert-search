import DS from 'ember-data';
import Config from 'expert-search/config/environment';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: Config.apiURL,

  pathForType(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },
});
