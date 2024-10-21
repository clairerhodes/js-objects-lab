const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
// console.dir(pokemon, { maxArrayLength: null }) // prints entire data.js file
// normally console.dir() only shows first 100 items then `... x more items`

// ================================================================================ //

console.log();
console.log(`Excercise 1`);
console.log();


console.log(pokemon[58].name)
console.log()




// ================================================================================ //

console.log();
console.log(`Excercise 2`);
console.log(`There is no output for this excercise :D`);



// console.log(game)




// ================================================================================ //

console.log();
console.log(`Excercise 3`);
console.log();

/*

1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
// const difficulty = [`easy`, `med`, `hard`]; // create an array with options
game.difficulty = `med`
console.log(game.difficulty) // check and make sure that it prints difficulty:  `med` 





// ================================================================================ //

console.log();
console.log(`Excercise 4`);
console.log();

/*

1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// console.log(pokemon[6]) // checking that i selected squirtle correctly
game.party.push(pokemon[6])
console.log(game.party) // checking that i added squirtle to the game array inside of party






// ================================================================================ //

console.log();
console.log(`Excercise 5`);
console.log();

/*

1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[3], pokemon[65], pokemon[142]) 
console.log(game.party)






// ================================================================================ //

console.log();
console.log(`Excercise 6`);
console.log();

/*

1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
for(let i = 0; i < game.gyms.length; i++){ // setting up so you can test each property of your gyms array
    if (game.gyms[i].difficulty < 3) { // sets up parameters for what to look for
        game.gyms[i].completed = true // changes value to true // = means setting something, == same type, === absolute
    }
}

console.log(game.gyms)






// ================================================================================ //

console.log();
console.log(`Excercise 7`);
console.log();

/*
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/


game.party.splice(0, 1, pokemon[7]) // splice (index spot, how many deleting, what im adding)
console.log(game.party)






// ================================================================================ //

console.log();
console.log(`Excercise 8`);
console.log();

/*

1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((printName) => {
    console.log(printName.name)
})

console.log()







// ================================================================================ //

console.log();
console.log(`Excercise 9`);
console.log();

/*
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
pokemon.forEach((printName) => { 
    if (printName.starter === true) {
        console.log(printName.name)
    }
});








// ================================================================================ //

console.log();
console.log(`Excercise 10`);
console.log();

/*

Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj)
}

game.catchPokemon(pokemon[4])

console.log(game.party) // checking that I properly added pokemon to my party









// ================================================================================ //

console.log();
console.log(`Excercise 11`);
console.log();

/*
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj)
  game.items.forEach(item => {
    if(item.name === `pokeball`){
      item.quantity --
    }
  })
}
game.catchPokemon(pokemon[17]); // catching pokemon 18 and checking to see if pokeball - 1
console.log(game.party) // prints 









// ================================================================================ //

console.log();
console.log(`Excercise 12`);
console.log();

/*
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
for(let i = 0; i < game.gyms.length; i++){ // setting up so you can test each property of your gyms array
  if (game.gyms[i].difficulty < 6) { // sets up parameters for what to look for
      game.gyms[i].completed = true // changes value to true // = means setting something, == same type, === absolute
  }
}
console.log(game.gyms)





// ================================================================================ //

console.log();
console.log(`Excercise 13`);
console.log();

/*
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = () => {
  const gymTally = {
    completed: 0,
    incomplete: 0
  }
  game.gyms.forEach((count) => {
    if (count.completed === true) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  console.log(gymTally)
})
}
game.gymStatus()









// ================================================================================ //

console.log();
console.log(`Excercise 14`);
console.log();

/*
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = () => {
  console.log(game.party.length)
} // creates method in game that counts amount of pokemon in the party using length

game.partyCount() // printing # of pokemon in party





// ================================================================================ //

console.log();
console.log(`Excercise 15`);
console.log();

/*
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
for(let i = 0; i < game.gyms.length; i++){
  if (game.gyms[i].difficulty < 8){
      game.gyms[i].completed = true
  }
}
console.log(game.gyms)






// ================================================================================ //

console.log();
console.log(`Excercise 16`);
console.log();

/*
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game)








// ================================================================================ //

console.log();
console.log(`Excercise 17`);
console.log();

/*
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

//game.party.HP.sort();
//console.log(game.party);