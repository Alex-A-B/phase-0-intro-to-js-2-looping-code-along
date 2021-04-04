// Code your solutions in this file

// "let age = 30" is the initialisation of the variable
// "age < 40" is the condition
// "age++" is the iteration 
// when run (node index.js) displays incrementing age from 30 - 39 (as 40 is false) in the console.log

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
  }


// Using 'for' with Arrays
// let i = 0 is the initialisation of the function
// i < gifts.length; is the condition this means it less than the total length of the gifts array.
// i++ is the iteration 

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 


// bit stuck - slack indicates empty array is required to fill up
// think I need to push the ty message to an array

function writeCards(names, event) {
    let writtenCards = []
    for (let i = 0; i < names.length; i++) {
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    console.log(writtenCards)
    return writtenCards;
}

writeCards(["Jimmy", "Barney", "Trevor"], "surprise")

function countDown(startNumber) {
    while (startNumber > 0) {
        console.log(startNumber);
        startNumber -= 1;
    }
    console.log(startNumber)
}

countDown(10)