import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });

  },
  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    updateToDb(question, params){
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.set('updateQuestionForm', false);
      this.transitionTo('question');
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question');
    },
    voteUp(answer){
      var votes = answer.get('votes');
      votes += 1;
      answer.set('votes', votes);
      answer.save();
    },
    voteDown(answer){
      var votes = answer.get('votes');
      votes -= 1;
      answer.set('votes', votes);
      answer.save();
    }
  }
});
