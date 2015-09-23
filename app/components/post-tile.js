import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },

    destroyPost(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
