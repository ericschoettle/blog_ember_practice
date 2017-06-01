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
        var comment_deletions = entry.get('comments').map(function(review) {
          review.destroyRecord();
        })
        Ember.RSVP.all(comment_deletions).then(function() {
          entry.destroyRecord();
        })
        entry.destroyRecord()
        this.transitionTo('index');
      }
    },

    saveComment(params) {
      console.log(params)
      var newComment = this.store.createRecord('comment', params);
      var entry = params.entry;
      entry.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return entry.save();
      });
    },

    destroyComment(comment) {
     comment.destroyRecord();
    },

    updateComment(comment, params) {
      debugger
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      return comment.save();
    }
  }
});
