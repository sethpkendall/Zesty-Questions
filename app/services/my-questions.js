import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  add: function(question){
    this.get('questions').pushObject(question);
  },
});
