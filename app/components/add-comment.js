import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment(post) {
      var params = {
        comment: this.get('comment'),
        user: this.get('user'),
        post: this.get('post')
      };

      this.sendAction('addComment', post, params);
    }
  }
});