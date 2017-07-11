

  var banner = document.getElementById('banner');

  var userImg = document.getElementById('userImg');
  var computerImg = document.getElementById('computerImg')
  
  var compChoice = '';

  var userCount = 0;
  var compCount = 0;
  
  function compDecision () {
    var compAssign = Math.floor(Math.random() * 3 + 1);
      if (compAssign == 1) {
        compChoice = 'Rock';
        computerImg.src = 'img/rockRight.png';
      } else if (compAssign == 2) {
        compChoice = 'Paper';
        computerImg.src = 'img/paperRight.png';
      } else {
        compChoice = 'Scissors'
        computerImg.src = 'img/scissorsRight.png'
      }
  }

  function play (choice) {
      userChoice = choice;
      compDecision();
      
      if (userChoice == 'Rock') {
        userImg.src = 'img/rockLeft.png';
      } else if (userChoice == 'Paper') {
        userImg.src = 'img/paperLeft.png';
      } else {
        userImg.src = 'img/scissorsLeft.png';
      }

      if (userChoice == compChoice) {
          showBanner(1);
      } else if (userChoice == 'Rock' && compChoice == 'Paper') {
          showBanner(2);
      } else if (userChoice == 'Rock' && compChoice == 'Scissors') {
          showBanner(3);
      } else if (userChoice == 'Paper' && compChoice == 'Rock') {
          showBanner(3);
      } else if (userChoice == 'Paper' && compChoice == 'Scissors') {
          showBanner(2);
      } else if (userChoice == 'Scissors' && compChoice == 'Rock') {
          showBanner(2);
      } else if (userChoice == 'Scissors' && compChoice == 'Paper') {
          showBanner(3);
      } 
  }

  function showBanner (num) {      

    if (num == 1) {
      banner.classList.remove('hidden');
      banner.innerHTML = "TIE!";
    } else if (num == 2) {
      banner.classList.remove('hidden');
      banner.innerHTML = "COMPUTER WINS!";
      compCount += 1;
      computerWins.innerHTML = compCount;
    } else {
      banner.classList.remove('hidden');
      banner.innerHTML = "USER WINS!";
      userCount += 1;
      userWins.innerHTML = userCount;
    }   
  }
