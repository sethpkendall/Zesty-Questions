import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    voteUp(answer){
      this.sendAction("voteUp", answer)
    }
  }
});
