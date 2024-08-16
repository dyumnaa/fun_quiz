const questions = [
    {
        question: "It's night time. You're driving, but it's snowing heavily. You see a diner nearby with the light on.",
        answers: [
            { text: "Keep driving", nextQuestionIndex: 1 },
            { text: "Go to the diner", nextQuestionIndex: 2 }
        ]
    },
    {
        question: "You died. Your car broke down, and you froze to death in the snow.",
        answers: [{ text: "Game Over", nextQuestionIndex: 8 }]
    },
    {
        question: "You survived. You leave your car and enter the Diner.",
        answers: [{ text: "Continue", nextQuestionIndex: 3 }]
    },
    {
        question: "A waiter takes you to your table, but he has no face and only a giant mouth full of sharp teeth. Everyone else sitting in the Diner has black eyes. They all turn to look at you...",
        answers: [{ text: "Continue", nextQuestionIndex: 4 }]
    },
    {
        question: "The waiter puts a jug of water on your table. What do you do?",
        answers: [
            { text: "Take a sip of the water to be polite", nextQuestionIndex: 5 },
            { text: "Smile and look at the Menu", nextQuestionIndex: 6 },
            { text: "Ask the waiter why he has no face", nextQuestionIndex: 7 }
        ]
    },
    {
        question: "The bugs inside the water ate your throat.",
        answers: [{ text: "Game Over", nextQuestionIndex: 8 }]
    },
    {
        question: "You survived for now...",
        answers: [{ text: "Continue", nextQuestionIndex: 8 }]
    },
    {
        question: "The waiter dragged you into the kitchen and boiled you alive.",
        answers: [{ text: "Game Over", nextQuestionIndex: 8 }]
    },
    {
        question: "GAME OVER",
        answers: []
    }
];

let currentQuestionIndex = 0;

// Function to display a question and its answers
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    
    // Hide all answer options initially
    document.getElementById("answer-container").style.display = "none";
    
    // Clear previous answer options
    const answerContainer = document.getElementById("answer-container");
    answerContainer.innerHTML = '';

    if (currentQuestion.answers.length > 0) {
        // Show answer container
        answerContainer.style.display = "block";
        
        // Dynamically create answer options
        currentQuestion.answers.forEach((answer, index) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `answer${index}`;
            input.name = 'answer';
            input.value = answer.nextQuestionIndex;
            
            const label = document.createElement('label');
            label.htmlFor = `answer${index}`;
            label.textContent = answer.text;

            answerContainer.appendChild(input);
            answerContainer.appendChild(label);
            answerContainer.appendChild(document.createElement('br'));
        });

        // Change the button text
        document.getElementById("nextButton").textContent = "Submit Answer";
    } else {
        // Change the button text for paragraph
        document.getElementById("nextButton").textContent = "Next";
    }
}

// Function to handle the form submission
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected answer's index
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        currentQuestionIndex = parseInt(selectedAnswer.value);
    } else if (questions[currentQuestionIndex].answers.length === 0) {
        // Move to the next question if it's a paragraph with no options
        currentQuestionIndex++;
    }

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = "<h2>You've completed the story!</h2>";
    }
});

// Initial call to display the first question
displayQuestion();
