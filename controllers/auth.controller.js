const UsersQueries = require('../queries/users.queries');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = process.env.JWT_SECRET_KEY;


async function login(req, res) {
    
    const { username, password } = req.body;
    const user = await UsersQueries.getOneUserByName(username);

    if (user && bcrypt.compareSync(password, user.pword)) {
    // Generate token
        const token = jwt.sign({ user_id: user.user_id, username: user.user, rol: user.rol }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ success: true, token });
    } 
    else if (!bcrypt.compareSync(password, user.pword)) {
        res.json({ success: true, message:'Invalid credentials' });
    }
    else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
}

module.exports = { login };