require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

const QUIZ_API_URL = "https://quizapi.io/api/v1/questions";
const API_KEY = process.env.QUIZ_API_KEY;

app.get("/api/question", async (req, res) => {
  try {
    const difficulty = req.query.difficulty || "medium";
    const response = await axios.get(QUIZ_API_URL, {
      params: { apiKey: API_KEY, difficulty, limit: 1 },
    });

    const rawQuestion = response.data[0];
    const formattedQuestion = {
      question: rawQuestion.question,
      answers: Object.values(rawQuestion.answers).filter(Boolean),
      correct_answer: rawQuestion.correct_answer,
    };

    res.json(formattedQuestion);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
