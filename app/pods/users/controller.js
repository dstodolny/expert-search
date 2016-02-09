import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    createUser() {
      const user = this.store.createRecord('user', {
        name: this.get('newName'),
        url: this.get('newUrl'),
      });
      user.save().then((user) => {
        this.store.findRecord('user', user.get('id'), { reload: true })
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.set('newName', null);
        this.set('newUrl', null);
      });
    }
  }
});
