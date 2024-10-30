function findSafestPath(dream) {
  const numRows = dream.length;
  const numCols = dream[0].length;
  const min_danger = Array(numRows)
    .fill()
    .map(() => Array(numCols).fill(0));

  // start from top left cell
  min_danger[0][0] = dream[0][0];

  // handle first row
  for (let col = 1; col < numCols; col++) {
    min_danger[0][col] = min_danger[0][col - 1] + dream[0][col];
  }

  // handle first column
  for (let row = 1; row < numRows; row++) {
    min_danger[row][0] = min_danger[row - 1][0] + dream[row][0];
  }

  // handle the rest
  for (let row = 1; row < numRows; row++) {
    for (let col = 1; col < numCols; col++) {
      min_danger[row][col] = Math.min(min_danger[row - 1][col], min_danger[row][col - 1]) + dream[row][col];
    }
  }

  return min_danger[numRows - 1][numCols - 1];
}
