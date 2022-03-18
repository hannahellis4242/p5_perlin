import P5 from "p5";

// Creating the sketch itself
const sketch = (p5: P5) => {
  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    const canvas = p5.createCanvas(400, 300);
    canvas.parent("app");

    // Configuring the canvas
    p5.background("white");
  };

  const xStep = 0.01;
  let xStart = 0;
  // The sketch draw method
  p5.draw = () => {
    p5.background("white");
    p5.stroke("black");
    p5.strokeWeight(1);
    new Array(p5.width)
      .fill(0)
      .map((_, i) => i)
      .map((x) => {
        return { x, y: p5.noise(x * xStep + xStart) * p5.height };
      })
      .map(({ x, y }) => p5.point(x, y));
    xStart += xStep;
  };
};

new P5(sketch);

export function point() {
  throw new Error("Function not implemented.");
}
