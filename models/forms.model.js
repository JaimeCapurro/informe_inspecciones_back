const { DataTypes } = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define("Informe", {
        form_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: null,
            references: {
                model: "users", // 
                key: "user_id"
            },
            onDelete: 'CASCADE', // 
            onUpdate: 'CASCADE'
        },
        document: {
            type: type.BLOB('medium'),
            allowNull: true // 
        },
        userAt: {
            type: type.STRING,
            defaultValue: null,
            allowNull: true // 
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW // Sets the default value to the current date
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW // Sets the default value to the current date
        }
    }, {
        timestamps: true, // This will automatically add createdAt and updatedAt fields
        tableName: 'informes' // 
    });


};
