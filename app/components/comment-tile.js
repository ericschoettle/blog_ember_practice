import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    delete(comment){
      this.sendAction('destroyComment', comment);
    },
    showUpdateComment() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      debugger
      var params = {
        title: this.get('updateTitle'),
        user: this.get('updateUser'),
        body: this.get('updateBody'),
      };
      this.set('updateCommentForm', false);
      console.log(params)
      this.sendAction('updateComment', comment, params);
    }
  }
});
