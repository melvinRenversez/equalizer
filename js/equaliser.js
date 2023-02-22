let canvas = document.querySelector('canvas');
let audio = document.querySelector('audio');

canvas.width = window.innerWidth * 0.98;
canvas.height = window.innerHeight * 0.98;

let wave = new Wave(audio, canvas);

count = 170,
height = 2,
radius = 2,


wave.addAnimation(
       new wave.animations.Cubes({
              count: count,
              top: true,
              bottom: true,
              cubeHeight: height,
              fillColor: {gradient: ['#33FFFF', '#33FFFF', '#FF00D1', '#FF00D1', '#2731F9']},
              lineColor: "rgba(0,0,0,0)",
              radius: radius,
       })
);