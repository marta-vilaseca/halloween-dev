function battleHorde(zombies, humans) {
  let zombieScore = 0;
  let humanScore = 0;

  for (let i = 0; i < zombies.length; i++) {
    zombieScore += +zombies[i];
    humanScore += +humans[i];

    if (zombieScore > humanScore) {
      zombieScore -= humanScore;
      humanScore = 0;
    } else if (humanScore > zombieScore) {
      humanScore -= zombieScore;
      zombieScore = 0;
    } else {
      zombieScore = 0;
      humanScore = 0;
    }
  }

  if (zombieScore > humanScore) {
    return zombieScore + "z";
  } else if (humanScore > zombieScore) {
    return humanScore + "h";
  } else {
    return "x";
  }
}
