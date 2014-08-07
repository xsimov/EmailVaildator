function startListening(btn){
  btn.addEventListener('click', function(event){
    parseText();
  });
}

var alMightyButton = document.getElementById('parse_order');

// startListening(alMightyButton);

function detector(inputString){
  var cases = ['at', 'AT'];
  var finalJudge = false;
  var judge;

  for i in cases{
    if (inputString.indexOf(case[i]) != -1){
       judge = false;
    } else {
       judge = true;
    }
    finalJudge = finalJudge || judge;
  }
  return finalJudge;
}