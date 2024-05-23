var food1, food2, food3, cat;
var score = 0;
var age = 0;

var f1, f2, f3;

class Food {
  constructor(x, y, count, type) {
    this.x = x;
    this.y = y;
    this.count = count;
    this.type = type;
  }

  draw() {
    var img;
    if (this.type == 1) {
      img = food1;
    }
    if (this.type == 2) {
      img = food2;
    }
    if (this.type == 3) {
      img = food3;
    }

    image(img, this.x, this.y, 70, 70);
    textSize(30);
    fill(226, 134, 184);
    stroke(0);
    strokeWeight(4);
    text(this.count, this.x + 30, this.y + 90);
  }

  feed() {
    if(this.count > 0) {
      this.count -= 1;
        score += 1;

        if (score >= 20) {
          age += 1;
          score = 0;
        }
    }
  }
}

function preload() {
  bg = loadImage('img/back.png');
  cat = loadImage("img/cat1.png");
  food1 = loadImage('img/food1.png');
  food2 = loadImage('img/food2.png');
  food3 = loadImage('img/food3.png');
}

function setup() {
  createCanvas(400, 400);
  f1 = new Food(50, 290, 2, 1);
  f2 = new Food(160, 290, 2, 2);
  f3 = new Food(270, 290, 2, 3);
}

function draw() {
  background(bg);
  image(cat, 150, 150, 150, 150);
  f1.draw();
  f2.draw();
  f3.draw();

  text(score, 350, 50);
  text(age, 50, 50);


  if (frameCount % 120 == 0) {
    f1.count += 1;
  }
  if (frameCount % 300 == 0) {
    f2.count += 1;
  }
  if (frameCount % 180 == 0) {
    f3.count += 1;
  }
}

if(age >= 3){
  cat = loadImage("img/cat1.png");
}

function mousePressed() {
  if (mouseX > f1.x && mouseX < f1.x + 80) {
    f1.feed();
  }
  if (mouseX > f2.x && mouseX < f2.x + 80) {
    f2.feed();
  }
  if (mouseX > f3.x && mouseX < f3.x + 80) {
    f3.feed();
  }
}