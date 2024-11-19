const express = require('express');
const UsersController = require('../controllers/users.controller');
const checktoken = require('../middlewares/auth.middleware');
const router = express.Router();
const multer = require("multer");
const upload = multer();

router.get('/getAll', checktoken.authenticateToken, UsersController.getAllUsers);
router.get('/getOneByID/:id', checktoken.authenticateToken, UsersController.getOneUserByID);
router.get('/getOneByName/:id', checktoken.authenticateToken, UsersController.getOneUserByName);
router.post('/createUser', checktoken.authenticateToken, upload.none(), UsersController.createUser);
router.put('/updateUser/:id', checktoken.authenticateToken, UsersController.updateUser);

module.exports = router;
