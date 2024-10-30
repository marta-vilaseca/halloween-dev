function createMagicPotion(potions, target) {
  const result = [];
  let finalResult;
  let smallerIndex = potions.length;

  for (let i = 0; i < potions.length - 1; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      let sum = potions[i] + potions[j];

      if (sum === target) {
        let match = [i, j];
        result.push(match);
      }
    }
  }

  result.forEach((element) => {
    if (element[1] < smallerIndex) {
      smallerIndex = element[1];
      finalResult = element;
    }
  });

  return finalResult || undefined;
}
