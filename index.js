// // Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy Bithday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
// }
// return gifts;
// }
// wrapGifts(gifts);

function writeCards(nameArray, event){
    let thankYouCards = [];
    for (let i = 0; i < nameArray.length; i++){
     thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
}
return thankYouCards;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
    // let number = 10;
    while(number > 0){
        console.log (number);
        number -= 1
    }
console.log (number);
}
