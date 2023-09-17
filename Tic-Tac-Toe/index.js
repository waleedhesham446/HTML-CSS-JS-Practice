// TO-DO: Implement game below

function getTiles(){
    return document.getElementsByClassName('tile')
}
const tiles = getTiles()

function getPlayers(){
    return document.getElementsByClassName('player')
}
const players = getPlayers()

function transposeArray(array) {
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

function checkWinner(){
    const winningCombos = [
        [tiles[0].innerHTML, tiles[1].innerHTML, tiles[2].innerHTML, tiles[3].innerHTML],
        [tiles[4].innerHTML, tiles[5].innerHTML, tiles[6].innerHTML, tiles[7].innerHTML],
        [tiles[8].innerHTML, tiles[9].innerHTML, tiles[10].innerHTML, tiles[11].innerHTML],
        [tiles[12].innerHTML, tiles[13].innerHTML, tiles[14].innerHTML, tiles[15].innerHTML],
    ]
    const winningCombosT = transposeArray(winningCombos);
    let winner = null
    winningCombos.forEach(combo => {
        if (combo[0] && combo[0] === combo[1] && combo[0] === combo[2] && combo[0] === combo[3]){
            winner = combo[0]
        }
    });
    winningCombosT.forEach(combo => {
        if (combo[0] && combo[0] === combo[1] && combo[0] === combo[2] && combo[0] === combo[3]){
            winner = combo[0]
        }
    });
    return winner
}

function checkDraw(){
    let draw = true
    for (let i = 0; i < tiles.length; i++) {
        if (!tiles[i].innerHTML){
            draw = false
        }
    }
    return draw
}

document.getElementById('status').innerHTML = 'Game in progress...';
document.getElementById('restart-btn').style.display = 'none';
document.getElementById('player1').classList.add('active');
document.getElementById('player2').classList.remove('active');

let player = 1;

document.onclick = function(e){
    if(e.target.classList.contains('tile')){
        if (document.getElementById('restart-btn').style.display == 'block') return;
        if (!e.target.innerHTML){
            if(player == 1){
                e.target.innerHTML = 'X'
                player = 2
                document.getElementById('player1').classList.remove('active');
                document.getElementById('player2').classList.add('active');
            }else{
                e.target.innerHTML = 'O'
                player = 1
                document.getElementById('player1').classList.add('active');
                document.getElementById('player2').classList.remove('active');
            }
            const winner = checkWinner();
            if (winner === 'X'){
                document.getElementById('status').innerHTML = 'Player 1 won!'
                document.getElementById('restart-btn').style.display = 'block';
            }else if (winner === 'O'){
                document.getElementById('status').innerHTML = 'Player 2 won!'
                document.getElementById('restart-btn').style.display = 'block';
            } else if (checkDraw()){
                document.getElementById('status').innerHTML = 'Draw!'
                document.getElementById('restart-btn').style.display = 'block';
            }
        }
    } else if (e.target.id == 'restart-btn'){
        for (let tile of tiles){
            tile.innerHTML = ''
        }
        document.getElementById('status').innerHTML = 'Game in progress...';
        document.getElementById('restart-btn').style.display = 'none';
        document.getElementById('player1').classList.add('active');
        document.getElementById('player2').classList.remove('active');
        player = 1;
    }
}