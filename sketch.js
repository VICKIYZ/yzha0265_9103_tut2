let numDots = 100;
let smallerGrass = [];
let stems = [];
let leave = [];
let smallerleave = [];
let angle = -45
let angle1 = 0
let x1 = 0 
let y1 = 0
let x2 = 0
let y2 = 0  
let y5 = 0
let ySpeed1 = 20;
let ySpeed2 = 30;
let ySpeed3 = 10;
let ySpeed4 = 5;
let Speed = 5
let PosY1 = 200;
let PosY2 = 220;
let PosY3 = 600;
let PosY4 = 400;
let w = 40;
let h = 30

function setup() {
  createCanvas(300, 600);
  background(242,169,4); 
  
  //Setting attributes for the stem objects that represent huge leaves' stems
  stems = [
    new stem(0, 140, 80, 140, 150, 150, 0, 0, 0),
    new stem(0, 300, 25, 310, 50, 335, 0, 0, 0),
    new stem(160, 450, 220, 380, 240, 340, 0, 0, 0)
  ];

  //Setting attributes for the Leave objects that represent huge leaves' blade 
  leave = [
    new Leave(30, 140, 45, 120, 75, 105, 19, 18, 19, 1, 4, 6, 0, 0, 0),
    new Leave(20, 138, 35, 145, 50, 155, 19, 18, 19, 1, 4, 6, 0, 0, 0)
  ];

  //Setting attributes for the Smallerleave objects that represent huge leaves' blade
  smallerLeave = [
    new Smallerleave(35, 140, 65, 120, 80, 110, 27, 20, 19, 2, 5, 6, color(209, 79, 127)),
    new Smallerleave(25, 140, 45, 140, 80, 160, 27, 21, 19, 2, 5, 6, color(209, 79, 127)),
    new Smallerleave(8, 300, 10, 295, 20, 285, 6, 10, 12, 2, 5, 6, color(209, 79, 127)),
    new Smallerleave(8, 300, 3, 312, 10, 340, 7, 10, 13, 5, 6, 6, color(209, 79, 127)),
    new Smallerleave(0, 300, 5, 295, 12, 285, 1, 2, 13, 1, 4, 10, 0, 0, 0),
    new Smallerleave(5, 300, 0, 310, 6, 330, 1, 10, 11, 1, 7, 8, 0, 0, 0),
    new Smallerleave(185, 420, 175, 390, 190, 360, 9, 13, 10, -12, -14, -9, color(209, 79, 127)),
    new Smallerleave(180, 430, 210, 420, 250, 385, 9, 7, 4, -12, -15, -15, color(209, 79, 127)),
    new Smallerleave(180, 430, 180, 400, 190, 365, 9, 10, 12, -15, -14, -10, 0, 0, 0),
    new Smallerleave(185, 420, 220, 410, 250, 385, 10, 7, 4, -14, -14, -13, 0, 0, 0),
  ];

  //Setting attributes for the Small objects that represent small flower looked grass
  smallerGrass = [
    //new Small(0, 180, color(0, 0, 0), -1, 7, 3, 25, 5),
    new Small(5, 230, color(0, 0, 0), -1, 8, 3, 40, 10),
    new Small(5, 400, color(0, 0, 0), -1, 8, 3, 40, 10),
    new Small(10, 400, color(209, 79, 127), -1, 7, 3, 40, 10),
    new Small(10, 230, color(209, 79, 127), -1, 7, 3, 40, 10),
    new Small(192, 153, color(255, 0, 0)),
    new Small(205, 150, color(255, 0, 0)),
    new Small(192, 153, color(255, 0, 0)),
    new Small(270, 180, color(0, 0, 0), 1, 6),
    new Small(290, 290, color(0, 0, 0)),
    new Small(295, 290, color(209, 79, 127)),
    new Small(300, 290, color(255, 0, 0)),
    new Small(295, 340, color(209, 79, 127)),
    new Small(300, 340, color(255, 0, 0)),
    new Small(300, 440, color(0, 0, 0), 1, 6),
    new Small(290, 440, color(0, 0, 0), 1, 6),
    new Small(300, 500, color(0, 0, 0), 1, 5),
    new Small(300, 540, color(0, 0, 0), 1, 5),
    new Small(270, 580, color(0, 0, 0), 1, 5),
    new Small(80, 350, color(255, 0, 0), -1.5, 10, 3, 20, 10),
    new Small(260, 430, color(107, 33, 33), 1, 8),
    new Small(220, 490, color(0, 0, 0), -1, 6)
  ];

  RightedgeGrass = [
    new Small(300, 240, color(255, 0, 0)),
    new Small(290, 240, color(0, 0, 0)),
    new Small(295, 240, color(209, 79, 127))
  ]

  LeftcornerGrass = new Small(0, 0, color(0, 0, 0), -1, 12, 3, 80, 5);
  Smallgrass1 = new Small(0 , 0, color(0, 0, 0), 2, 8, 3, 25, 5);
  Smallgrass2 = new Small(0, 0, color(255, 0, 0), 2, 8, 3, 25, 5);
  Smallgrass3 = new Small(0, 0, color(220, 79, 180), 2, 7);
  Smallgrass4 = new Small(0, 0, color(0, 0, 0), 2, 7);
  Smallgrass5 = new Small(0, 0, color(255, 0, 0), 2, 14, 3, 25, 5);
  Smallgrass6 = new Small(0, 0, color(220, 79, 180), 2, 16, 3, 30, 20);
} 



