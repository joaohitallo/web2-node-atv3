'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filmes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Filmes.belongsTo(models.Generos, {
        foreignKey: 'generos_id'
      })
    }
  };
  Filmes.init({
    nome: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    ano: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Filmes',
  });
  return Filmes;
};