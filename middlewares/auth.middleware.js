// auth.middleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  //console.log(req.headers);
  if (!token) return res.sendStatus(403).set('Content-Type', 'application/json').send(JSON.stringify({ error: 'Forbidden' }));
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403).set('Content-Type', 'application/json').send(JSON.stringify({ error: 'Forbidden' }));
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken: authenticateToken
};