var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var uno,dos,tres,quatro
var le_miserable

function preload(){
uno = loadImage("images/car1.png");
dos=loadImage("images/car2.png");
tres=loadImage("images/car3.png");
quatro=loadImage("images/car4.png");
le_miserable=loadImage("images/track.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end();
  }
}
