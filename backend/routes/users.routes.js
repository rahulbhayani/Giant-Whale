
module.exports = app => {

    const users = require("../controllers/users.controller.js");

    //Sign up
    app.post("/signup", users.signUp);

    //Login
    app.post("/login", users.login);

    //Get all users
    app.get("/api/users", users.findAll);
}