const Users = require("./users");
const Bus = require("./bus");
const Booking = require("./booking");


Users.hasMany(Booking, { foreignKey: "userId" });

Booking.belongsTo(Users, { foreignKey: "userId" });


Bus.hasMany(Booking, { foreignKey: "busId" });

Booking.belongsTo(Bus, { foreignKey: "busId" });

module.exports = { Users, Bus, Booking };
