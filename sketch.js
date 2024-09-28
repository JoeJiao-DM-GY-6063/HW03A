function setup() {
  createCanvas(600, 800);
  background(235, 210, 47)
  for (let d = 30; d < 600; d+=75) {
    for (let c = 30; c < 900; c+=75) {
      fill(13, 13, 13);
      ellipse(d, c, 30, 30); 
      
    }
    
    
  }
  for (let d = 67.5; d < 570; d+=75) {
    for (let c = 67.5; c < 900; c+=75) {
      fill(13, 13, 13);
      ellipse(d, c, 10, 10); 
      
    }
    
    
  }
}

function draw() {
}
