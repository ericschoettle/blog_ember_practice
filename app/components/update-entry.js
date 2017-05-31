import Ember from 'ember';
export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateFormShow() {
      this.set('updateEntryForm', true);
    },
    update(entry) {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        body: this.get('body') ? this.get('body') : "",
        date: this.get('date') ? this.get('date') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('updateEntryForm', false);
      this.sendAction('update', entry, params);
    }
  }
});
