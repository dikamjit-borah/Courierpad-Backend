const ErrorGenerator = require("../utilities/ErrorGenerator");
const db = "../models/index";
const { AGENTS_TABLE, ORDERS_TABLE, AGENT_STATUS_TABLE } = require("../models/index");

exports.agent_history_service = async (agent_id, res) => {
  let agent;
  try {
    agent = await ORDERS_TABLE.findOne({ where: { order_assigned_to: agent_id } })
  } catch (error) {
    ErrorGenerator.generateError(error, res)
  }
    


  return agent;
};
