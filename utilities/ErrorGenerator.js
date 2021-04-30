function generateError(errorMessage, res,  errorCode = 500)
{
    console.log(errorMessage);
    if(errorMessage == "SequelizeUniqueConstraintError")
        res.send ("Given id is already present.")
    if(errorMessage == "ReferenceError")
        res.send ("Cannot insert data into database. Try again after sometime.")
    else 
        res.send("yoyoyoy"+errorMessage)
    
}

module.exports ={generateError}
