module.exports = app => {
    const vender = require("../controllers/vender.controller.js");
    const verifyToken = require('../middleware/authJwt.js');

    // save vender name
    app.post("/vender", verifyToken, vender.create);
    //find vender name

    app.get('/api/vender', verifyToken, vender.findAll)

    //delete vender name
    app.delete('/api/delete/:id', verifyToken, vender.delete)

    // Create a new vender
    //app.post("/vender", vender.create);
  
    // Retrieve all vender
    //app.get("/vender", vender.findAll);
  
    // Retrieve a single vender with venderId
    //app.get("/vender/:venderId", vender.findOne);
  
    // Update a vender with venderId
    //app.put("/vender/:venderId", vender.update);
  
    // Delete a vender with venderId
    //app.delete("/vender/:venderId", vender.delete);
  

  };