const express = require("express");
const admin_router = express.Router();
const admin_controller = require("../controllers/admin_controller");


admin_router.post("/add_agent", admin_controller.add_agent);
admin_router.get("/get_order_public", admin_controller.order_details_public);
admin_router.get("/view_agents", admin_controller.view_agents);
admin_router.get("/available_agents", admin_controller.view_available_agents);

admin_router.post("/add_order", admin_controller.add_order);
admin_router.post("/add_order_public", admin_controller.add_order_public);

//admin_router.post("/create_order", admin_controller.create_order);


admin_router.get("/view_orders", admin_controller.view_orders);
admin_router.get("/order_details/:id", admin_controller.order_details);


admin_router.put("/order/:id", admin_controller.update_order_status)
//admin_router.put("/agent/:id", admin_controller.update_agent_status)



module.exports = admin_router