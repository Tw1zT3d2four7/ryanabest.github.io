function preload() {
  // load data from either a local copy of one of the USGS CSVs or directly:
  //table = loadTable("assets/discogsdata.csv", "csv", "header");
  // or (while you're designing) from the feed itself:
  // table = loadTable("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.csv", "csv", "header");
}

function setup() {
  //rowcount = table.getRowCount();
  createCanvas(800,800);
};

var x = 400;
var y = 400;
var w = 100;
var h = 100;
var move = 0;


function draw() {
  fill(255,0,0);
  rect(x,y,w,h);
  x = x-1
  if (x < 800) {
    x = 800
  }
};

// function mousePressed() {
//   for (i=0;i<800;i++) {
//     move = move+800;
//   }
//   redraw();
//   console.log("Pressed");
//   // for (i=0;i<800;i+=100) {
//   //   background(0);
//   //   fill(255,0,0);
//   //   createCanvas(800,800);
//   //   rect(x+i,y+i,w,h);
//   // }
// };
