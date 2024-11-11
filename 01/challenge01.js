function createMagicPotion(potions, target) {
  const checkedPotions = new Map();

  for (const [index, potion] of potions.entries()) {
    const matchingPotion = target - potion;

    if (checkedPotions.has(matchingPotion)) {
      return [checkedPotions.get(matchingPotion), index];
    }

    checkedPotions.set(potion, index);
  }

  return undefined;
}
