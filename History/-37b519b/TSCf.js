window.addEventListener("load", () => {
  //  ==================== VARIABLES ====================
  let screenHTML = document.getElementById("game-screen");
  let GRID = createGrid();
  let SNAKE = {
    body: [GRID[7][10], GRID[7][9], GRID[7][8], GRID[7][7]],
    direction: "west",

    get head() {
      return this.body[0];
    },

    get tail() {
      return this.body[this.body.length - 1];
    },
  };

  //  ==================== FUNCTIONS ====================
  function createGrid() {
    let grid = [];

    for (let row = 1; row <= 16; row++) {
      let rowData = [];
      for (let cell = 1; cell <= 21; cell++) {
        rowData.push({
          x: cell,
          y: row,
        });
      }
      grid.push(rowData);
    }
    return grid;
  }

  function mountGrid() {
    // MOUNTING GRID
    for (let i = 0; i < GRID.length; i++) {
      const row = GRID[i];
      let rowHTML = document.createElement("div");
      rowHTML.classList.add("row");
      screenHTML.appendChild(rowHTML);

      for (let j = 0; j < row.length; j++) {
        const cell = row[j];

        let cellHTML = document.createElement("div");
        cellHTML.classList.add("cell", "empty");
        cellHTML.setAttribute("id", `${j + 1},${i + 1}`);
        rowHTML.appendChild(cellHTML);
      }
    }
  }

  function renderFrame() {
    // Clear Screen
    for (let i = 0; i < GRID.length; i++) {
      const gridRow = GRID[i];
      for (let j = 0; j < gridRow.length; j++) {
        const cell = gridRow[j];
        const HTMLCell = document.getElementById(`${cell.x},${cell.y}`);
        HTMLCell.classList.remove("snake");
        HTMLCell.classList.remove("fruit");
      }
    }

    // Render Snake
    for (const bodyChunk of SNAKE.body) {
      let bodyChunkHTML = document.getElementById(
        `${bodyChunk.x},${bodyChunk.y}`
      );
      bodyChunkHTML.classList.add("snake");
    }

    // TODO Render Fruit
  }

  function moveSnake(direction) {
    switch (direction) {
      case "north":
        if (SNAKE.direction != "south") {
          SNAKE.body.pop(); // remove tail
          SNAKE.body.unshift(GRID[SNAKE.head.y - 2][SNAKE.head.x - 1]); //add the new head
          SNAKE.direction = "north";
        }
        break;

      case "east":
        if (SNAKE.direction != "west") {
          SNAKE.body.pop(); // remove tail
          SNAKE.body.unshift(GRID[SNAKE.head.y - 1][SNAKE.head.x - 2]); //add the new head
          SNAKE.direction = "east";
        }
        break;

      case "south":
        if (SNAKE.direction != "north") {
          SNAKE.body.pop(); // remove tail
          SNAKE.body.unshift(GRID[SNAKE.head.y][SNAKE.head.x - 1]); //add the new head
          SNAKE.direction = "south";
        }
        break;

      case "west":
        if (SNAKE.direction != "east") {
          SNAKE.body.pop(); // remove tail
          SNAKE.direction = "west";
          SNAKE.body.unshift(GRID[SNAKE.head.y - 1][SNAKE.head.x]); //add the new head
        }
        break;

      default:
        break;
    }
  }

  function initializeKeyHandling() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (SNAKE.direction != "south") {
            console.log("Arrow UP");
            SNAKE.direction = "north";
          }
          break;

        case "ArrowDown":
          if (SNAKE.direction != "north") {
            console.log("Arrow DOWN");
            SNAKE.direction = "south";
          }
          break;

        case "ArrowLeft":
          if (SNAKE.direction != "west") {
            console.log("Arrow LEFT");
            SNAKE.direction = "east";
          }
          break;

        case "ArrowRight":
          if (SNAKE.direction != "east") {
            console.log("Arrow RIGHT");
            SNAKE.direction = "west";
          }
          break;
      }
    });
  }

  // TESTING
  document.getElementById("btn").addEventListener("click", () => {
    moveSnake("south");
    renderFrame();
  });

  //  ==================== START ====================
  mountGrid();
  renderFrame();
  initializeKeyHandling();
  setInterval(() => {
    moveSnake(SNAKE.direction);
    renderFrame();
  }, 200);
});
