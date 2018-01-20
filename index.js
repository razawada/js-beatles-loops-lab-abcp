const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
};

function johnLennonFacts() {
   var array = [];
   var i = 0;
   while (array.length < facts.length) {
     array.push(facts[i] + "!!!");
     i++;
   }
   return array;
 }
