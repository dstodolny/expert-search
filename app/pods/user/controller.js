import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  pathOfIntroduction: [],
  selectOptions: Ember.computed('model', 'selected', function() {
    return this.get('store').query('user', {
      'user_id': this.get('model.id'),
      'for_select': true
    });
  }),
  isDisabled: Ember.computed.empty('selected'),
  actions: {
    userQueryChanged(query) {
      const connections = [];
      this.get('store').query('user', {
        'user_id': this.get('model.id'),
        'for_select': true,
        q: query
      }).then(users => {
        connections.pushObjects(users.toArray());
      });
      return connections;
    },
    addConnection() {
      const friendship = this.get('store').createRecord('friendship', {
        userId: this.get('model.id'),
        friendId: this.get('selected.id'),
      });
      friendship.save().then(() => {
        this.set('selected', null);
        this.store.findRecord('user', this.get('model.id'), { reload: true });
      }).catch((error) => {
        console.log(error);
      });
    },
    showPathOfIntroduction() {
      this.get('pathOfIntroduction').clear();
      this.get('store').query('user', {
        'user_id': this.get('model.id'),
        'for_path': true,
        q: this.get('topic')
      }).then(users => {
        this.get('pathOfIntroduction').pushObjects(users.toArray());
      });
    }
  }
});
