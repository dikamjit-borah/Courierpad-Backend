const ErrorGenerator = require("../utilities/ErrorGenerator");
const db = "../models/index";
const { AGENTS_TABLE, ADMIN_TABLE } = require("../models/index");

exports.authenticate_admin =async(user_id, user_password, res) =>{

    let admin;
    try {
        admin = await ADMIN_TABLE.findOne({
            where:{
                admin_id:user_id,
            }
        })
    } catch (error) {
        ErrorGenerator.generateError(error.name, res);
    }
    
    return admin;

}

exports.authenticate_agent =async(user_id, user_password) =>{

    
}
