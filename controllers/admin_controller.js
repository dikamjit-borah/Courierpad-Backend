const db = require("../models");
const admin_services = require("../services/admin_services");

exports.add_agent = async (req, res) => {

  let transaction;

  transaction = db.sequelize.transaction();
  created_agent = await admin_services.add_agent(req.body, res, transaction);
  let for_agent_status = {}
  let agent_id = created_agent["agent_id"];
  let agent_name = created_agent["agent_name"];
 
  for_agent_status["agent_id"] = agent_id;
  for_agent_status["agent_name"] = agent_name;
  for_agent_status["agent_status"] = "IDLE";
  added_to_agent_status = await admin_services.add_to_agent_status_table(for_agent_status, res, transaction)
  
  res.send("Agent created");
};

exports.view_agents = async (req, res) => {
  all_agents = await admin_services.view_agents();
  res.send(all_agents);
};

exports.add_order = async (req, res) => {
  created_order = await admin_services.add_order(req.body, res);
  res.send("Order created");
};

exports.view_orders = async (req, res) => {
  all_orders = await admin_services.view_orders();
  res.send(all_orders);
};

exports.order_details = async (req, res) => {
    details_of_the_order = await admin_services.order_details(req.params["id"], res);
    res.send(details_of_the_order);
  };
  