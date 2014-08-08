function startListening(btn, orig, dest){
  btn.addEventListener('click', function(event){
    dest.innerHTML = converter(orig.value);
  });
}
var originalContainer = document.getElementById('input-text');
var finalDestination = document.getElementById('clean-text');
var button = document.getElementById('clean-button');

startListening(button, originalContainer, finalDestination);

function converter(word) {

//slice per spaces still to do

  if (atExistsButNotInTheBegining(word) &&
    atIsNotInTheEnd(word) &&
    dotIsNotInTheEnd(word) &&
    dotExistsButNotInTheBegining(word) &&
    thereIsADotAfterTheAt(word)
    ) {
    var output = word.replace('AT', '@').replace('DOT', '.');
    return output;
  }
  return word;

  function atExistsButNotInTheBegining(word){
    return ((word.indexOf('AT') > 0) || (word.indexOf('@') > 0));
  }

  function dotExistsButNotInTheBegining(word){
    return ((word.indexOf('.') > 0) || (word.indexOf('DOT') > 0));
  }

  function atIsNotInTheEnd(word){
    var AtToken = "AT";
    var AtSymbol = "@";
    return ((word.indexOf(AtToken) < (word.length - AtToken.length)) &&
        (word.indexOf(AtSymbol) < (word.length - AtSymbol.length)));
  }

  function dotIsNotInTheEnd(word){
    var AtToken = "AT";
    var AtSymbol = "@";
    return ((word.indexOf('.') < (word.length - 1)) &&
        (word.indexOf('DOT') < (word.length - 3)));
  }

  function thereIsADotAfterTheAt (word) {
    var passingText = word.replace('AT', '@').replace('DOT', '.');
    var atPosition = passingText.indexOf('@');
    var halfString = passingText.slice(atPosition + 1);
    if (halfString.indexOf('.') > 0) {
      return true;
    };
    return false;
  }
}