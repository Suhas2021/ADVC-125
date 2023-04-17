
RightWristX = 0;
RightWristY = 0;
LeftWristX = 0;
LeftWristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized!!');
}

function draw()
{
   background('#6C91C2');
   textSize(difference);
   text('Suhas', 50, 400)
   fill('#FFE787')
   
}

function preload()
{

}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       LeftWristX = results[0].pose.leftWrist.x;
       RightWristX = results[0].pose.rightWrist.x;
       LeftWristY = results[0].pose.leftWrist.y;
       RightWristY = results[0].pose.rightWrist.y;
       
       difference = floor(LeftWristX - RightWristX)

    
   }
}