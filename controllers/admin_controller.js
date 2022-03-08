const db = require("../models/index");
const admin_services = require("../services/admin_services");
const ErrorGenerator = require("../utilities/ErrorGenerator");

exports.add_agent = async (req, res) => {
  let transaction;
  transaction = await db.sequelize.transaction();
  try {
    created_agent = await admin_services.add_agent(req.body, res, transaction);
    let for_agent_status = {};

    let agent_id = created_agent["agent_id"];
    let agent_name = created_agent["agent_name"];

    for_agent_status["agent_id"] = agent_id;
    for_agent_status["agent_name"] = agent_name;
    for_agent_status["agent_status"] = "IDLE";

    added_to_agent_status = await admin_services.add_to_agent_status_table(
      for_agent_status,
      res,
      transaction
    );

    await transaction.commit();
    res.send(created_agent);
    //Email service to be implemented for agent
  } catch (error) {
    await transaction.rollback();
    ErrorGenerator.generateError(error.name, res);
    
  }
};

exports.view_agents = async (req, res) => {
  all_agents = await admin_services.view_agents();
  res.send(all_agents);
};

exports.view_available_agents = async (req, res) => {
  available_agents = await admin_services.view_available_agents();
  res.send(available_agents);
};

exports.add_order = async (req, res) => {
  created_order = await admin_services.add_order(req.body, res);

  //update agent status
  order_id = created_order.order_id;
  assigned_agent_id = created_order.order_assigned_to;

  agent_updated = this.update_agent_status(assigned_agent_id, "IN TRANSIT");

  res.send(created_order);
    //Email service to be implemented for agent and user

};

exports.add_order_public = async (req, res) => {
  created_order = await admin_services.add_order_public(req.body, res);
  res.send(created_order);

      //Email service to be implemented for user
};

exports.view_orders = async (req, res) => {
  all_orders = await admin_services.view_orders(req.params["assigned"]);
  res.send(all_orders);
};

exports.order_details = async (req, res) => {
  details_of_the_order = await admin_services.order_details(
    req.params["id"],
    res
  );
  res.send(details_of_the_order);
};

exports.order_details_public = async (req, res) => {
  details_of_the_order = await admin_services.order_details(
    req.query["id"],
    res
  );
  res.send(details_of_the_order);
};
exports.update_order_status = async (req, res) => {

  order_id =  req.params["id"];

  updated_order = await admin_services.update_order_status(
   order_id,
    "COMPLETED",
    res
  );

  details_of_the_order =  await admin_services.order_details(
    order_id,
    res
  );
  order_assigned_to = details_of_the_order.order_assigned_to;
  console.log(order_assigned_to);

  this.update_agent_status(order_assigned_to, "IDLE");
  res.send(`Order #${order_id} has been completed by Agent #${order_assigned_to}`);

      //Email service to be implemented to user
};

exports.update_agent_status = async (agent_id, agent_status, res) => {
  updated_agent = await admin_services.update_agent_status(
    agent_id,
    agent_status,
    res
  );
  return updated_agent;

      //Email service to be implemented to agent
};

exports.partial_order = async (req, res) => {
  updated_order = await admin_services.partial_order(
    req.body,
    res
  );

  agent_updated = this.update_agent_status(assigned_agent_id, "IN TRANSIT");

  res.send(updated_order)
}