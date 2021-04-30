const express = require("express");
const admin_router = express.Router();
const admin_controller = require("../controllers/admin_controller");


admin_router.post("/add_agent", admin_controller.add_agent);
admin_router.get("/view_agents", admin_controller.view_agents);

admin_router.post("/add_order", admin_controller.add_order);
admin_router.get("/view_orders", admin_controller.view_orders);
admin_router.get("/order_details/:id", admin_controller.order_details);

module.exports = admin_router