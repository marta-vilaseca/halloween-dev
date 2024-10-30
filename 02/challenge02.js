function battleHorde(zombies, humans) {
    const zombiesArr = zombies.split('');
    const humansArr = humans.split('');
  
    let zombieAccum = 0;
    let humanAccum = 0;
  
    for (let i = 0; i < zombiesArr.length; i++) {
      let zombieP = +zombiesArr[i] + zombieAccum;
      let humanP = +humansArr[i] + humanAccum; 
      if (zombieP > humanP) {
        zombieAccum = zombieP - humanP;
        humanAccum = 0;
      }
      else if (humanP > zombieP) {
        humanAccum = humanP - zombieP;
        zombieAccum = 0;
      } else {
        humanAccum = 0;
        zombieAccum = 0;
      }
    }
  
    if (zombieAccum > humanAccum) {
      return zombieAccum + 'z';
    } else if (humanAccum > zombieAccum) {
      return humanAccum + 'h';
    } else {
      return 'x'
    }
    
  }
  
  