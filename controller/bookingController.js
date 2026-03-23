const { Booking, Users, Bus } = require("../models/index");

// POST /booking  — Create a new booking
const addBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;
        const booking = await Booking.create({ userId, busId, seatNumber });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await Booking.findAll({
            where: { userId: id },
            include: [
                {
                    model: Bus,
                    attributes: ["busNumber"],   // only return busNumber in response
                },
            ],
        });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getBusBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await Booking.findAll({
            where: { busId: id },
            include: [
                {
                    model: Users,
                    attributes: ["name", "email"],  // only return name & email in response
                },
            ],
        });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addBooking,
    getUserBookings,
    getBusBookings,
};
