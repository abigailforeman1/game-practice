function init() {

  // ? make the grid 
  // ? make pacman 
  // ? build the maze walls with divs 
  // ? make pacman move!
  // ? add little food to every empty square 

  // DOM Elements 
  const grid = document.querySelector('.grid')

  // Grid variables 
  const width = 18
  const squareCount = width * width

  // Game variables  
  const squares = []
  const mazeWalls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 26, 27, 35, 36, 38, 39, 40, 41, 42, 44, 45, 47, 48, 49, 50, 51, 53, 54, 56, 57, 58, 59, 60, 62, 63, 65, 66, 67, 68, 69, 71, 72, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 108, 114, 119, 125, 126, 127, 128, 129, 130, 132, 134, 135, 137, 139, 140, 141, 142, 143, 152, 153, 162, 163, 164, 165, 166, 168, 173, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 206, 207, 215, 216, 218, 219, 220, 222, 224, 225, 227, 229, 230, 231, 233, 234, 236, 237, 238, 240, 245, 247, 248, 249, 251, 252, 258, 259, 260, 261, 262, 263, 269, 270, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 287, 288, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323]
  let pacmanIndex = 292


  // * Function to create the grid
  function makeGrid() {
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      // square.textContent = i
      grid.appendChild(square)
      squares.push(square)
    }
  }
  makeGrid()
    
  // * Function to add maze walls 
  function makeWalls() {
    mazeWalls.forEach((mazeWall) => {
      squares[mazeWall].classList.add('maze-wall')
    })
  }
  makeWalls()
  
  // * Function to add small food around grid
  function addFood() {
    for (let i = 0; i < squareCount; i++) {
      if (!squares[i].classList.contains('maze-wall')) {
        squares[i].classList.add('food')
      }
    }
  }
  addFood()

  squares[pacmanIndex].classList.add('pacman') // controls where the player is based on the index of the square

  // * Function to make pacman move
  function handleKeyDown(e) {
    // 39 = right 
    // 37 = left
    // 38 = up
    // 40 = down

    switch (e.keyCode) {
      case 39:
        if (!squares[pacmanIndex + 1].classList.contains('maze-wall')) { // checking if next square to the right is not a maze wall  
          pacmanIndex++
        }
        break
      case 37:
        if (!squares[pacmanIndex - 1].classList.contains('maze-wall')) { // checking it player has reached left side of the grid
          pacmanIndex--
        }
        break
      case 38:
        if (!squares[pacmanIndex - width].classList.contains('maze-wall')) {
          pacmanIndex -= width
        }
        break
      case 40:
        if (!squares[pacmanIndex + width].classList.contains('maze-wall')) {
          pacmanIndex += width
        }
        break
      default:
        console.log('not valid!')
    }
    squares.forEach(square => square.classList.remove('pacman'))
    squares[pacmanIndex].classList.add('pacman')
  }


  // * Event listeners
  window.addEventListener('keydown', handleKeyDown)

}

window.addEventListener('DOMContentLoaded', init)