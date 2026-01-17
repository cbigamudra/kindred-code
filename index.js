const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to allow the app to read JSON data
app.use(express.json());

// 1. Mock Database: In a real app, this would be a PostgreSQL database
let challenges = [
  {
    id: "eco-001",
    company: "GreenTree Co",
    task: "Pick up 1 bag of trash",
    donationAmount: 10, // Dollars per person
    goalParticipants: 50,
    currentParticipants: 0,
    status: "active"
  }
];

// 2. Route: Home page message
app.get('/', (req, res) => {
  res.send('Welcome to the Kindred-Code API! The bridge between corporate wealth and action.');
});

// 3. Route: Get all active challenges
app.get('/api/challenges', (req, res) => {
  res.json(challenges);
});

// 4. Route: Submit Proof
// In a real scenario, this would receive a photo file and GPS coordinates
app.post('/api/submit-proof', (req, res) => {
  const { challengeId, userId, lat, lng, photoUrl } = req.body;

  // Find the challenge
  const challenge = challenges.find(c => c.id === challengeId);

  if (!challenge) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  // LOGIC: Simple verification check (Placeholder)
  if (lat && lng && photoUrl) {
    challenge.currentParticipants += 1;
    
    // Check if goal is met
    let message = "Proof submitted successfully! Thank you for your impact.";
    if (challenge.currentParticipants >= challenge.goalParticipants) {
      message = "Challenge Complete! Donation triggered.";
    }

    res.json({
      message: message,
      currentProgress: `${challenge.currentParticipants}/${challenge.goalParticipants}`
    });
  } else {
    res.status(400).json({ error: "Missing evidence (GPS or Photo)" });
  }
});

app.listen(PORT, () => {
  console.log(`Kindred-Code Server is running on http://localhost:${PORT}`);
});