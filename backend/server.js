const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//import routes
const user = require("./Routes/userRoutes");
const room = require("./Routes/roomRoutes");
const reservation = require("./Routes/resevationRoutes");
const payment = require("./Routes/paymentRoutes");
const taxi = require("./Routes/TaxiRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin:["http://localhost:3000"],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use Routes
app.use("/user",user);
app.use("/room",room);
app.use("/resevation",reservation);
app.use("/payment",payment);
app.use("/taxi",taxi);

//DB connection
const DB_URL =
  "mongodb+srv://admin:admin@dsrest.izcli.mongodb.net/DSdatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});