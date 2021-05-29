const express = require("express");
const agent_router = express.Router();
const agent_controller = require("../controllers/agent_controller");

agent_router.get("/history", agent_controller.get_agent_history);




module.exports = agent_router