import Ember from 'ember';

export default Ember.Component.extend({
  myQuestions: Ember.inject.service(),
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
      this.set('author', '');
      this.set('content', '');
      this.set('notes', '');
      this.set('updatingQuestionForm', false);
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    save(question) {
      this.get('myQuestions').add(question);
    },
    cancelUpdate() {
      this.set('updatingQuestionForm', false);
    }
  }
});
