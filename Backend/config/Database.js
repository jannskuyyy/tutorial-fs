import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "putrajan21", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
