let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

 let newparty = party.filter((dish)=>{
   return dish.calories !== 15;
})

console.log(newparty)

  let totalCalories = newparty.reduce(function(sum,calories){
    return sum + calories.calories;
    
  },0)

  console.log(totalCalories);



