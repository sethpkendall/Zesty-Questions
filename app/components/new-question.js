import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addQuestion(){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        details: this.get('details')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
