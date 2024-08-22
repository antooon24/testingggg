const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/verify', (req, res) => {
  const discordId = req.query.discordId;

  if (!discordId) {
    return res.status(400).send('Missing Discord ID.');
  }

  // Add your verification logic here
  res.send(`Verification initiated for Discord ID: ${discordId}`);
});

exports.verifyFunction = functions.https.onRequest(app);
