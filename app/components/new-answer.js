import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions:{
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    saveAnswer(){
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        votes: 0
      };
      this.set('author', '');
      this.set('content', '');
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    },
    cancelNew(){
      this.set('addNewAnswer', false);
    }
  }
});
