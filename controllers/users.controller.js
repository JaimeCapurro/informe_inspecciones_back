const UsersQueries = require('../queries/users.queries.js');


class UsersController {

    async getAllUsers(req, res){
        try {
            const users = await UsersQueries.getAllUsers();
            res.json({ success: true, data: users });
        }catch(e){
            console.log('Error at: UsersController.getAllUsers. ', e);
        }
    };

    async getOneUserByID(req, res){
        try {
            const { id } = req.params;
            const user = await UsersQueries.getOneUserByID(id);
            if (user) {
                res.json({ success:true, data: user });
            }
        }catch(e){
            console.log('Error at: UsersController.getOneUserByID. ', e);
        }
    };

    async getOneUserByName(req, res){
        try {
            const { username } = req;
            const user = await UsersQueries.getOneUserByName(username);
            if (user) {
                //console.log(res);
                res.json({ success:true, data: user });
            }
        }catch(e){
            console.log('Error at: UsersController.getOneUserByName. ', e);
        }
    };

    async createUser(req, res){
        try {
            const user = req.body;
            const userRepo = await UsersQueries.createUser(user);
            res.json({ success: true, data: userRepo, msg: "User creado con exito" });

        }catch(e){
            console.log('Error at: UsersController.createUser. ', e);
        }
    };

    async updateUser(req, res){
        try {
            const { id } = req.params;
            const user = req.body;
            await UsersQueries.updateUser( user, id );

        }catch(e){
            console.log('Error at: UsersController.updateUser. ', e)
        }
    };

}

module.exports = new UsersController();