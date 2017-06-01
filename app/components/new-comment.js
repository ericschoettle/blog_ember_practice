import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(){
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        body: this.get('body'),
        entry: this.get('entry')
      };
      this.sendAction('saveComment', params);
    }
  }
});
