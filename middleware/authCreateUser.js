const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
module.exports =  (req, res, next) => {
    try {
      if (req.body.role.includes('ADMIN'))
      {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        checkpermission(User, req, res, userId, 'ADMIN')
        
      } else if (req.body.role.includes('AGENT'))
      {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        checkpermission(User,req, res, userId,'ENTERPRISE')
      }
      
    } catch {
      res.status(401).json({
        error: 'Invalid request!'
      });
    }
  }
;
function checkpermission(User,req, res, userId,role)
{
  User.findOne({ _id: userId })
  .then((user) => {
    if (user == null) {
      res.status(401).json({ error: "Unauthorized user!!!" })
    } else {
      if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
        if (decodedToken.role[0]==role) {
          next();
        } else {
            res.send(403);
        }
        //next();
      }
    }
  }).catch(error => res.status(400).json({ error }));
}