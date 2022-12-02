const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  let result = 0;
  if (req.query.length != 0) {
    result = parseInt(req.query.num1) * parseInt(req.query.num2);
    result = result.toString();
  }

  res.send(`<h1>${result}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
