import Ember from 'ember';

export default Ember.Component.extend({
  addNewEntry: false,
  actions: {
    entryFormShow(){
      this.set('addNewEntry', true);
    },
    saveEntry(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
      };
      this.set('addNewEntry',false);
      this.sendAction('saveEntry',params);
    }
  }
});
