import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('pathOfIntroduction', []);
    controller.set('topic', null);
  }
});
