const questions = [
    {
        question: "It's night time. You're driving, but it's snowing heavily. You see a diner nearby with the light on.",
        answers: ["Keep driving", "Go to the diner"]
    },
    {
        question: "You enter the diner and find it empty. Do you:",
        answers: ["Leave immediately", "Sit down and wait"]
    },
    {
        question: "The lights flicker. What do you do?",
        answers: ["Check the fuse box", "Stay put and do nothing"]
    }
];

let currentQuestion = -1;

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    currentQuestion++;

    if (currentQuestion <= questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion].question;
        document.getElementById("label1").textContent = questions[currentQuestion].answers[0];
        document.getElementById("label2").textContent = questions[currentQuestion].answers[1];
    } else {
        document.querySelector(".quiz-container").innerHTML = "<h2>You've completed the quiz!</h2>";
    }
});
