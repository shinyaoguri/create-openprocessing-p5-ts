/// <reference path="../node_modules/@types/p5/global.d.ts" />

function setup(): void {
    createCanvas(800, 800);
    background(220);
  }
  
  function draw(): void {
    circle(mouseX, mouseY, 20);
  }
  (window as any).setup = setup;
  (window as any).draw = draw;