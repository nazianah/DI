const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Sample trivia quiz questions and answers (hard-coded for simplicity)
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Initial state for the quiz
let currentQuestionIndex = 0;
let userScore = 0;

// Router for quiz-related routes
const quizRouter = express.Router();

// GET /quiz
quizRouter.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    const currentQuestion = triviaQuestions[currentQuestionIndex].question;
    res.json({ question: currentQuestion });
  } else {
    res.json({ message: 'Quiz completed. Use /quiz/score to view your final score.' });
  }
});

// POST /quiz
quizRouter.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    userScore++;
    res.json({ message: 'Correct! Next question.' });
  } else {
    res.json({ message: `Incorrect! The correct answer is ${correctAnswer}. Next question.` });
  }

  // Move to the next question
  currentQuestionIndex++;
});

// GET /quiz/score
quizRouter.get('/score', (req, res) => {
  res.json({ score: userScore });
});

// Mount the quiz router at /quiz
app.use('/quiz', quizRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
