const Bus = require("../models/bus");
const { Op } = require("sequelize");
const addBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;
        const bus = await Bus.create({ busNumber, totalSeats, availableSeats });
        res.status(201).json(bus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const findBus = async (req, res) => {
    try {
        const seats = parseInt(req.params.seats);

        const bus = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gte]: seats
                }
            }
        });

        if (!bus) {
            return res.status(404).json({ error: "Bus not found" });
        }

        res.status(200).json(bus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllBuses = async (req, res) => {
    try {
        const buses = await Bus.findAll();
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addBus,
    findBus,
    getAllBuses
}
