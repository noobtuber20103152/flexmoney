const mongoose = require("mongoose");
const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 65,
  },
  email: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    state: String,
    zipCode: String,
  },
});

const enrollmentSchema = new mongoose.Schema({
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant",
    required: true,
  },
  batch: {
    type: String,
    required: true,
    enum: ["6-7AM", "7-8AM", "8-9AM", "5-6PM"],
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});

const paymentSchema = new mongoose.Schema({
  enrollment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Enrollment",
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});

const Participant = mongoose.model("Participant", participantSchema);
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = { Participant, Enrollment, Payment };
