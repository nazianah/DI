class Video {
    constructor(title, uploader, seconds) {
        this.title = title;
        this.uploader = uploader;
        this.seconds = seconds;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.seconds} seconds of ${this.title}!`);
    }
}

let Video1 = new Video('The Matrix', 'Thomas Anderson', 600);
Video1.watch();

let Video2 = [
    new Video('The Matrix', 'Thomas Anderson', 600),
    new Video('The Matrix Reloaded', 'Thomas Anderson', 600),
    new Video('The Matrix Revolutions', 'Thomas Anderson', 600),
    new Video('The Matrix 4', 'Thomas Anderson', 600),
    new Video('The Matrix 5', 'Thomas Anderson', 600),
];
{
    for (let i = 0; i < Video2.length; i++) {
        Video2[i].watch();
    }
}
 
