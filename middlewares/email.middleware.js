const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'tagsbot90@gmail.com',
            pass: 'roos dtfz fylh uced'
        },
    }
);

async function sendReport (req, res, next) {
    try {
        const pdfPath = path.join(req.file.path);

        const mail = {
            from: 'tagsbot90@gmail.com',
            to: 'tagsbot90@gmail.com',
            subject: 'Recibo de Inspección de Camionetas',
            text: 'Copia de informe inspección de camionetas',
            attachments: [
                {
                    filename: 'informe.pdf',
                    path: pdfPath,
                },
            ],
        };
        
        await transporter.sendMail(mail);
        next();
    } catch (error) {
        next(error);
    }
} ;




module.exports = { sendReport };