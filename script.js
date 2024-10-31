// Define the questions for each category
const questions = {
    randomFun: [
        { question: "What's your favorite superhero?", options: ["Superman", "Batman", "Wonder Woman", "Spider-Man"], correctOption: 1 },
        { question: "What's the weirdest food you've ever eaten?", options: ["Frog legs", "Durian", "Escargot", "None of these"], correctOption: 3 },
        { question: "If you could travel anywhere, where would you go?", options: ["Paris", "Tokyo", "New York", "None of these"], correctOption: 1 },
        // Add more questions here as needed
    ],
    math: [
        { question: "What is 8 x 9?", options: ["63", "72", "81", "64"], correctOption: 1 },
        { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], correctOption: 1 },
        { question: "Solve for x: 2x + 3 = 11", options: ["4", "5", "6", "7"], correctOption: 0 },
        // Add more questions here as needed
    ],
    coding: [
        { question: "What does HTML stand for?", options: ["HyperText Machine Language", "HighText Markup Language", "HyperText Markup Language", "None"], correctOption: 2 },
        { question: "What is a closure in JavaScript?", options: ["A function inside another function", "A function without parameters", "A function with global scope", "None of these"], correctOption: 0 },
        { question: "What is a REST API?", options: ["Random Event Streaming", "Representational State Transfer", "Response Event State Transfer", "None of these"], correctOption: 1 },
        // Add more questions here as needed
    ],
    techTrends: [
        { question: "What is blockchain technology?", options: ["A decentralized ledger", "Data structure", "Programming language", "None"], correctOption: 0 },
        { question: "What is the Internet of Things (IoT)?", options: ["Connected devices", "Network protocol", "Data management", "None"], correctOption: 0 },
        { question: "What is quantum computing?", options: ["Computing using quantum states", "Cloud computing", "Parallel processing", "None"], correctOption: 0 },
        // Add more questions here as needed
    ],
    ai: [
        { question: "What is machine learning?", options: ["Algorithms learning from data", "A type of database", "Computer networking", "None"], correctOption: 0 },
        { question: "What is deep learning?", options: ["Neural networks with many layers", "Surface-level learning", "Simple algorithms", "None"], correctOption: 0 },
        { question: "What is natural language processing?", options: ["AI understanding human language", "Programming language", "Cloud storage", "None"], correctOption: 0 },
        // Add more questions here as needed
    ],
    pizzas: [
        { question: "What is your favorite pizza topping?", options: ["Pepperoni", "Mushrooms", "Onions", "Pineapple"], correctOption: 0 },
        { question: "Which city has the best pizza: New York or Chicago?", options: ["New York", "Chicago", "San Francisco", "None"], correctOption: 1 },
        { question: "What is the best crust type: thin, thick, or stuffed?", options: ["Thin", "Thick", "Stuffed", "None"], correctOption: 2 },
        // Add more questions here as needed
    ]
};

function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

function showQuestion(category) {
    const randomIndex = Math.floor(Math.random() * questions[category].length);
    const selectedQuestion = questions[category][randomIndex];

    document.getElementById("question-text").innerText = selectedQuestion.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options
    optionsContainer.classList.remove("hidden");

    selectedQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn btn btn-lg btn-block";
        optionBtn.innerText = option;
        optionBtn.onclick = function () {
            handleAnswer(optionBtn, index, selectedQuestion.correctOption);
        };
        optionsContainer.appendChild(optionBtn);
    });

    const questionBox = document.getElementById("question-box");
    questionBox.classList.remove("hidden");
}

function handleAnswer(button, selectedIndex, correctIndex) {
    const options = document.querySelectorAll(".option-btn");

    if (selectedIndex === correctIndex) {
        button.classList.add("btn-success");
        options.forEach((option, index) => {
            if (index !== correctIndex) {
                option.classList.add("btn-secondary");
            }
        });
    } else {
        button.classList.add("btn-danger");
    }

    document.getElementById("back-to-topics-btn").classList.remove("d-none");
}

const category = getCategoryFromURL();
if (category) {
    showQuestion(category);
}
