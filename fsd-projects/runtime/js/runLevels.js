var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;


  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage, rotation, image, imageOffsetX, imageOffsetY, imageSizeX, imageSizeY){
      var hitZoneSize = 25;// creates obstacle and gives it a size
      var damageFromObstacle = damage;// sets damage for obstacle
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      obstacleHitZone.x = x;// sets x position
      obstacleHitZone.y = y;// sets y position
      game.addGameItem(obstacleHitZone);// obstacles hitbox
      var obstacleImage = draw.bitmap(image);// obstacle's design
      obstacleHitZone.addChild(obstacleImage);// tales the picture and adds it as a child to the hit box
      obstacleImage.x = imageOffsetX;// offsets the obstacle image horizontally relative to the hit box
      obstacleImage.y = imageOffsetY;// offsets the obstacle image vertically relative to the hit box
      obstacleImage.scaleX = imageSizeX;
      obstacleImage.scaleY = imageSizeY;

      obstacleHitZone.rotationalVelocity = rotation;

    }
    

    function createEnemy(x, y, offsetX, offsetY, velocity){
      var enemy = game.createGameItem("enemy", 25);// creates enemy and makes the hit box 25
      var enemyImage = draw.rect(50, 50, "red");// draws the image and stores the variable
      enemyImage.x = offsetX;// horizontal offset
      enemyImage.y = offsetY;// vertical offset
      enemy.addChild(enemyImage);// attachs the image to the enmey object
      enemy.x = x;// sets the x position
      enemy.y = y;//sets the y position
      game.addGameItem(enemy);// adds the enemy to the game

      enemy.velocityX = velocity;// moving the enemy
      // handles when halle collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10);
      };
      // hnadles when halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(10);// increases player score when halle shoots the enemy
        enemy.fadeOut();// on projectille collision fadeOut enemy image
      };
    }


    function createReward(x, y){
      var reward = game.createGameItem("reward", 25);// creates reward and makes the hit bot 25
      var rewardImage = draw.rect(50, 50, "green");// draws the image and stores the variable
      rewardImage.x = -25;// horizontal offset
      rewardImage.y = -25;// vertical offset
      reward.addChild(rewardImage);// attachs the image to the enmey object
      reward.x = x;// sets the x position
      reward.y = y;//sets the y position
      game.addGameItem(reward);// adds the reward to the game

      reward.velocityX -= 3;// moving the reward
      // handles when halle collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(+10);// add 10 health
        reward.fadeOut();// reward fades out
      };
    }

    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("level", 25);// creates reward and makes the hit bot 25
      var levelImage = draw.rect(50, 50, "yellow");// draws the image and stores the variable
      levelImage.x = -25;// horizontal offset
      levelImage.y = -25;// vertical offset
      levelMarker.addChild(levelImage);// attachs the image to the enmey object
      levelMarker.x = x;// sets the x position
      levelMarker.y = y;//sets the y position
      game.addGameItem(levelMarker);// adds the levelMarker to the game

      levelMarker.velocityX -= 3;// moving the levelMarker
      // handles when halle collides with reward
      levelMarker.onPlayerCollision = function(){
        startLevel();
        levelMarker.fadeOut();// reward fades out
      };
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];// fetches the current level from the levlData array and store it in a variable
      var levelObjects = level.gameItems;// retrieves the array of game items

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];
        
        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.rotation, element.image, element.imageOffsetX, element.imageOffsetY, element.imageSizeX, element.imageSizeY);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.offsetX, element.offsetY, element.velocity);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y);
        }
        if(element.type === "levelMarker"){
          createLevelMarker(element.x, element.y);
        }


      }



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
