const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Booking = sequelize.define("Booking", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key: "id",
        },
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Buses",
            key: "id",
        },
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Booking;
