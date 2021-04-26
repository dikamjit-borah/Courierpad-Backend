'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AGENTS_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AGENTS_TABLE.init({
    agent_id: DataTypes.INTEGER,
    agent_name: DataTypes.STRING,
    agent_password: DataTypes.STRING,
    agent_dob: DataTypes.DATE,
    agent_doj: DataTypes.DATE,
    agent_phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AGENTS_TABLE',
  });
  AGENTS_TABLE.removeAttribute("id");
  return AGENTS_TABLE;
};