document.addEventListener('DOMContentLoaded', function() {
  var food = document.querySelectorAll('.food');
  var choice_1 = '';
  var choice_2 = '';


  var result_neg = "It's not a match!";

  for(var i = 0; i<food.length;i++) {
    // (function(i) {
    food[i].addEventListener('click', function() {
      console.log("This button has an index of : " +i+ "and an ID of " + this.getAttribute('data-food') );
      var food_selection = this.getAttribute('data-food');
      if (choice_1 === '') {
        choice_1 = food_selection;
      } else {
        choice_2 = food_selection;
      }
      console.log('choice1', choice_1, 'choice2', choice_2);
        if (choice_1 == choice_2) {
        console.log('match');
        choice_1 = '';
        choice_2 = '';
      } else if (choice_2 !== '' && choice_1 !== choice_2) {
        console.log('not a match');
        choice_1 = '';
        choice_2 = '';
      }
    });
  }
});
