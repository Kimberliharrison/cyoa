function SpriteSheet(path, frameWidth, frameHeight, frameSpeed, endFrame) {

  const image = new Image();
  const framesPerRow;

  // calculate the number of frames in a row after the image loads
  const self = this;
  image.onload = function () {
    framesPerRow = Math.floor(image.width / frameWidth);
  };

  image.src = path;
}

const currentFrame = 0;  // the current frame to draw
const counter = 0;       // keep track of frame rate

// Update the animation
this.update = function () {

  // update to the next frame if it is time
  if (counter == (frameSpeed - 1))
    currentFrame = (currentFrame + 1) % endFrame;

  // update the counter
  counter = (counter + 1) % frameSpeed;
};

// Draw the current frame
this.draw = function (x, y) {
  // get the row and col of the frame
  const row = Math.floor(currentFrame / framesPerRow);
  const col = Math.floor(currentFrame % framesPerRow);

  ctx.drawImage(
    image,
    col * frameWidth, row * frameHeight,
    frameWidth, frameHeight,
    x, y,
    frameWidth, frameHeight);
};

spritesheet = new SpriteSheet('Walk_Cycle_Image.png', 125, 125, 3, 16);

function animate ( {
  requestAnimFrame(animate);
  ctx.clearRect(0, 0, 150, 150);

  spritesheet.update();

  spritesheet.draw(12.5, 12.5);
}
)