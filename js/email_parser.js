function startListening(btn, orig, dest){
  btn.addEventListener('click', function(event){
    dest.innerHTML = converter(orig.value);
  });
}
var originalContainer = document.getElementById('input-text');
var finalDestination = document.getElementById('clean-text');
var button = document.getElementById('clean-button');

startListening(button, originalContainer, finalDestination);

function converter(paragraph) {
  if (atExistsButNotInTheBegining(paragraph) &&
    atIsNotInTheEnd(paragraph) &&
    dotIsNotInTheEnd(paragraph) &&
    dotExistsButNotInTheBegining(paragraph) &&
    thereIsADotAfterTheAt(paragraph)) {
    var output = paragraph.replace('AT', '@').replace('DOT', '.');
    return output;
  }
  return paragraph;

  function atExistsButNotInTheBegining(paragraph){
    return ((paragraph.indexOf('AT') > 0) || (paragraph.indexOf('@') > 0));
  }

  function dotExistsButNotInTheBegining(paragraph){
    return ((paragraph.indexOf('.') > 0) || (paragraph.indexOf('DOT') > 0));
  }

  function atIsNotInTheEnd(paragraph){
    var AtToken = "AT";
    var AtSymbol = "@";
    return ((paragraph.indexOf(AtToken) < (paragraph.length - AtToken.length)) &&
        (paragraph.indexOf(AtSymbol) < (paragraph.length - AtSymbol.length)));
  }

  function dotIsNotInTheEnd(paragraph){
    var AtToken = "AT";
    var AtSymbol = "@";
    return ((paragraph.indexOf('.') < (paragraph.length - 1)) &&
        (paragraph.indexOf('DOT') < (paragraph.length - 3)));
  }

  function thereIsADotAfterTheAt (paragraph) {
    return ((paragraph.indexOf('AT') < paragraph.indexOf('.')) ||
    (paragraph.indexOf('AT') < paragraph.indexOf('DOT')) ||
    (paragraph.indexOf('@') < paragraph.indexOf('DOT'))); //!!!!!!!!
  }
}