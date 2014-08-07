function startListening(btn){
  btn.addEventListener('click', function(event){
    parseText();
  });
}

var alMightyButton = document.getElementById('parse_order');

// startListening(alMightyButton);

function detector(inputString){
  return inputString.indexOf("at") != -1;
}