const diceImages = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
  ];
  diceImages[0].src = "images/dice1.png";
  diceImages[1].src = "images/dice2.png";
  diceImages[2].src = "images/dice3.png";
  diceImages[3].src = "images/dice4.png";
  diceImages[4].src = "images/dice5.png";
  diceImages[5].src = "images/dice6.png";

function rollDice() {
    const player1Roll = Math.floor(Math.random() * 6);
    const player2Roll = Math.floor(Math.random() * 6);

    document.querySelector("#dice1").src = diceImages[player1Roll].src;
    document.querySelector("#result1").innerText = `Player 1 rolled a ${player1Roll + 1}`;
    document.querySelector("#dice2").src = diceImages[player2Roll].src;
    document.querySelector("#result2").innerText = `Player 2 rolled a ${player2Roll + 1}`;

    if (player1Roll > player2Roll) {
      document.querySelector("#finalResult").innerText = "Player 1 wins!";
    } else if (player2Roll > player1Roll) {
      document.querySelector("#finalResult").innerText = "Player 2 wins!";
    } else {
      document.querySelector("#finalResult").innerText = "Draw";
    }
  }

  window.onload = rollDice;