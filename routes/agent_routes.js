const express = require("express");
const agent_router = express.Router();
const agent_controller = require("../controllers/agent_controller");

agent_router.get("/history", agent_controller.get_agent_history);
agent_router.post("/updateOrder", agent_controller.update_order_status);



module.exports = agent_router