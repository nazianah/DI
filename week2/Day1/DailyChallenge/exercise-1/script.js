const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
bananaindex=fruits.indexOf("Banana")
if (bananaindex !== -1){
    fruits.splice(bananaindex,1)

}
console.log(fruits)
fruits.sort()
console.log(fruits)
fruits.push("kiwi");
console.log(fruits)
let fruitswithoutapple = fruits.filter(fruits => fruits !== "Apples");
console.log(fruitswithoutapple)
fruitswithoutapple.reverse()
console.log(fruitswithoutapple)

