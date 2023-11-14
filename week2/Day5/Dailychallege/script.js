let userinput = parseInt(prompt("Enter a number"));
function song (userinput){
    for ( let i = userinput;i > 0 ;i--){
        let current = i;
        let next = i - 1;
        if ( current===0){
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

        }
        else if (current===1){
            console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");

        }
        else {
            console.log(`${current } bottles of beer on the wall, ${current} bottles of beer. Take one down and pass it around, ${next} bottles of beer on the wall.`);

        }
        if (next ===0){
            console.log(`take one down and pass it around, no more bottles of beer on the wall.`);

        }
        else if (next ===1){
            console.log(`take one down and pass it around, ${next} bottle of beer on the wall.`);

        }
     else {
        console.log(`take one down and pass it around, ${next} bottles of beer on the wall.`);
    
    }
}
}
song(userinput);