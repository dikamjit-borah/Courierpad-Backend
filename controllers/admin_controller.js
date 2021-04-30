const admin_services = require("../services/admin_services");

exports.add_agent = async(req, res)=>{
    console.log((req.body));
    created_agent = await admin_services.add_agent(req.body);
    //console.log(created_agent);
    res.send("Agent created");
}