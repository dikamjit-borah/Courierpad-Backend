const ErrorGenerator = require("../utilities/ErrorGenerator");
const db = "../models/index";
const { AGENTS_TABLE, ORDERS_TABLE, AGENT_STATUS_TABLE } = require("../models/index");

exports.add_agent = async (data, res, transaction) => {
  let agent;
    agent = await AGENTS_TABLE.create({
      ...data,
    }, {transaction});


  return agent;
};

exports.add_to_agent_status_table = async(data, res, transaction) =>{

    const added_to_agent_status = await AGENT_STATUS_TABLE.create({
      ...data
    }, {transaction});
    return added_to_agent_status;
  
}

exports.view_agents = async () => {
  let agents = await AGENTS_TABLE.findAll();
  return agents;
};


exports.view_available_agents = async () => {
  let agents = await AGENT_STATUS_TABLE.findAll({
    where:{
      agent_status:"IDLE"
    }
  });
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



exports.update_order_status = async (order_id, set_order_status, res) =>{
  let updated_order;
  try {
    updated_order = await ORDERS_TABLE.update({
      order_status: set_order_status
    }, {
      where:{order_id}
    });
  } catch (error) {
    ErrorGenerator.generateError(error.name, res);
  }
  res.send("Order #" +  order_id + " updated!")
  return updated_order;
}


exports.update_agent_status = async (agent_id, assigned_order, set_agent_status, res) =>{
  let updated_order;
  try {
    updated_order = await AGENT_STATUS_TABLE.update({
      agent_status: set_agent_status
    }, {
      where:{agent_id}
    });
  } catch (error) {
    ErrorGenerator.generateError(error.name, res);
  }
  return updated_order;
}