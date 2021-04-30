const ErrorGenerator = require("../utilities/ErrorGenerator");
const db = "../models/index";
const { AGENTS_TABLE, ORDERS_TABLE, AGENT_STATUS_TABLE } = require("../models/index");

exports.add_agent = async (data, res, transaction) => {
  let agent;
  try {
    agent = await AGENTS_TABLE.create({
      ...data,
    }, transaction);
  } catch (err) {
    ErrorGenerator.generateError(err.name, res);
  }

  return agent;
};

exports.add_to_agent_status_table = async(data, res, transaction) =>{
  let added_to_agent_status;
  console.log(data);
  try {
    added_to_agent_status = await AGENT_STATUS_TABLE.create({
      ...data
    }, transaction)
  } catch (err) {
    ErrorGenerator.generateError(err.name, res);
  }
  return added_to_agent_status;
}

exports.view_agents = async () => {
  let agents = await AGENTS_TABLE.findAll();
  return agents;
};

exports.add_order = async (data, res) => {
  let order;
  try {
    order = await ORDERS_TABLE.create({
      ...data,
    });
  } catch (err) {
    ErrorGenerator.generateError(err.name, res);
  }

  return order;
};

exports.view_orders = async () => {
  let orders = await ORDERS_TABLE.findAll();
  return orders;
};

exports.order_details = async (order_id, res) => {
  let order_detail;
  try {
    order_detail = await ORDERS_TABLE.findOne({
      where: {
        order_id,
      },
    });
  } catch (error) {
    ErrorGenerator.generateError(error.name, res);
  }
  return order_detail;
};
