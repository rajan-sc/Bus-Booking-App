const express = require("express");
const app = express();
const db = require("./utils/dbConnection");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoute");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

db.sync({ force: false }).then(() => {
    console.log("Database synced");
}).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

