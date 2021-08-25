
let vowels = ["a", "e", "y", "o", "u", "i"];
Array.prototype.contains = function (object) {
  return this.indexOf(object) > -1;
}

Object.prototype.uppercaseit = function () {
  let splitword = word.split('');

  for (i=0; i < splitword.length; i++) {

    if (vowels.contains(splitword[i])) {
      splitword[i] = splitword[i].toUpperCase();
    }
  }

  word = splitword.join("");
  return word;

}

word = "i am making a test again woooooooot!"

console.log(word.uppercaseit());
console.log(word.toLowerCase());
console.log(word);