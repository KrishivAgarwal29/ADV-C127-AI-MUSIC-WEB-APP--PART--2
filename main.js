function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();
}
Gods_plan_song = "";
On_and_On_song = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    Gods_plan_song = loadSound("gods_plan.mp3");
    On_and_On_song = loadSound("on_and_on.mp3");
}

function draw() {
    image(video, 0, 0, 600, 530);
}