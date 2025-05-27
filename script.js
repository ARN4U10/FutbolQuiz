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
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  nextBtn.classList.add("hide");

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(btn, index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, index) {
  const isCorrect = index === questions[currentQuestion].correct;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === questions[currentQuestion].correct) {
      btn.classList.add("correct");
    } else if (btn === selectedBtn) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) score++;
  nextBtn.classList.remove("hide");
}

function showScore() {
  document.getElementById("question-container").classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

showQuestion();
