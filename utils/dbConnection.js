require("dotenv").config();

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.SQL_DB, "root", process.env.SQL_PASS, {
    host: "localhost",
    dialect: "mysql",
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConnection();

module.exports = sequelize;
