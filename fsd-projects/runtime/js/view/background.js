var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'blue'); // draws rectangle because of background fill
            background.addChild(backgroundFill); // adds the backgrounfFill to the background object
            
            // TODO 2: - Add a moon and starfield
            for(var i = 0; i < 50; i++){
                var circle = draw.circle(3, "white", "LightGray", 2);// creates the amount of stars and chooses their color, size, and position
                circle.x = canvasWidth * Math.random();// sets a random x position within canvas width
                circle.y = groundY * Math.random();// sets a random y position within canvas height
                background.addChild(circle);// lets us be able to see the stars
            }
            var moon = draw.bitmap("img/moon.png"); // creates a bitmap object useing the moon image and stores in var moon
            moon.x = canvas.width - 400;// sets moon's x position
            moon.y = groundY - 400;// sets moon's y position
            moon.scaleX = 0.67;// scales moon's width
            moon.scaleY = 0.67;// scales moon's height
            background.addChild(moon);
            


            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) {// creates 5 buildings
            var buildingColors = ["Pink", "LightBlue", "Red", "Black", "Orange"];
                var buildingHeight = 350
                 * Math.random();// stores a value that represents the height
            var building = draw.rect(75, buildingHeight, buildingColors[i], "LightGray", "Black", 1);// draws a rect amd used the width height is the size of the building, and light gray i sthe color
            building.x = 1000 * Math.random();// sets building x vakue
            building.y = groundY - buildingHeight;// sets buildings y value
            background.addChild(building);// adds the bnuildings to background for us to see
            buildings.push(building);// pushes the info back to the buildings array
}
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");// creates a bitmap object using tree image and stores it in var tree
            tree.x = 600;// sets the x value of the tree
            tree.y = groundY - 230;// sets the y value of the tree
            background.addChild(tree);// adds the tree to the background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 2;// moves the tree to the left by subtectiong from its current x position

            if (tree.x < -200) {// checks if tree has gone pf the left and if so resets on the right
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
            var building = buildings[i];  
            building.x -= 1;// set building movement speed
            if(building.x < -200){// checks if buildings have gone off the left side of the screen if so they go to the right side of the screen
                building.x = canvasWidth;
            } 
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
