const makeAllCaps = (words) => new Promise((resolve, reject) => {
    if (Array.isArray(words) && words.every(word => typeof word === 'string') && words.length >= 4) {
        const sortedWords = words.map(word => word.toUpperCase()).sort();
        resolve(sortedWords);
    } else {
        reject("Invalid input. All elements in the array must be strings, array length must be greater than 4.");
    }
});

// Test cases
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));
      
makeAllCaps(["apple", "pear", "banana"])
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((result) => console.log(result))
    .catch(error => console.log(error));