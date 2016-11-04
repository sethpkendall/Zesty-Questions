import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),
  actions:{
    voteUp(answer){
      this.sendAction("voteUp", answer)
    },
    voteDown(answer){
      this.sendAction("voteDown", answer)
    }
  }
});
