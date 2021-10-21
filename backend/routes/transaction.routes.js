module.exports = app => {

    const transaction = require("../controllers/transaction.controller.js");
    const verifyToken = require('../middleware/authJwt')
    // create transaction
    app.post('/api/create',verifyToken, transaction.create)
    //Get all transaction data
    app.get("/api/transactiondata",verifyToken, transaction.FindAll);

}