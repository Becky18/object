statuse="";

function preload(){
img=loadImage("Cat.webp");
}
function setup(){
canvas=createCanvas(420,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("one").innerHTML="Status:Objects Being Detected";
}

function draw(){
    image(img,0,0,420,420)
}

function start(){
    window.location="NEW.HTML";
}
function Back(){
    window.location="index.html";
}

function modelLoaded() {
    console.log("Model Loaded!")
    statuse = true;
    objectDetector.detect(img, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  
  
  function draw() {
    if (statuse != undefined) {
          image(img, 0, 0, 640, 420);
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
  
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
  }

