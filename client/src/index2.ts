import P5 from "p5";

// Creating the sketch itself
const sketch = (p5: P5) => {
  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    const canvas = p5.createCanvas(200, 300);
    canvas.parent("app");
    //p5.noiseDetail(8, 0.5);
  };

  const xStep = 0.0125;
  const yStep = 0.0125;
  const zStep = 0.0125;
  let z = 0;
  // The sketch draw method
  p5.draw = () => {
    p5.loadPixels();
    const d = p5.pixelDensity();
    for (let x = 0; x < p5.width; ++x) {
      for (let y = 0; y < p5.height; ++y) {
        for (let i = 0; i < d; i++) {
          for (let j = 0; j < d; j++) {
            // loop over
            const index = 4 * ((y * d + j) * p5.width * d + (x * d + i));
            const r = 255 * p5.noise(x * xStep, y * yStep, z);
            const g = 255 * p5.noise((x + p5.width) * xStep, y * yStep, z);
            const b = 255 * p5.noise(x * xStep, (y + p5.height) * yStep, z);
            p5.pixels[index] = r;
            p5.pixels[index + 1] = g;
            p5.pixels[index + 2] = b;
            p5.pixels[index + 3] = 255;
          }
        }
      }
    }
    p5.updatePixels();
    z += zStep;
  };
};

new P5(sketch);

export function point() {
  throw new Error("Function not implemented.");
}
