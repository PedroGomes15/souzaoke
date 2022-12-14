const path = require("path");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/*app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});*/

app.use(routes);
