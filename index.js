const express = require("express");
const mongoose = require("mongoose");
const FormData = require("./model/model");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: "20kb" }));
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
    const body = req.body; // Added this line to fix 'body is not defined' error
    const user = await FormData.findOne({ adhaar: body.adhaar });
    if (!user) {
      const data = await new FormData(body).save();
      return res.json({ data: data, message: "form filled" }); // Return here to avoid sending multiple responses
    }
    return res.json({ message: "Form with this Adhaar is already filled." }); // Return here to avoid sending multiple responses
  } catch (e) {
    return res.json({ error: e }); // Return here to avoid sending multiple responses
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
