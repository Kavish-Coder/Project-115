function preload() {

}

function setup() {
    canvas=createCanvas(300, 300);

    canvas.center();

    video=createCapture(VIDEO);

    video.size(400, 400);

    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);

    tint_color = "";
}

function modelLoaded() {
    console.log("posenet is inixalised");
}

function draw() {
image(video, 0, 0, 300, 300);
image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    save('filter.png');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        
        console.log("Nose X= " + results[0].pose.lip.x);
        
        console.log("Nose Y= " + results[0].pose.lip.y);
    }
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;  
  }