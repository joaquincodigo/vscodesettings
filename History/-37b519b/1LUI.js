window.addEventListener("load", () => {
  //  ==================== VARIABLES ====================
  // let screenHTML = document.getElementById("game-screen");
  let SNAKE = {
    body: [
      { x: 7, y: 10 },
      { x: 8, y: 10 },
      { x: 9, y: 10 },
      { x: 10, y: 10 },
    ],

    get head() {
      return this.body[0];
    },

    get tail() {
      return this.body[this.body.length - 1];
    },
  };

  MOVING_DIRECTION = "west"

  //  ==================== FUNCTIONS ====================

  function mountHtmlGrid() {
    let gridYSize = 30;
    let gridXSize = 45;

    for (let i = 0; i <= gridYSize; i++) {
      // Create a row
      let htmlRow = document.createElement("div");
      htmlRow.classList.add("row");

      // Mount a row
      document.getElementById("game-grid-container").appendChild(htmlRow);

      for (let j = 0; j <= gridXSize; j++) {
        // Create a cell
        let htmlCell = document.createElement("div");
        htmlCell.classList.add("cell", "empty");
        htmlCell.setAttribute("id", `${j},${i}`); // Id for editing contents

        // Mount a cell
        htmlRow.appendChild(htmlCell);
      }
    }
  }

  function renderFrame() {
    // Delete Current Snake body
    for (const bodyChunk of SNAKE.body) {
      let htmlCell = document.getElementById(`${bodyChunk.x},${bodyChunk.y}`);
      htmlCell.classList.remove("snake");
    }
    // Update Snake body
    moveSnake(MOVING_DIRECTION)

    // Render Snake body
    for (const bodyChunk of SNAKE.body) {
      let htmlCell = document.getElementById(`${bodyChunk.x},${bodyChunk.y}`);
      htmlCell.classList.add("snake");
    }
  }

  function moveSnake() {
    switch (MOVING_DIRECTION) {
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
  mountHtmlGrid();
  renderFrame();
  initializeKeyHandling();
});
