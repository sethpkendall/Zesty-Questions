import Ember from 'ember';

export function noAnswers(params) {
  var answer = params[0];
  if (answer.content.length === 0) {
    return Ember.String.htmlSafe('<span style="color:white"><span class="glyphicon glyphicon-alert"></span> No Answers yet. Click to add one now:</span>');
  }
}

export default Ember.Helper.helper(noAnswers);
