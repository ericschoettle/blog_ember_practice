import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },

  actions: {
    update(entry, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          entry.set(key,params[key]);
        }
      });
      entry.save();
    },

    delete(entry) {
      if (confirm('Are you sure you want to delete this entry?')) {
        entry.destroyRecord()
        this.transitionTo('index');
      }
    }
  }
});
