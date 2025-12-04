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
    function createObstacle(x, y, damage){
      var hitZoneSize = 25;// creates obstacle and gives it a size
      var damageFromObstacle = damage;// sets damage for obstacle
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      obstacleHitZone.x = x;// sets x position
      obstacleHitZone.y = y;// sets y position
      game.addGameItem(obstacleHitZone);// obstacles hitbox
      var obstacleImage = draw.bitmap("img/sawblade.png");// obstacle's design
      obstacleHitZone.addChild(obstacleImage);// tales the picture and adds it as a child to the hit box
      obstacleImage.x = -25;// offsets the obstacle image horizontally relative to the hit box
      obstacleImage.y = -25;// offsets the obstacle image vertically relative to the hit box

      obstacleHitZone.rotationalVelocity = 10;

    }
    

    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25);// creates enemy and makes the hit bot 25
      var enemyImage = draw.rect(50, 50, "red");// draws the image and stores the variable
      enemyImage.x = -25;// horizontal offset
      enemyImage.y = -25;// vertical offset
      enemy.addChild(enemyImage);// attachs the image to the enmey object
      enemy.x = x;// sets the x position
      enemy.y = y;//sets the y position
      game.addGameItem(enemy);// adds the enemy to the game

      enemy.velocityX -= 3;// moving the enemy
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

    createEnemy(400, groundY - 50);
    createEnemy(735, groundY - 50);
    createEnemy(1350, groundY - 50);

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

    createReward(900, groundY - 90);
    createReward(1500, groundY - 90);
    createReward(1900, groundY - 90);

    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("level", 25);// creates reward and makes the hit bot 25
      var levelImage = draw.rect(50, 50, "yellow");// draws the image and stores the variable
      levelImage.x = -25;// horizontal offset
      levelImage.y = -25;// vertical offset
      levelMarker.addChild(levelImage);// attachs the image to the enmey object
      levelMarker.x = x;// sets the x position
      LvelMarker.y = y;//sets the y position
      game.addGameItem(reward);// adds the levelMarker to the game

      reward.velocityX -= 3;// moving the reward
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
          createObstacle(element.x, element.y, element.damage);
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
