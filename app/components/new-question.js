import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addQuestion(){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
