'use script';

var userName = prompt('What is your name?');
console.log(userName);

alert('Hi, ' + userName + ', welcome! Let\'s see if you can answer some questions about me! Please answer yes/no or y/n.');

var answer1 = prompt('Is Adrian from Montreal, QC?').toUpperCase();
console.log(answer1);
if (answer1 === 'NO' || answer1 === 'N') {
  alert('You got it right, ' + userName + '!');
} else {
  alert('Ew, ' + userName + ', you got it wrong. I\'m from Vancouver, BC.');
}

var answer2 = prompt('Does Adrian enjoy skateboarding?').toUpperCase();
console.log(answer2);
if (answer2 === 'YES' || answer2 === 'Y') {
  alert('I sure do, ' + userName + '!');
} else {
  alert('Actually, I do! I used to skate in highschool all the time.');
}

var answer3 = prompt('Did Adrian eat a bagel for lunch on July 19, 2016?').toUpperCase();
console.log(answer3);
if (answer3 === 'YES' || answer3 === 'Y') {
  alert('Yep! You\'re correct, ' + userName + '! It was delicious!');
} else {
  alert('Nope. You\'re wrong, ' + userName + '. I actually went to some place at the Seattle Center.');
}

var answer4 = prompt('Did Adrian play pee-wee hockey when he was a kid?').toUpperCase();
console.log(answer4);
if (answer4 === 'YES' || answer4 === 'Y') {
  alert('Yes, that\'s right. Would have stuck with it if I didn\'t suck so bad.');
} else {
  alert('No, I did. Something I honestly regret giving up so early on! Maybe I could have been the shortest player in the NHL.');
}

var answer5 = prompt('Did Adrian play guitar for a band during high school?').toUpperCase();
console.log(answer5);
if (answer5 === 'NO' || answer5 === 'N') {
  alert('You\'re right, ' + userName + '! I actually played drums in high school.');
} else {
  alert('Nope! I actually played drums for a band in high school.');
}
