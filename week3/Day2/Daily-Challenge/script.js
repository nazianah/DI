document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from input fields
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;

    // Check if any input is empty
    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        alert("Please fill in all the blanks!");
        return;
    }

    // Generate the story
    let story = `${person} went to ${place} and saw a ${adjective} ${noun}. ${person} decided to ${verb} with it.`;

    // Display the story
    document.getElementById("story").textContent = story;
});

document.getElementById("shuffle-button").addEventListener("click", function() {
    // Array of different stories
    let stories = [
        "The quick brown fox jumps over the lazy dog.",
        "A journey of a thousand miles begins with a single step.",
        "To be or not to be, that is the question."
    ];

    // Shuffle the array
    for (let i = stories.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stories[i], stories[j]] = [stories[j], stories[i]];
    }

    // Display a random story from the array
    document.getElementById("story").textContent = stories[0];
});