function draw() {
  background(242,169,4); 
  frameRate(5);

  //Draw the pink and black dots in various sizes
  for (let i = 0; i < numDots; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20);
    if (random(1) > 0.5) {
      fill(214, 139, 168);  
    } else {
      fill(0);      
    }
    noStroke();
    ellipse(x, y, size);
  }

  //Calling functions to draw three huge grass moving up and down
  push ()
  translate(0, y5)
  grass();
  grass1();
  grass2();
  FlippedGrass();
  FlippedGrass1();
  
  //Draw the branch of the first huge grass
  stroke(79, 21, 27);
  line(190, 80, 220, 220);
  
  //Draw the first roots of the huge grass
  noStroke();
  fill(183, 90, 125);  
  ellipse(190, 90, w, h);  
  
  //Draw the second roots of the huge grass
  fill(196, 85, 135);  
  ellipse(150, 320, w, h + 5);
  
  fill(105, 46, 76);  
  ellipse(150, 320, w - 5, h);
  
  fill(252, 105, 155); 
  ellipse(150, 320, w - 10, h - 5);  
  
  fill(82, 25, 50); 
  ellipse(150, 320, w - 15, h -10);
  
  //Draw the third roots of the huge grass
  fill(229, 82, 139);  
  ellipse(115, 455, w + 5, h);  
  //Change the size of roots in original ratio
  w += Speed / 2;
  h += 0.875 * Speed / 2;

  //Calling functions to draw the weeds at the botton left corner and top right edge
  //Moving up and down with the huge grass
  //Using a boolean statment to change the moving direction
  StraightWeeds();
  CurvedWeeds();
  pop()
  y5 += Speed
  if (y5 < 0 || y5 > 50){
    Speed = - Speed
  }

  //Calling functions to draw leaves and the top left grass 
  //Make them move ramdonly within the range of -5 and 2 while rotating
  pop()
  push();
  translate(x1 , y1);
  rotate(angle);
  LeftcornerGrass.display();
  for (let stem of stems) {
    stem.display();
  }
  
  for (let sLeaf of smallerLeave) {
    sLeaf.display();
  }
  
  for (let leaf of leave) {
    leaf.display();
  }
  pop();
  //Reset the coordinates and starting angle everytime when framecount reachs the multiple of 50
  if (frameCount % 50 == 0){
    x1 = 0
    y1 = 0
    angle = radians(-80)
  }
  x1 += random(-5, 2)
  y1 += random(2)
  angle += radians(2);
  
  //Translate and rotate using a different speed and angle
  push()
  translate(x2, y2);
  rotate(angle1);
  for (let rgrass of RightedgeGrass) {
    rgrass.display();
  }
  for (let sgrass of smallerGrass){
    sgrass.display();
  }
  pop()
  x2 += random(-15);
  y2 += random(10)
  angle1 += radians(5)
  if (x2 < 0 || x2 > 300){
    x2 -= random(-15)
  }
  if (y2 < 0 || y2 > 600){
    y2 -= random(15)
  }
  
  
  //Set the round shaped small grass to rotate by their center whith different speed while moving up and down
  //Use boolean statements to make the components bounce back when reached the edge
  push()
  translate (95, PosY1);
  rotate(angle1 * 8)
  Smallgrass1.display();
  pop()
  push()
  translate(90, PosY1 -5);
  rotate(angle1 * 8)
  Smallgrass2.display();
  pop()
  PosY1 += ySpeed1;
  if (PosY1 < 0 || PosY1 > 600){
    ySpeed1 = - ySpeed1;
  }
  
  push()
  translate(230, PosY2);
  rotate(angle1 * 10)
  Smallgrass3.display();
  pop()
  
  push()
  translate(225, PosY2);
  rotate(angle1 * 10)
  Smallgrass4.display();
  pop()
  PosY2 += ySpeed2;
  if (PosY2 < 0 || PosY2 > 600){
    ySpeed2 = - ySpeed2;
  }
  push()
  translate(205, PosY3);
  rotate(angle1 * 5)
  Smallgrass5.display();
  pop()
  PosY3 += ySpeed3;
  if (PosY3 < 0 || PosY3 > 600){
    ySpeed3 = - ySpeed3;
  }
  
  push()
  translate(120, PosY4);
  rotate(angle1 * 3)
  Smallgrass6.display();
  pop()
  PosY4 += ySpeed4;
  if (PosY4 < 0 || PosY4 > 600){
    ySpeed4 = - ySpeed4;
  }
}

