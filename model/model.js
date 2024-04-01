const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  designation: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cAddress: {
    type: String,
    required: true,
  },
  adharr: {
    type: Number,
    required: true,
    unique: true,
  },
  pan: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  highSchoolPercent: {
    type: Number,
  },
  highSchoolYear: {
    type: Number,
  },
  interPercent: {
    type: Number,
  },
  interYear: {
    type: Number,
  },
  diplomaPercent: {
    type: Number,
  },
  diplomaYear: {
    type: Number,
  },
  exp: [
    {
      years: Number,
      comment: String,
    },
  ],
  transactionId: {
    type: String,
    required: true,
  },
});

const FormData = mongoose.model("Form", formSchema);

module.exports = FormData;
