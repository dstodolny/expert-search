import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  newName: null,
  newUrl: null,
  isValid: computed.and('newName', 'newUrl'),
  notValid: computed.not('isValid'),
  actions: {
    createUser() {
      this.sendAction('createUser');
    }
  }
});
