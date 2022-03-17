import express from "express";
import path from "path";

const host = "0.0.0.0";
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
