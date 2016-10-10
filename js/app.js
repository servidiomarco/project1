$(function() {
  $("#plate_1").flip();
  $("#plate_2").flip();
  $("#plate_3").flip();
  $("#plate_4").flip();
  $("#plate_5").flip();
  $("#plate_6").flip();
  $("#plate_7").flip();
  $("#plate_8").flip();
  $("#plate_9").flip();
  $("#plate_10").flip();
  $("#plate_11").flip();
  $("#plate_12").flip();
  $("#italy_1").flip();
  $("#italy_2").flip();
  $("#italy_3").flip();
  $("#italy_4").flip();
  $("#italy_5").flip();
  $("#italy_6").flip();

  var $food = $('.food');
  var choice_1 = null;
  var choice_2 = null;
  var result_neg = "It's not a match!";

  // (function(i) {
  $food.on('click', function() {
    var food_selection = $(this);
    if (!choice_1) {
      choice_1 = food_selection;
    } else {
      choice_2 = food_selection;
    }

    if (choice_2 && choice_1.data('food') === choice_2.data('food')) {
      console.log(choice_2);
      $('#italy_' + choice_2.data('italy')).flip(true);
      choice_1 = null;
      choice_2 = null;
    } else if (choice_2 && choice_1.data('food') !== choice_2.data('food')) {
      console.log('not a match');
      setTimeout(function() {
        choice_1.flip(false);
        choice_2.flip(false);
        choice_1 = null;
        choice_2 = null;
      }, 1000);
    }
  });
});
