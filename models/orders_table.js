'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ORDERS_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ORDERS_TABLE.init({
    order_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    order_client: DataTypes.STRING,
    order_receiver: DataTypes.STRING,
    order_location: DataTypes.STRING,
    order_phone: DataTypes.STRING,
    order_amount: DataTypes.INTEGER,
    order_status: DataTypes.STRING,
    order_assigned_to: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ORDERS_TABLE',
  });
  ORDERS_TABLE.removeAttribute("id");
  return ORDERS_TABLE;
};