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

function johnLennonFacts(array) {
  var excitedFacts = [];
  var i = 0
  while (i < array.length) {
    excitedFacts.push(array[i] + "!!!")
  i += 1;
  }

  return excitedFacts;
}

console.log (johnLennonFacts(["foo", "bar"]));
