var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 110, damage: 10, rotation: 0, image: "img/spike.png", imageOffsetX: -25, imageOffsetY: -25, imageSizeX: 0.05, imageSizeY: 0.05},
          { type: "obstacle", x: 600, y: groundY - 110, damage: 5, rotation : 0, image: "img/spike.png", imageOffsetX: -25, imageOffsetY: -25, imageSizeX: 0.05, imageSizeY: 0.05},
          { type: "obstacle", x: 1327, y: groundY - 110, damage: 5, rotation: 0, image: "img/spike.png", imageOffsetX: -25, imageOffsetY: -25, imageSizeX: 0.05, imageSizeY: 0.05},
          { type: "enemy", x: 400, y: groundY - 50, offsetX: -25, offsetY: -25, velocity: -3},
          { type: "enemy", x: 735, y: groundY - 50},
          { type: "enemy", x: 1350, y: groundY - 50},
          { type: "reward", x: 900, y: groundY - 90},
          { type: "reward", x: 1500, y: groundY - 90},
          { type: "reward", x: 1900, y: groundY - 90},
          { type: "levelMarker", x: 2500, y: groundY - 110},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY, damage: 10, rotation: 0, image: "img/spike.png", imageOffsetX: -25, imageOffsetY: -25, imageSizeX: 0.05, imageSizeY: 0.05 },
          { type: "obstacle", x: 600, y: groundY, damage: 10, rotation: 0, image: "img/spike.png", imageOffsetX: -25, imageOffsetY: -25, imageSizeX: 0.05, imageSizeY: 0.05 },
          { type: "obstacle", x: 900, y: groundY, damage: 10, rotation: 0, image: "img/spike.png", imageOffsetX: -25, imageOffsetY: -25, imageSizeX: 0.05, imageSizeY: 0.05 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
