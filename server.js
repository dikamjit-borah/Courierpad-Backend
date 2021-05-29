//migration always run with development environment, so when running migration for production set development data to production data, run migration and set back#

const config = require("./config/config.json");
const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");
const http = require("http");
const mysql = require("mysql2");
const login_routes = require("./routes/login_routes");
const admin_routes = require("./routes/admin_routes");
const agent_routes = require("./routes/agent_routes");

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: `http://localhost:${port}`,
}; //ip of frontend. or where frontend is hosted.

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", login_routes);
app.use("/api/admin",  admin_routes);
app.use("/api/agent", agent_routes);

app.listen(port, () => {
  console.log(port);
  const sqlConnection = mysql.createConnection(
    config["production-connection-check"]
  );
  return sqlConnection.connect((err) => {
    if (err) {
      console.log("Database Connection Error: ", err);
      return;
    }
    console.log("Database connected as id: ", sqlConnection.threadId);
  });
});

// http.createServer((req, res)=>{

//     res.writeHead(200,  {'Content-Type':'text/html'});
//     res.write("HomePage");
//     res.end()

// }).listen(3000, ()=>{

// })
