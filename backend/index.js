const express = require("express");

const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//..... Routes......//
require("./routes/vender.routes.js")(app);
require("./routes/users.routes.js")(app);
require("./routes/transaction.routes.js")(app);

app.listen(port, () => {
  console.log(port);
});
