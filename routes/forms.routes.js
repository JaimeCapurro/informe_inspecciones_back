const express = require('express');
const FormsController = require('../controllers/forms.controller.js');
const checktoken = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware.js');
const sendEmail = require('../middlewares/email.middleware.js');
const router = require("express").Router();



router.get('/getAll', checktoken.authenticateToken, FormsController.getAllForms);
router.get('/getOneByID/:id', checktoken.authenticateToken, FormsController.getOneFormByID);
router.post('/createForm', checktoken.authenticateToken, upload.subirInformes, sendEmail.sendReport, FormsController.createForm);
router.put('/updateForm/:id', checktoken.authenticateToken, FormsController.updateForm);

module.exports = router;