const db = require("../models/index");
const agent_services = require("../services/agent_services");
const ErrorGenerator = require("../utilities/ErrorGenerator");

exports.get_agent_history = async (req, res) => {
  let agent_id = req.query["agent_id"]
  const agent_history = await agent_services.agent_history_service(
    agent_id, res
  );
 res.send(agent_history);
};

exports.update_order_status = async (req, res)=> {
  const {order_id, agent_id} = req.body
  const order = await agent_services.update_order_status(
    order_id, agent_id,res
  );
 res.send("Order Status Updated");
}
