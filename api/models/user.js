'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      Nome: DataTypes.STRING,
      Telefone: DataTypes.STRING,
      DataDeNascimento: DataTypes.DATE,
      Email: DataTypes.STRING
    },
    { timestamps: false }
  )

  return User
}
