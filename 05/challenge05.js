function escapePyramidHead(room) {
  // Helper function to find start and end positions
  function findPosition(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
      const col = matrix[row].indexOf(target);
      if (col !== -1) return [row, col];
    }
    return null;
  }

  const start = findPosition(room, "▲");
  const end = findPosition(room, "T");

  if (!start || !end) return -1; // Return -1 if start or end is not found

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  const rows = room.length;
  const cols = room[0].length;

  const queue = [[start[0], start[1], 0]];
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (row === end[0] && col === end[1]) {
      return distance;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the new cell is within the grid bounds and unvisited
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && room[newRow][newCol] !== "#" && !visited.has(`${newRow},${newCol}`)) {
        visited.add(`${newRow},${newCol}`);
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  return -1; // Return -1 if no path is found
}
