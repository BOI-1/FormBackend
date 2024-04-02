const express = require("express");
const mongoose = require("mongoose");
const FormData = require("./model/model");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: "20kb" }));
app.use(cors());
// app.use(express.urlencoded({ extended: true, limit: "20kb" }));

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.post("/submitForm", async (req, res) => {
  try {
    const {
      designation,
      name,
      fName,
      dob,
      category,
      address,
      cAddress,
      adharr,
      pan,
      phone,
      highSchoolPercent,
      highSchoolYear,
      interPercent,
      interYear,
      diplomaPercent,
      diplomaYear,
      exp,
      transactionId
    } = req.body; // Added this line to fix 'body is not defined' error

    const user = await FormData.findOne({ adharr });
    if (!user) {
      const data = await new FormData({
        designation,
        name,
        fName,
        dob,
        category,
        address,
        cAddress,
        adharr,
        pan,
        phone,
        highSchoolPercent,
        highSchoolYear,
        interPercent,
        interYear,
        diplomaPercent,
        diplomaYear,
        exp,
        transactionId
      }).save();
      return res.json({ data: data, message: "form filled",status:200 });
    }
    return res.json({ message: "Form with this Adhaar is already filled.",status:400 });
  } catch (e) {
    return res.json({ error: e ,status:400}); // Return here to avoid sending multiple responses
  }
});

app.post("/", (req,res) => {
  res.json({message:"server running"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
