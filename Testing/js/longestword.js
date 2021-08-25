// gets a sentence, checks for longest word without including symbols. returns longest word.

const longestWord = (sentence)=> {

    function islettervalid (letter) {
        return "A".charCodeAt() <= letter.charCodeAt() && letter.charCodeAt() <= "Z".charCodeAt() || "a".charCodeAt() <= letter.charCodeAt() && letter.charCodeAt() <= "z".charCodeAt();
    }

    splitsentence = sentence.split(" ");

    var longestwordlength = 0;
    var longestwordfinal = "";

    for (word in splitsentence) {

        var currentwordlength = 0;

        for (letter in splitsentence[word]) {
            if (islettervalid(splitsentence[word][letter])) {
                currentwordlength++;
            }
        }

        if (currentwordlength > longestwordlength) {
            longestwordfinal = splitsentence[word];
            longestwordlength = currentwordlength;
        }
    }
    console.log(longestwordfinal);
}

longestWord("I am not sure if this works");