// Draw the first huge grass
function grass() {
   noFill();
   strokeWeight(4);
 
  let ellipseCenterX = 190, ellipseCenterY = 80;
  let numCurves = 8; 
  let lineLength = 120; 
  let curveAmount = 40; 
  
  //Use a for loop to give some randomness to color setting of the curves
  for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.2) {
      stroke(209, 79, 127);  
     } else {
       stroke(179, 70, 105);      
     }

     let angle = map(i, 0, numCurves, 0, -HALF_PI);  
     let x1 = ellipseCenterX;
     let y1 = ellipseCenterY;
     let x2 = x1 + curveAmount * sin(angle);
     let y2 = y1 + curveAmount * cos(angle);
     let x3 = x1 + (lineLength + curveAmount) * cos(angle);
     let y3 = y1 + (lineLength - curveAmount) * sin(angle);
     let x4 = x1 + lineLength * cos(angle);
     let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}

//Flip the first half of the huge grass to form the other half
function FlippedGrass() {
  push();  
  translate(375, 10);
  scale(-1, 1);
  grass(); 
  pop();  
}

//Similarlly to he first huge grass, draw the second huge grass
function grass1() {
  noFill();
  strokeWeight(4);

  let ellipseCenterX = 140, ellipseCenterY = 320;
  let numCurves = 9; 
  let lineLength = 100; 
  let curveAmount = 50; 
  let steps = 8;
  let dotSize = 5;

  //Use a for loop to give some randomness to color setting of the curves
  for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.5) {
      stroke(209, 79, 127);  
     } else {
       stroke(0);      
     }

    let angle = map(i, 0, numCurves, 0, -HALF_PI);  
     
    let x1 = ellipseCenterX;
    let y1 = ellipseCenterY;
    let x2 = x1 + (curveAmount * 0.5) * cos(angle);  
    let y2 = y1 + (lineLength * 0.5) * sin(angle);  
    let x3 = x1 + (lineLength * 0.75) * cos(angle); 
    let y3 = y1 + (curveAmount * 0.75) * sin(angle); 
    let x4 = x1 + lineLength  * cos(angle);
    let y4 = y1 + lineLength * sin(angle);
 
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);  

  // Add the red dots align the grass line
    fill(255, 0, 0);  
    noStroke();  
    for (let j = 0; j <= steps; j++) {
      let t = j / steps;
      let px = bezierPoint(x1, x2, x3, x4, t);
      let py = bezierPoint(y1, y2, y3, y4, t);

      let dotsAngle = atan2(py - y1, px - x1) + HALF_PI; 
      let offsetDistance = random(2, 4); 
      let offsetX = offsetDistance * cos(dotsAngle);
      let offsetY = offsetDistance * sin(dotsAngle);

      px += offsetX;
      py += offsetY;

      ellipse(px, py, dotSize, dotSize);
    }
  }
}
// Flip the secound huge grass as well
function FlippedGrass1() {
  push();  
 
  translate(300, -5);
  scale(-1, 1);
  grass1(); 
  pop();  
}

// Draw the third huge grass
function grass2() {
  noFill();
  strokeWeight(4);

    let ellipseCenterX = 115, ellipseCenterY = 460;
    let numCurves = 18; 
    let lineLength = 100; 
    let curveAmount = 40; 
 
   //Use a for loop to give some randomness to color setting of the curves
   for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.3) {
      stroke(209, 79, 127);  
     } else {
       stroke(0);      
     }

     let angle = map(i, 2, numCurves, 0, PI);  
     
     let x1 = ellipseCenterX;
     let y1 = ellipseCenterY;
     let x2 = x1 + curveAmount * cos(angle);
     let y2 = y1 - curveAmount * sin(angle);
     let x3 = x1 + (lineLength + curveAmount) * cos(angle);
     let y3 = y1 + (lineLength - curveAmount) * sin(angle);
     let x4 = x1 + lineLength * cos(angle);
     let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
    
}

