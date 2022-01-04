const ErrorGenerator = require("../utilities/ErrorGenerator");
const db = "../models/index";
const { AGENTS_TABLE, ORDERS_TABLE, AGENT_STATUS_TABLE } = require("../models/index");

exports.agent_history_service = async (agent_id, res) => {
  let agent;
  try {
    agent = await ORDERS_TABLE.findAll({ where: { order_assigned_to: agent_id } })
  } catch (error) {
    ErrorGenerator.generateError(error, res)
  }
  return agent;
};

exports.update_order_status = async (order_id, res) => {
  try {
    const order = await ORDERS_TABLE.update({ order_status: 'COMPLETED' },{ where: { order_id: order_id } })
  } catch (error) {
    ErrorGenerator.generateError(error, res)
  }
  return;
}
