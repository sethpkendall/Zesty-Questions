import Ember from 'ember';

export default Ember.Component.extend({
  updatingQuestionForm: false,
  actions:{
    updateQuestionForm() {
      this.set('updatingQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
