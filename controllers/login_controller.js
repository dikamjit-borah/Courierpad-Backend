const db = require("../models/index");
const login_services = require("../services/login_services");
const ErrorGenerator = require("../utilities/ErrorGenerator");
const jwt = require("jsonwebtoken");

exports.authenticate_user = async(req, res)=>{


    const user_type = req.body.user_type;
    const user_id = req.body.user_id;
    const user_password = req.body.user_password;
    
    
    if(user_type == "admin")
    {
        admin = await login_services.authenticate_admin(user_id, user_password,);
        //console.log(admin.admin_id);
        if(admin == null)
        {
            res.json({status:"ok", data:`Admin id not found` })
        }
        else{
            if(admin.admin_password == user_password)
            {
                const token = jwt.sign({user_id}, process.env.JWT_SECRET)
                //lolcalstorage
                res.json({status:"ok", data:`Admin #${admin.admin_id} logged in with token ${token}` })
            }

            else
            res.json({status:"ok", data:`Invalid credentials` })
        }  
        
    }

    else if(user_type == "agent")
    {
        //res.send("Admin login")
        agent_token = login_services.authenticate_agent(user_id, user_password);
    }
    else{
        res.send("Select a correct user type");
    }

}