'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AGENT_STATUS_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AGENT_STATUS_TABLE.init({
    agent_id: DataTypes.INTEGER,
    agent_name: DataTypes.STRING,
    agent_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AGENT_STATUS_TABLE',
  });
  AGENT_STATUS_TABLE.removeAttribute("id");
  return AGENT_STATUS_TABLE;
};