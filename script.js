const questions = [
    {
        question: "It's night time. You're driving, but it's snowing heavily. You see a diner nearby with the light on.",
        answers: [
            { text: "Keep driving", nextQuestionIndex: 1 },
            { text: "Go to the diner", nextQuestionIndex: 2 }
        ]
    },
    {
        question: "Your car broke down, and you froze to death in the snow...You died.Do you want to restart the game?",
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
            { text: "Ask the waiter why he has no face", nextQuestionIndex: 7 }
        ]
    },
    {
        question: "The bugs inside the water ate your throat..You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    },
    {
        question: "You survived for now...",
        answers: [
            { text: "Next", nextQuestionIndex: 8 }
        ]
    },
    {
        question: "The waiter dragged you into the kitchen and boiled you alive...You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    },
    {
        question:"As you're looking at the menu,a girl from the table behind stands up and walks towards you.You see her eyes are normal.She hands you a note...",
        answers: [
            {text: "Take the note and ask her how to escape",nextQuestionIndex:9 },
            {text: "Take the note and hide it",nextQuestionIndex:10},
            {text: "Take the note and read it",nextQuestionIndex:11}
        ]
    },
    {
        question: "They heard you.They know you don't belong so they cut all your limbs off and hung them up with meat hooks...You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    },
    {
        question: "You survived for now...",
        answers: [{text: "Continue", nextQuestionIndex: 12}]
    },
    {
        question: "The girl starts screaming.The waiter ties you and the girl together and shoves you in the oven to cook you...You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    },
    {
        question: "The note says:'Front door is a trap.Escape is in the kitchen.'The girl points to the kitchen,hinting that you should follow her inside.Do you trust her?",
        answers: [
            {text: "Yes,stand up and follow her to the kitchen", nextQuestionIndex:13},
            {text: "No,stay at your table and ignore her", nextQuestionIndex:14},
            {text: "No,but invite her to sit at your table", nextQuestionIndex:15},
        ]
    },
    {
        question: "The waiter caught you and removed your eyeballs with an cream scooper...You died. Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    },
    {
        question:"You survived,but you're drawing attention.The other guests are staring at you both...",
        answers: [{text: "Continue", nextQuestionIndex:16}]
    },
    {
        question:"You survived.Now you must escape together...",
        answers: [{text: "Continue", nextQuestionIndex:16}]
    },
    {
        question:"As you're sitting with the girl,the waiter comes back and puts a plate of food in front of you...",
        answers: [
            {text: "Eat the food", nextQuestionIndex:17},
            {text: "Say that isn't what you ordered", nextQuestionIndex:17},
            {text: "Smile and keep the food on your table but don't eat it", nextQuestionIndex:17},
        ]
    },
    {
        question: "You've completed the story! Do you want to restart the game?",
        answers: [
            { text: "Yes", nextQuestionIndex: 0 },
            { text: "No", nextQuestionIndex: -1 } // -1 will end the game
        ]
    }
];



let currentQuestionIndex = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    // Ensure the quiz container size remains fixed
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.style.maxWidth = "400px"; 
    quizContainer.style.height = "400px"; 

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

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

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

function restartGame() {
    currentQuestionIndex = 0; // Reset the question index to 0
    displayQuestion(); // Display the first question
}

// Initial call to display the first question
displayQuestion();