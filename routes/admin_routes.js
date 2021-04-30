const express = require("express");
const admin_router = express.Router();
const admin_controller = require("../controllers/admin_controller");


admin_router.post("/add_agent", admin_controller.add_agent);

module.exports = admin_router