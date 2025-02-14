const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");

// Firebase Admin Initialize
admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

// Nagad Payment API Route
app.post("/nagad-payment", (req, res) => {
  res.json({ success: true, message: "Nagad Payment Processed!" });
});

// Deploy Firebase Function
exports.api = functions.https.onRequest(app);
