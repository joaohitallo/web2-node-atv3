'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Generos.hasMany(models.Filmes, {
        foreignKey: 'id'
      })
      Generos.hasMany(models.Series, {
        foreignKey: 'id'
      })
    }
  };
  Generos.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Generos',
  });
  return Generos;
};