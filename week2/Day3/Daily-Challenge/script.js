// loop
let star = 6;
for (let i = 1; i <= star; i++) {
  console.log("*".repeat(i));
}
//nested loop
let star1 = 6;
for (let i = 1; i <= star1; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
    }