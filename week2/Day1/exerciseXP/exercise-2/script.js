const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = "You have watched " + myWatchedSeriesLength + " series : " + myWatchedSeries;
console.log(myWatchedSeriesSentence);
// 2. Add a new item to the array called “friends”.
myWatchedSeries.splice(myWatchedSeries.indexOf("the big bang theory"), 1, "friends");
console.log(myWatchedSeries);
myWatchedSeries.push("the picture of Dorian Gray");
myWatchedSeries.unshift("faulty towers");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);
let summer =myWatchedSeries.find(series => series === "money heist");
if (summer) {
    let thirdletter = summer[2];
    console.log(thirdletter);
}

console.log(myWatchedSeries);