let sentance = 'This dinner is not that bad ! You cook well';
let wordNot = sentance.indexOf('not');
let wordBad = sentance.indexOf('bad');
if (wordNot < wordBad && wordNot != -1 && wordBad != -1) {
    let newSentance = sentance.slice(0, wordNot) + 'good' + sentance.slice(wordBad + 3);
    console.log(newSentance);
} else {
    console.log(sentance);
}