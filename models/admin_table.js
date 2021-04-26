'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ADMIN_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ADMIN_TABLE.init({
    admin_id: DataTypes.INTEGER,
    admin_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ADMIN_TABLE',
  });
  ADMIN_TABLE.removeAttribute("id")
  return ADMIN_TABLE;
};