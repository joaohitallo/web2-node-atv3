'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcryptjs');
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuarios.init({
    email: DataTypes.STRING,
    senhaHash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  Usuarios.beforeCreate(function(user, options) {
    return cryptPassword(user.senhaHash)
      .then((success) => {
        user.senhaHash = success;
      })
      .catch((err) => console.log(err));
  });
  
  function cryptPassword(senhaHash) {
    console.log('cryptPassword ' + senhaHash);
    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) return reject(err);
  
        bcrypt.hash(senhaHash, salt, function(err, hash) {
          if (err) return reject(err);
          return resolve(hash);
        });
      });
    });
  }
  return Usuarios;
};