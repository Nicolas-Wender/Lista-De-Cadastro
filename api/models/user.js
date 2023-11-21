'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    Nome: DataTypes.STRING,
    Telefone: DataTypes.INTEGER,
    DataDeNascimento: DataTypes.DATE,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};