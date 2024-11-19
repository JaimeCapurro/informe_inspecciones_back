const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");

const { Users } = require('../models/db')

class UsersQueries {

    async getAllUsers() {
        return await Users.findAll();
    };

    async getOneUserByName(name) {
        return await Users.findOne({
            where: { user: name }
        });
    };

    async getOneUserByID(ID) {
        return await Users.findOne({
            where: { user: ID }
        });
    };

    async createUser(data) {
        return await Users.create(data);
    };

    async updateUser(data, ID) {
        return await Users.update({
            data, where: { user_id: ID }
        });
    };
    
}
module.exports = new UsersQueries();