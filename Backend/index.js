require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const sendEmailOTP = require("./Config/emailService");
const sendSMSOTP = require("./Config/smsService");


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
