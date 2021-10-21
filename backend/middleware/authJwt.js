const jwt = require("jsonwebtoken");
const useAuthorization = true;

const verifyToken = (req, res, next) => {

    if(useAuthorization == false){
        next();
    }
    else {
                
        const token = req.headers["x-access-token"];

        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
            return res.status(403).send({ message: "No valid token!" });
            }
            req.user = user;
            next();
        });
        
    }
};

module.exports = verifyToken;
