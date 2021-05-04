'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AGENT_STATUS_TABLE extends Model {
    static associate(models) {
      // define association here
    }
  };
  AGENT_STATUS_TABLE.init({
    agent_id: DataTypes.INTEGER,
    agent_status: DataTypes.STRING,
    agent_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AGENT_STATUS_TABLE',
  });
  AGENT_STATUS_TABLE.removeAttribute("id");
  return AGENT_STATUS_TABLE;
};