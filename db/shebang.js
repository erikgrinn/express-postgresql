#! /usr/bin/env node

// node will ignore shebang line if manually running
// (so not in terminal)
// remember it needs to be very first line
require("dotenv").config();

const { Client } = require("pg");
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const SQLDrop = `
DROP TABLE usernames;
`;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function seed() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQLDrop)
  await client.query(SQL);
  await client.end();
  console.log("done");
}

seed();
