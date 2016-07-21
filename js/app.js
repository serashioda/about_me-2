'use script';

var userName = prompt('What is your name?');
console.log(userName);

// guessing game

alert('Hi, ' + userName + ', welcome! Let\'s see if you can answer some questions about me! Please answer yes/no or y/n.');

var correctAnswers = 0;

function game() {
  g1();
  g2();
  g3();
};

function g1() {
  var answer1 = prompt('Is Adrian from Montreal, QC?').toUpperCase();
  console.log(answer1);
  if (answer1 === 'NO' || answer1 === 'N') {
    alert('You got it right, ' + userName + '! I am actually from Vancouver, BC.');
    correctAnswers++;
  } else {
    alert('Ew, ' + userName + ', you got it wrong. I\'m from Vancouver, BC.');
  }

  var answer2 = prompt('Does Adrian enjoy skateboarding?').toUpperCase();
  console.log(answer2);
  if (answer2 === 'YES' || answer2 === 'Y') {
    alert('I sure do, ' + userName + '!');
    correctAnswers ++;
  } else {
    alert('Actually, I do! I used to skate in highschool all the time.');
  }

  var answer3 = prompt('Did Adrian eat a bagel for lunch on July 19, 2016?').toUpperCase();
  console.log(answer3);
  if (answer3 === 'YES' || answer3 === 'Y') {
    alert('Yep! You\'re correct, ' + userName + '! It was delicious!');
    correctAnswers ++;
  } else {
    alert('You\'re wrong. I actually went to some place at the Seattle Center.');
  }

  var answer4 = prompt('Did Adrian play pee-wee hockey when he was a kid?').toUpperCase();
  console.log(answer4);
  if (answer4 === 'YES' || answer4 === 'Y') {
    alert('Yes, that\'s right. Would have stuck with it if I didn\'t suck so bad.');
    correctAnswers ++;
  } else {
    alert('No, I did. Something I honestly regret giving up so early on! Maybe I could have been the shortest player in the NHL.');
  }

  var answer5 = prompt('Did Adrian play guitar for a band during high school?').toUpperCase();
  console.log(answer5);
  if (answer5 === 'NO' || answer5 === 'N') {
    alert('You\'re right, ' + userName + '! I actually played drums in high school.');
    correctAnswers ++;
  } else {
    alert('Nope! I actually played drums for a band in high school.');
  }
};

function g2() {
  var age = 29;
  for (var i = 0; i < 4; i++) {
    var ageAnswer = parseInt(prompt('How old is Adrian?'));
    console.log('User response is ' + ageAnswer + ' to question.');
    if (ageAnswer === age) {
      alert('You\'re right! Adrian is ' + age + ' years old!');
      console.log(ageAnswer);
      correctAnswers++;
      break;
    } else if (ageAnswer > age) {
      alert('You guessed too high! Guess again.');
      console.log(ageAnswer);
    } else if (ageAnswer < age) {
      alert('You guess too low! Try again.');
      console.log(ageAnswer);
    } else if (isNaN(ageAnswer) === true) {
      alert('That is not a number. Try again!');
    };
    if ((i === 3) && (ageAnswer !== age)) {
      alert('You ran out of guesses. Soary aboot it!');
      console.log(ageAnswer);
    }
  }
};

function g3() {
  var pokemon = ['pikachu', 'zubat', 'drowzee', 'onyx', 'charmander', 'snorlax'];
  var guesses = 0;

  while (guesses < 6) {
    var pokeAnswer = prompt('What Pokemon did I catch? All you need to do is guess 1 of the Pokemon I caught.').toLowerCase();
    for (var i = 0; i < pokemon.length; i++) {
      if (pokeAnswer === pokemon[i]) {
        alert('You nailed it! Here\'s a list of pokemon I caught: ' + pokemon);
        console.log(pokeAnswer);
        correctAnswers ++;
        userCorrect = true;
        guesses = 6;
        break;
      }
    }
    if (guesses !== 6) {
      alert('You got it wrong! Sorry, try again!');
      console.log(pokeAnswer);
    }
    guesses++;
  }
  if (userCorrect === false) {
    alert('You guess too many times! Here\'s a list of the pokemon I caught: ' + pokemon);
    console.log(pokeAnswer);
  }
};

game();

alert('You scored a total of ' + correctAnswers + ' out of 7 answers correctly.');






// lab assignment 1 on day 3



// pokemon guessing game: lab assignment 2 on day 3
//
