$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(300, 640, 200, 25, "	#F56600");
  createPlatform(575, 540, 175, 25, "	#FFFFFF");
  createPlatform(850, 440, 150, 25, "#000000");
  createPlatform(1100, 340, 50, 25, "#73000A");
  createPlatform(1150, 240, 20, 125, "#73000A");
  createPlatform(1150, 240, 50, 25, "#73000A");
  createPlatform(1325, 700, 75, 25, "#9E1B32");
  createPlatform(1325, 595, 25, 130, "#9E1B32");
  createPlatform(1100, 500, 50, 25, "#828A8F");
  createPlatform(600, 305, 150, 25, "#005F86");
  createPlatform(100, 200, 320, 25, "#FFD700");



    // TODO 3 - Create Collectables
  createCollectable("clemson", 325, 570, 0.5);
  createCollectable("southCarolina", 1150, 195, 0.5);
  createCollectable("alabama", 1350, 650, 0.5);
  createCollectable("secChamp", 750, 265, 0);
  createCollectable("national", 200, 160, 0.5);

    
    // TODO 4 - Create Cannons
  createCannon("top", 450, 900);
  createCannon("left", 545, 1000);
  createCannon("top", 750, 950);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
