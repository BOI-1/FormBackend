const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  postName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fatherName: {
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
  correspondingAddress: {
    type: String,
    required: true,
  },
  adhaar: {
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
  highschoolpercent: {
    type: Number,
  },
  highschoolyear: {
    type: Number,
  },
  interpercent: {
    type: Number,
  },
  interyear: {
    type: Number,
  },
  diplomapercent: {
    type: Number,
  },
  diplomayear: {
    type: Number,
  },
  exp: [
    {
      years: Number,
      comment: String,
    },
  ],
});

const FormData = mongoose.model("Form", formSchema);

module.exports = FormData;
