const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Bus = sequelize.define("Bus", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Bus;