// Function of the straight weeds
function StraightWeeds() {
  let numWeeds = 20;
  let weedSpacing = 9;
  let weedWidth;
  let minWeedHeight = 5;
  let maxWeedHeight = 50;

  // Use a for loop to give some randomness to color setting of the weeds
  for (let i = 0; i <= numWeeds; i++) {
    weedWidth = random(2,4);
    if (random(1) > 0.4) {
      stroke(209, 79, 127);
    } else {
      stroke(0);
    }

    //Setting the stroke attribute using the pre-set values and locate the weeds
    strokeWeight(weedWidth);
    let x = i * weedSpacing;
    x = constrain(x, 0, 180);
    let weedHeight = random(minWeedHeight, maxWeedHeight);
    line(x, height, x, height - weedHeight);

    let yRight = i * weedSpacing;
    yRight = constrain(yRight, 100, 220);
    let rightWeedHeight = random(15, 25);
    line(width, yRight, width - rightWeedHeight, yRight);
  }

  // Drawing straight weeds on the left 
  for (let i = 0; i <= 15; i++) {
    let yLeft = map(i, 0, 9, 460, 550); 
    let leftWeedWidth = random(10, 15);
    
    if (random(1) > 0.5) {
      stroke(125, 30, 24); 
    } else {
      stroke(0);
    }
    line(0, yLeft, leftWeedWidth, yLeft);
  }
}

function CurvedWeeds() {
  let numWeeds = 5;
  let weedSpacing = 160 / numWeeds;
  let weedWidth = 3;
  let minWeedHeight = 5;
  let maxWeedHeight = 60;
  let controlOffset = 20;

  //Use a for loop to give some randomness to color setting of the curves
  for (let i = 0; i <= numWeeds; i++) {
    if (random(1) > 0.2) {
      stroke(179, 70, 105);
    } else {
      stroke(0);
    }
    strokeWeight(weedWidth);

    // Drawing curved weeds on the bottom
    let x = i * weedSpacing;
    //x = constrain(x, 0, 180);
    let weedHeight = random(minWeedHeight, maxWeedHeight);
    let ctrlPt1X = constrain(x + random(-controlOffset, controlOffset), 0, width);
    let ctrlPt2X = constrain(x + random(-controlOffset, controlOffset), 0, width);
    bezier(x, height, ctrlPt1X, height - weedHeight / 3, ctrlPt2X, height - 2 * weedHeight / 3, x, height - weedHeight);

    // Drawing curved weeds on the left
    let y1 = 450 + i * weedSpacing / 2 ;
    //y1 = constrain(y1, 450, height - 30);
    weedHeight = random(20, 30);
    let ctrlPtY1 = constrain(y1 + random(-controlOffset, controlOffset), 0, height);
    let ctrlPtY2 = constrain(y1 + random(-controlOffset, controlOffset), 0, height);
    bezier(0, y1, weedHeight / 3, ctrlPtY1, 2 * weedHeight / 3, ctrlPtY2, weedHeight, y1);

    // Drawing curved weeds on the right
    let y2 = 100 + i * weedSpacing / 2;
    //y2 = constrain(y2, 100, 200);
    weedHeight = random(15, 20);
    let ctrlPtY3 = constrain(y2 + random(-controlOffset, controlOffset), 0, height);
    let ctrlPtY4 = constrain(y2 + random(-controlOffset, controlOffset), 0, height);
    bezier(width, y2, width - weedHeight / 3, ctrlPtY3, width - 2 * weedHeight / 3, ctrlPtY4, width - weedHeight, y2);
  }
}

class stem {
  //Using constructor to set the parameters.
  //(SX1, SY1), (SX2, SY2) and (SX3, SY3) represents the coordinates that will be used in curveVertex() method
  //sColor stands for stem color which will be passed to stroke color
  constructor(SX1, SY1, SX2, SY2, SX3, SY3, sColor){
    this.SX1 = SX1;
    this.SY1 = SY1;
    this.SX2 = SX2;
    this.SY2 = SY2;
    this.SX3 = SX3;
    this.SY3 = SY3;
    this.sColor = sColor;
    //this.tX1 = tX1;
    //this.tY1 = tY1;
    //this.sAngle = sAngle
  }
  display(){
    //Using curveVertex() method for the leave blade
    push()
    translate(this.tX1, this.tY1)
    fill(0);
    stroke(this.sColor);
    strokeWeight(5)
    beginShape();
    curveVertex(this.SX1,this.SY1);
    curveVertex(this.SX1,this.SY1);
    curveVertex(this.SX2,this.SY2);
    curveVertex(this.SX3,this.SY3);
    curveVertex(this.SX3,this.SY3);
    endShape();
    pop()
  }
}

