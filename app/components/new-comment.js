import Ember from 'ember';

export default Ember.Component.extend({
  newCommentForm: false,
  actions: {
    commentFormShow(){
      this.set('newCommentForm', true);
    },
    saveComment(){
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        body: this.get('body'),
        entry: this.get('entry')
      };
      this.set('newCommentForm', false);
      this.sendAction('saveComment', params);
    }
  }
});
