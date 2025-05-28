const questions = [
  {
    question: "¿Qué país ha ganado más Copas del Mundo?",
    answers: ["Alemania", "Italia", "Brasil", "Argentina"],
    correct: 2
  },
  {
    question: "¿Quién ganó el Balón de Oro en 2022?",
    answers: ["Lionel Messi", "Karim Benzema", "Cristiano Ronaldo", "Luka Modric"],
    correct: 1
  },
  {
    question: "¿Qué equipo ganó la Champions League 2023?",
    answers: ["Real Madrid", "Manchester City", "Liverpool", "Bayern Múnich"],
    correct: 1
  },
  {
    question: "¿Qué jugador tiene más goles en la historia del fútbol?",
    answers: ["Cristiano Ronaldo", "Pelé", "Messi", "Romário"],
    correct: 0
  },
  {
    question: "¿Dónde se celebró el Mundial 2018?",
    answers: ["Brasil", "Qatar", "Alemania", "Rusia"],
    correct: 3
  },
  {
    question: "¿Quién es conocido como 'La Pulga'?",
    answers: ["Cristiano Ronaldo", "Neymar", "Messi", "Mbappé"],
    correct: 2
  },
  {
    question: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },
  {
    question: "¿Qué club tiene más Champions League?",
    answers: ["Barcelona", "Milan", "Real Madrid", "Bayern Múnich"],
    correct: 2
  },
  {
    question: "¿Qué selección ganó el Mundial 2014?",
    answers: ["Argentina", "Alemania", "Brasil", "Francia"],
    correct: 1
  },
  {
    question: "¿Quién fue el máximo goleador del Mundial 2022?",
    answers: ["Mbappé", "Messi", "Giroud", "Ronaldo"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreContainer.classList.add("hide");
  document.getElementById("question-container").classList.remove("hide");
  nextBtn.classList.add("hide");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hide");

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => selectAnswer(btn, index));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, index) {
  const correctIndex = questions[currentQuestion].correct;
  const isCorrect = index === correctIndex;

  Array.from(answersEl.children).forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove("correct", "wrong");
    if (i === correctIndex) {
      btn.classList.add("correct");
    } else if (btn === selectedBtn && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  feedbackEl.textContent = isCorrect
    ? "✅ ¡Correcto!"
    : `❌ Incorrecto. La respuesta correcta es: ${questions[currentQuestion].answers[correctIndex]}`;

  if (isCorrect) score++;
  nextBtn.classList.remove("hide");
}

function showScore() {
  document.getElementById("question-container").classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreEl.textContent = `Tu puntuación: ${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

if (restartBtn) {
  restartBtn.addEventListener("click", startQuiz);
}

startQuiz();
