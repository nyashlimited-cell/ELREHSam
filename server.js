const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const path = require("path");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/properties", require("./routes/propertyRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));

// Serve simple static pages for payments and invoices
app.get('/payment', (req, res) => {
	res.sendFile(path.join(__dirname, 'payment.html'));
});

app.get('/invoice', (req, res) => {
	res.sendFile(path.join(__dirname, 'invoice.html'));
});

app.get('/crypto', (req, res) => {
	res.sendFile(path.join(__dirname, 'crypto.html'));
});

// serve login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// optionally serve static assets (css, js, html files) at root
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));