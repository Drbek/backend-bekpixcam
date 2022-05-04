const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
module.exports = (Arrayrole) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      const userId = decodedToken.userId;
    
      User.findOne({ _id: userId })
        .then((user) => {
          console.log(user)
          if (user == null) {
            res.status(401).json({ error: "Unauthorized user!!!" })
          } else {
            
              if (Arrayrole.includes(decodedToken.role[0]) && user.role[0]==decodedToken.role[0]) {
                next();
              } else {
                  res.send(403);
              }
              //next();
            
          }
        })
             
        .catch(error => res.status(400).json({ error }));
    
    } catch {
      res.status(401).json({
        error: 'Invalid request!'
      });
    }
  }
};
