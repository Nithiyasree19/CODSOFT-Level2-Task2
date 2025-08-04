const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// @route POST /api/quizzes
router.post('/', async (req, res) => {
  console.log("📥 Incoming Quiz Data:", req.body);
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    console.error("🔥 Error Saving Quiz:", err);
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

// ✅ TEST ROUTE (for debugging)
router.get('/test', (req, res) => res.send('Quiz route working!'));

module.exports = router;
