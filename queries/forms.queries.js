const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");

const { Forms } = require('../models/db')
const { Users } = require('../models/db')


class FormsQueries {

    async getAllForms() {
        return await Forms.findAll({
            include: [
                { model: Users }
            ]
        });
    };

    async getOneFormByID(ID) {
        return await Forms.findOne({
            where: { form_id: ID }
        });
    };

    async createForm(ID, data) {
        return await Forms.create({
            user_id: ID,
            document: data
        });
    };

    async updateForm(data, ID) {
        return await Forms.update({
            data, where: { form_id: ID }
        });
    };
    
}
module.exports = new FormsQueries();