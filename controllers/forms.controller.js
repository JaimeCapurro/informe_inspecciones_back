const FormsQueries = require('../queries/forms.queries');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

class FormsController {

    async getAllForms(req, res) {
        try {
            const forms = await FormsQueries.getAllForms();
            res.json({ success: true, data: forms });
        }catch(e){
            console.log('Error at: FormsController.getAllForms ', e);
        }
    };

    async getOneFormByID(req, res) {
        try {
            const { id } = req.params;
            const form = await FormsQueries.getOneFormByID(id);
            if (form) {
                res.json({ success: true, data: form });
            } else {
                res.json({ success: false, msg: "Error" });
            }
        }catch(e){
            console.log('Error at: FormsController.getOneUserByID. ', e);
        }
    };

    async createForm(req, res) {
        try {
            const body = req.body
            const id = body.ID
            const form = req.file;
            
            const filePath = form.path;
            const pdfBlob = fs.readFileSync(filePath);

            const formRepo = await FormsQueries.createForm(id, pdfBlob);
            res.json({ success: true, data: formRepo, msg: "Form creado con exito" });
            
            fs.unlinkSync(filePath);
        }catch(e){
            console.log('Error at: FormsController.createForm. ', e);
        }
    
    };

    async updateForm(req, res) {
        try {
            const { id } = req.params;
            const form = req.body;
            await FormsQueries.updateForm( form, id );
        }catch(e){
            console.log('Error at: FormsController.updateForm. ', e);
        }
    };

}

module.exports = new FormsController();