function findSafestPath(dream) {
  const numRows = dream.length;
  const numCols = dream[0].length;

  // Create a 2D array to store the minimum danger values
  const minDanger = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  // Initialize the starting point
  minDanger[0][0] = dream[0][0];

  // Fill the first row
  for (let col = 1; col < numCols; col++) {
    minDanger[0][col] = minDanger[0][col - 1] + dream[0][col];
  }

  // Fill the first column
  for (let row = 1; row < numRows; row++) {
    minDanger[row][0] = minDanger[row - 1][0] + dream[row][0];
  }

  // Fill the rest of the grid
  for (let row = 1; row < numRows; row++) {
    for (let col = 1; col < numCols; col++) {
      minDanger[row][col] = Math.min(minDanger[row - 1][col], minDanger[row][col - 1]) + dream[row][col];
    }
  }

  // Return the result at the bottom-right corner
  return minDanger[numRows - 1][numCols - 1];
}
