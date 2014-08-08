//spec helpers

var originalContainer = document.getElementById('input-text');
var finalDestination = document.getElementById('clean-text');
var button = document.getElementById('clean-button');

function the_user_puts_some_input(text){
  originalContainer.value = text;
}

function the_user_asks_for_the_conversion(){
  button.click();
}

function the_app_outputs_the_result(text){
  expect(finalDestination.value).toEqual(text);
}