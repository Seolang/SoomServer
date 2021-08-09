import { Client } from "https://deno.land/x/mysql/mod.ts";
// config
import { DATABASE, TABLE } from "./config.ts";

const client = await new Client();

client.connect({
  hostname: "192.168.1.113",
  username: "mcttoy",
  password: "akcpxp486$",
  db: "breathe",
});

// const createQuery = async () => {
//   await client.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);
//   await client.execute(`USE ${DATABASE}`);

//   await client.execute(`DROP TABLE IF EXISTS ${TABLE.TB_USER}`);
//   // create table
//   await client.execute(`
//     CREATE TABLE ${TABLE.TB_USER} (
//         id int(11) NOT NULL AUTO_INCREMENT,
//         user varchar(100) NOT NULL,
//         isCompleted boolean NOT NULL default false,
//         PRIMARY KEY (id)
//     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
//   `);
// };

// createQuery();

export default client;
