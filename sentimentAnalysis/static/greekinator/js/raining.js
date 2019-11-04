var canvas;
var streams = [];//array of streams
var fadeInterval = 1.6;
var symbolSize = 14; // size of the words

function windowResized(){
  resizeCavnas(windowWidht, windowHeight);
}

function setup() {
  canvas = createCanvas(
    window.innerWidth,//returns the width of browser
    window.innerHeight
  );
  background('#eeede3');
  canvas.position(0,0);
  canvas.style('z-index','-1');

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {//populate the array of streams
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize
  }

  textFont('Consolas');
  textSize(symbolSize);//size of the text
}

function draw() {
  background('#eeede3');//refresh the background
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value= "Greekinator";

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));


  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 20));
  this.speed = random(1, 5);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(155,213,224, symbol.opacity);// color of text raining
      } else {
        fill( 155,213,224, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
    });
  }
}

