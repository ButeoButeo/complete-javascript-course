'use strict';

/* // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}; */



///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


const events = [new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64)

console.log(`An event happened, on avarege, every ${90/gameEvents.size} minutes`)

const time = [...gameEvents.keys()].pop();

console.log(time)

console.log(`An event happened, on avarege, every ${time/gameEvents.size} minutes`)

for(const [min,event]of gameEvents){
  const half = min <= 45 ? 'FIRST':'SECOND';
  console.log(`[${half}HALF]${min}:${event}`)

}
 */



// const airline = `TAP Air Portugal`;
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-2));

// const checkMiddleSeat = function(seat){
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if(s==='B'||s ==='E')
//   console.log('You got the middle seat 🥴');
//   else(console.log('You got lucky😎🍀'))

// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')



/* const airline = `TAP Air Portugal`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


//Fix capitalization in name

const passanger = 'jOnAS'; // Jonas
const passangerLower = passanger.toLowerCase()
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);



//comparing emails

const email = 'hello@jonas.io';
const loginEmail=' Hello@Jonas.IO \n'

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim()
console.log(lowerEmail)
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail)

console.log(email === normalizedEmail)

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', ('$').replace(',','.'))
console.log(priceUS)

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replace('door','gate'))

console.log(announcement.replace(/door/g,'gate'))

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'))

if (plane.startsWith('Airbus')&& plane.endsWith('neo')){
  console.log('Part of the New Airbus family')
}


//pratice exercice
const checkBaggage = function(items){
const baggage = items.toLowerCase();
if(baggage.includes('Knife')||baggage.includes('gun')){
  console.log('You are NOT allowed on board');
}else{
  console.log('Welcome aboard!')
}

}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection')

 */

/* 
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName)

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
namesUpper.push(n[0].toUpperCase() + n.slice(1))
  }
console.log(namesUpper.join(' '))
}


capitalizeName('jessica ann smith davis') 
capitalizeName('Jonas schmedtmann') 




///Padding 

const message = 'Go to gate 23!'
console.log(message.padStart(25,'+').padEnd(38, '🌕'));

console.log('Jonas'.padStart(25,'⭐️').padEnd(30, '⭐️'));


const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(883838383));
console.log(maskCreditCard(68845383845343383));
console.log(maskCreditCard('1231884538384534123123383'));



//Repeat

const message2 = 'Bad weather...All Departuers Delayed...\n'

console.log(message2.repeat(5))

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`)
}

planesInLine(5);
planesInLine(10);
planesInLine(20) */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener
('click', function(){
const text = document.querySelector('textarea').value;
const rows = text.split('\n');

for(const row of rows){
const [first, second] = row.toLowerCase().trim().split('_');
//console.log(row, first, second);
const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
console.log(output);
}
});