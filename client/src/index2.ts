import P5 from "p5";

// Creating the sketch itself
const sketch = (p5: P5) => {
  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    const canvas = p5.createCanvas(800, 500);
    canvas.parent("app");
    p5.noiseDetail(8, 0.2);
  };

  const xStep = 0.001;
  const yStep = 0.001;
  const zStep = 0.001;
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
            const value = 255 * p5.noise(x * xStep, y * yStep, z);
            p5.pixels[index] = value;
            p5.pixels[index + 1] = value;
            p5.pixels[index + 2] = value;
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
