const db = require("../models/index");
const agent_services = require("../services/agent_services");
const ErrorGenerator = require("../utilities/ErrorGenerator");

exports.get_agent_history = async (req, res) => {
  let agent_id = req.query["agent_id"]
  agent_history = await agent_services.agent_history_service(
    agent_id, res
  );
 res.send(agent_history);
};
