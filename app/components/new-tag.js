import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTag(){
      var params = {
        name: this.get('name'),
        entry: this.get('entry'),
      };
      this.sendAction('saveTag', params);
    }
  }
});
