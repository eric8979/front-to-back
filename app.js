const express = require("express");
const app = express();

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
