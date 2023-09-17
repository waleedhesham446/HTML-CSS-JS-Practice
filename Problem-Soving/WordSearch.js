export default class WordSearch {
  constructor(letterGrid) {
    this.letterGrid = letterGrid;
  }

  transposeArray(array) {
    // Get the number of rows and columns
    const numRows = array.length;
    const numCols = array[0].length;
  
    // Create a new array with transposed dimensions
    const transposedArray = new Array(numCols);
    for (let i = 0; i < numCols; i++) {
      transposedArray[i] = new Array(numRows);
    }
  
    // Transpose the elements
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        transposedArray[j][i] = array[i][j];
      }
    }
  
    return transposedArray;
  }

  find(words) {
    // TO-DO: Implement searching for specific words in the letterGrid
    const result = {};
    const letterGridChar = this.letterGrid.map((row) => row.split(''));
    const letterGridT = this.transposeArray(letterGridChar).map((row) => row.join(''));
    const n = this.letterGrid.length;
    const m = letterGridT.length;
    words.forEach((word) => {
      let start = null;
      let end = null;
      for (let i = 0; i < n; i++) {
        if (this.letterGrid[i].includes(word)) {
          const s = this.letterGrid[i].indexOf(word);
          start = [i+1, s+1];
          end = [i+1, s + word.length - 1 +1];
          break;
        } else if (this.letterGrid[i].split('').reverse().join('').includes(word)) {
          const s = m - this.letterGrid[i].split('').reverse().join('').indexOf(word) - 1;
          start = [i+1, s + 1];
          end = [i+1, s - word.length + 1 + 1];
          break;
        }
      }
      if (!start && !end) {
        for (let i = 0; i < m; i++) {
          if (letterGridT[i].includes(word)) {
            const s = letterGridT[i].indexOf(word);
            start = [s+1, i+1];
            end = [s + word.length - 1 + 1, i + 1];
            break;
          } else if (letterGridT[i].split('').reverse().join('').includes(word)) {
            const s = n - letterGridT[i].split('').reverse().join('').indexOf(word) - 1;
            start = [s+1, i+1];
            end = [s - word.length + 1 + 1, i+1];
            break;
          }
        }
      }

      if (start && end) {
        result[word] = { start, end };
      } else {
        result[word] = undefined;
      }
    });

    return result;
  }
}
