// gets a sentence, checks for longest word without including symbols. returns longest word.

const longestWord = (sentence)=> {

    function islettervalid (letter) {
        return "A".charCodeAt(0) <= letter.charCodeAt() && letter.charCodeAt() <= "Z".charCodeAt(0) || "a".charCodeAt(0) <= letter.charCodeAt() && letter.charCodeAt() <= "z".charCodeAt(0);
    }
    let splitsentence = sentence.split(" ");
    let longestwordlength = 0;
    for (word in splitsentence) {

        let currentwordlength = 0;
        let currentword = splitsentence[word];
        for (letter in currentword) {
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

longestWord("I am not sure if this works probably does");
