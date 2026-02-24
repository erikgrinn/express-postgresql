const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", 
  user: process.env.DB_USER,
  database: "top_users",
  password: process.env.DB_PASSWORD,
  port: 5432, // The default port
});

// or
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