class Small {
  constructor(x, y, color, angleMultiplier = 1, numCurves = 5, strokeW = 3, lineLength = 20, circleSize = 5) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.circleRadius = circleSize / 2;
    this.numCurves = numCurves;
    this.curveWidth = 2.5;
    this.strokeW = strokeW;
    this.lineLength = lineLength;
    this.angleMultiplier = angleMultiplier;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.circleRadius * 2);

    stroke(this.color);
    strokeWeight(this.strokeW);
    noFill();

    let rotationOffset = PI / 2;

    for (let i = 0; i < this.numCurves; i++) {
      let startAngle = this.angleMultiplier * PI / this.numCurves * i + rotationOffset; 
      let endAngle = startAngle + HALF_PI / this.numCurves;
      let curveRadius = this.circleRadius + this.lineLength; 
      let startX = this.x + this.circleRadius * cos(startAngle);
      let startY = this.y + this.circleRadius * sin(startAngle);

      beginShape();
      vertex(startX, startY);
      for (let a = startAngle; a < endAngle; a += 0.01) {
        let x = this.x + curveRadius * cos(a);
        let y = this.y + curveRadius * sin(a);
        let offset = map(sin(a * 4), -1, 1, -this.curveWidth, this.curveWidth);
        vertex(x + offset, y);
      }
      endShape();
    }
  }
  move(){
    translate(this.x, this.y)
    rotate(angle)
  }
}

class Leave {
  //Using constructor to set the parameters.
  //(LX1, LY1), (LX2, LY2) and (LX3, LY3) represents the coordinates that will be used in curveVertex() method
  //numA, numB and numC are used to vary the x coordinates for the three main points
  //numD, numE and numF are used to vary the y coordinates for the three main points
  //lColor stands for leave color which will be passed to stroke color
  constructor(LX1, LY1, LX2, LY2, LX3, LY3, numA, numB, numC, numD, numE, numF, lColor){ 
    this.LX1 = LX1;
    this.LY1 = LY1;
    this.LX2 = LX2;
    this.LY2 = LY2;
    this.LX3 = LX3;
    this.LY3 = LY3;
    this.numA = numA;
    this.numB = numB;
    this.numC = numC;
    this.numD = numD;
    this.numE = numE;
    this.numF = numF;
    this.lColor = lColor;
  }

  display() {
    for (let i = 0; i < 7; i++) {
      push()
      translate(this.tX2, this.tY2)
      fill(0);
      stroke(this.lColor);
      strokeWeight(5)
      beginShape();
      curveVertex(this.LX1 + i * this.numA, this.LY1 + i * this.numD);
      curveVertex(this.LX1 + i * this.numA, this.LY1 + i * this.numD);
      curveVertex(this.LX2 + i * this.numB,this.LY2 + i * this.numE);
      curveVertex(this.LX3 + i * this.numC,this.LY3 + i * this.numF);
      curveVertex(this.LX3 + i * this.numC,this.LY3 + i * this.numF);
      endShape();
      pop()
    }
  }
}

class Smallerleave {
  //Similar parameters like leave object except less curve will be made
  constructor(sX1, sY1, sX2, sY2, sX3, sY3, num1, num2, num3, num4, num5, num6, ColorS){
    this.sX1 = sX1;
    this.sY1 = sY1;
    this.sX2 = sX2;
    this.sY2 = sY2;
    this.sX3 = sX3;
    this.sY3 = sY3;
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
    this.num5 = num5;
    this.num6 = num6;
    this.ColorS = ColorS;
  }
  display(){
    for (let i = 0; i < 5; i++) {
      push()
      translate(this.tX3, this.tY3)
      noFill();
      stroke(this.ColorS);
      strokeWeight(4)
      beginShape();
      curveVertex(this.sX1 + i * this.num1, this.sY1 + i * this.num4);
      curveVertex(this.sX1 + i * this.num1, this.sY1 + i * this.num4);
      curveVertex(this.sX2 + i * this.num2, this.sY2 + i * this.num5);
      curveVertex(this.sX3 + i * this.num3, this.sY3 + i * this.num6);
      curveVertex(this.sX3 + i * this.num3, this.sY3 + i * this.num6);
      endShape();
      pop()
    }
  }
}



