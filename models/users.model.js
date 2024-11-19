// Define the User model
module.exports = (sequelize, type) => {
  return sequelize.define("users", {
    user_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: type.STRING(50),
      allowNull: false, 
      unique: true      
    },
    pword: {
      type: type.STRING(60), 
      allowNull: false      
    },
    nombre: {
      type: type.STRING(50),
      allowNull: true,
      defaultValue: null,        
    },
    rol: {
      type: type.STRING(50),
      allowNull: true       
    },
    userAt: {
      type: type.STRING(50),
      allowNull: true,
      defaultValue: null,       
    },
    createdAt: {
      type: type.DATE,
      defaultValue: type.NOW 
    },
    updatedAt: {
      type: type.DATE,
      defaultValue: type.NOW 
    }
  }, {
    timestamps: true,
  });
};
