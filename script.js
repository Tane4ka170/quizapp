const quizData = [
  {
    question: "How many faces does a Dodecahedron have?",
    a: "12",
    b: "10",
    c: "8",
    d: "44",
    correct: "a",
  },
  {
    question: "Where would you be if you were standing on the Spanish Steps?",
    a: "Paris",
    b: "Rome",
    c: "Istanbul",
    d: "Berlin",
    correct: "b",
  },
  {
    question: "What software company is headquartered in Redmond, Washington?",
    a: "Inception",
    b: "The Dark Knight",
    c: "The Shawshank Redemption",
    d: "The Godfather",
    correct: "c",
  },
  {
    question: "How many bones do we have in an ear?",
    a: "6",
    b: "4",
    c: "3",
    d: "5",
    correct: "c",
  },
  {
    question: "Aureolin is a shade of what color?",
    a: "Blue",
    b: "Green",
    c: "Red",
    d: "Yellow",
    correct: "d",
  },
  {
    question: "What Renaissance artist is buried in Rome's Pantheon?",
    a: "Raphael",
    b: "Michelangelo",
    c: "Leonardo da Vinci",
    d: "Donatello",
    correct: "a",
  },
  {
    question: "What is the world's fastest bird?",
    a: "Gray-headed Albatross",
    b: "Spur-winged Goose",
    c: "White-throated Needletail",
    d: "Peregrine Falcon",
    correct: "d",
  },
  {
    question:
      "Roald Amundsen was the first man to reach the South Pole, but where was he from?",
    a: "Germany",
    b: "Norway",
    c: "Denmark",
    d: "United Kingdom",
    correct: "b",
  },
  {
    question: "What is a group of pandas known as?",
    a: "A cupboard",
    b: "A pandemonium",
    c: "A colony",
    d: "An embarrassment",
    correct: "d",
  },
  {
    question: "Kratos is the main character of what video game series?",
    a: "Assassin's Creed",
    b: "Resident Evil",
    c: "God of War",
    d: "Uncharted",
    correct: "c",
  },
  {
    question: "What is the largest Spanish-speaking city in the world?",
    a: "Guatemala City",
    b: "Barcelona",
    c: "Caracas",
    d: "Mexico City",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
