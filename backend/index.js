// app.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ConnectToMongo = require("./db/connect");
const {
  Participant,
  Enrollment,
  Payment,
} = require("./schema/participantSchema");

const app = express();
const PORT = process.env.PORT || 8000;

ConnectToMongo();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.post("/api/enroll", async (req, res) => {
  // let body = JSON.parse(req.body);
  // console.log(body);
  try {
    const participant = await Participant.create(req.body.participant);
    const enrollment = await Enrollment.create({
      participant: participant._id,
      batch: req.body.batch,
    });
    const paymentDetails = {
      enrollment: enrollment._id,
      paymentAmount: 500,
    };
    const payment = await Payment.create(paymentDetails);

    res.json({ enrollment, payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
app.get("/", (req, res) => {
  return res.send("Hello how are you ?");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
