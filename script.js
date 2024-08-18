const questions = [
    {
        question: "It's night time. You're driving, but it's snowing heavily. You see a diner nearby with the light on.",
        answers: [
            { text: "Keep driving", nextQuestionIndex: 1 },
            { text: "Go to the diner", nextQuestionIndex: 2 }
        ]
    },
    {
        question: "You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } 
        ]
    },
    {
        question: "You survived. You leave the car and enter the diner.",
        answers: [
            { text: "Next", nextQuestionIndex: 3 }
        ]
    },
    {
        question: "A waiter takes you to your table, but he has no face and only a giant mouth full of sharp teeth. Everyone else sitting in the diner has black eyes. They all turn to look at you...",
        answers: [
            { text: "Next", nextQuestionIndex: 4 }
        ]
    },
    {
        question: "The waiter puts a jug on your table. What do you do?",
        answers: [
            { text: "Take a sip of the water", nextQuestionIndex: 5 },
            { text: "Smile and look at the menu", nextQuestionIndex: 6 },
            { text: "Ask the waiter why he has no face", nextQuestionIndex: 5 }
        ]
    },
    {
        question: "You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    },
    {
        question: "You survived for now.",
        answers: [
            { text: "Next", nextQuestionIndex: 7 }
        ]
    },
    {
        question: "You've completed the story!",
        answers: []
    }
];

let currentQuestionIndex = 0;

// Function to display a question and its answers
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    // Hide all answer labels initially
    document.getElementById("answer1-label").style.display = "none";
    document.getElementById("answer2-label").style.display = "none";
    document.getElementById("answer3-label").style.display = "none";

    // Show answer choices if they exist
    if (currentQuestion.answers.length > 0) {
        if (currentQuestion.answers.length > 0) {
            document.getElementById("answer1-label").style.display = "block";
            document.getElementById("label1").textContent = currentQuestion.answers[0].text;
            document.getElementById("answer1").value = currentQuestion.answers[0].nextQuestionIndex;
        }

        if (currentQuestion.answers.length > 1) {
            document.getElementById("answer2-label").style.display = "block";
            document.getElementById("label2").textContent = currentQuestion.answers[1].text;
            document.getElementById("answer2").value = currentQuestion.answers[1].nextQuestionIndex;
        }

        if (currentQuestion.answers.length === 3) {
            document.getElementById("answer3-label").style.display = "block";
            document.getElementById("label3").textContent = currentQuestion.answers[2].text;
            document.getElementById("answer3").value = currentQuestion.answers[2].nextQuestionIndex;
        }
    }
}

// Function to handle the form submission
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected answer's index
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const selectedIndex = parseInt(selectedAnswer.value);

        if (selectedIndex === -1) {
            document.querySelector(".quiz-container").innerHTML = "<h2>Game Over</h2><button onclick='restartGame()'>Restart</button>";
        } else {
            currentQuestionIndex = selectedIndex;
            if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                document.querySelector(".quiz-container").innerHTML = "<h2>Game Over</h2>";
            }
        }
    }
});

// Function to restart the game
function restartGame() {
    currentQuestionIndex = 0;
    displayQuestion();
}

// Initial call to display the first question
displayQuestion();