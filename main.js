function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    video.size(210,100);

    tint_color="";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    circle(30,30,20)
    circle(30,400,20)
    circle(550,30,20)
    circle(550,400,20)
}

function take_snapshot(){
    save('student_name.png');
}



