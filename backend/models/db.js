const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://gaint-whale:NM7KTToUrrml1OCU@cluster0.csoxd.mongodb.net/Giant-whale?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = mongoose;