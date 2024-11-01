// Define the questions for each category
const questions = {
    randomFun: [
        { question: "What's your favorite superhero?", options: ["Superman", "Batman", "Wonder Woman", "Spider-Man"], correctOption: 1 },
        { question: "What's the weirdest food you've ever eaten?", options: ["Frog legs", "Durian", "Escargot", "None of these"], correctOption: 3 },
        { question: "If you could travel anywhere, where would you go?", options: ["Paris", "Tokyo", "New York", "None of these"], correctOption: 1 },
        // Add more questions here as needed
    ],
    math: [
        { question: "The Magic Circle: Ten numbers form a circle. Each number equals the sum of its two neighbors. The total sum is 300. What is each number?", options: ["15", "30", "45", "60"], correctOption: 1},
        { question: "Pirates and Gold: Five pirates must split 100 coins. The most senior pirate makes the proposal, and a rejected proposal results in them being thrown overboard. What’s the safest proposal for the senior pirate?", options: ["Keep 99 coins", "Keep 98 coins and give 1 to two others", "Keep 50 coins", "Share equally"], correctOption: 1},
        { question: "Light Switch Problem: A row of 100 light switches is initially off. 100 people toggle switches, following a certain pattern. Which switches remain on?", options: ["All switches", "Only switches 1, 2, and 3", "Switches 1, 4, 9, 16, 25... up to 100", "Every other switch"], correctOption: 2},
        { question: "Three People, One Hat: Three people each wear a hat, either red or blue. They can see others’ hats but not their own and must guess their hat color. What’s the best strategy?", options: ["Guess randomly", "Assume an even number of hats are the same color", "Pass the turn", "Guess opposite of what they see"], correctOption: 1},
        { question: "Infinity Pool: Water is pumped into an infinite pool at a rate of 2 gallons per minute. A finite portion of the pool grows logarithmically. How much water fills it in 10 minutes?", options: ["5 gallons", "4.78 gallons", "20 gallons", "10 gallons"], correctOption: 1},
        { question: "Meeting Friends: Two friends randomly arrive at a coffee shop between 2 and 3 p.m., waiting up to 15 minutes for each other. What’s the probability they meet?", options: ["25%", "43.75%", "50%", "75%"], correctOption: 1},
        { question: "Fibonacci Fun: What is the sum of the first 100 Fibonacci numbers?", options: ["573147844013817084100", "573147844013817084101", "1000000000000000000000", "12345678901234567890"], correctOption: 0},
        { question: "Paradox of the Trains: Two trains 60 miles apart move toward each other, one at 30 mph and the other at 20 mph. A bird flies back and forth at 50 mph. How far does the bird travel?", options: ["30 miles", "60 miles", "90 miles", "120 miles"], correctOption: 1},
        { question: "Monty Hall Problem: You choose one of three doors. After revealing a goat behind another door, the host lets you switch. Should you switch?", options: ["Yes, because it improves your chance", "No, the odds stay the same", "Yes, but only if the host smiles", "It doesn’t matter"], correctOption: 0},
        { question: "Tiling Puzzle: How many ways can you tile a 10x10 grid using 1x2 dominoes?", options: ["1024", "2048", "51205", "100000"], correctOption: 2},
        { question: "Magic Square Mystery: In a 3x3 magic square with numbers 1 through 9, what is the magic sum of each row, column, and diagonal?", options: ["9", "12", "15", "18"], correctOption: 2},
        { question: "Elevator Paradox: Why are you more likely to wait for an elevator above you in a 10-story building?", options: ["Random chance", "More floors above than below", "Elevators are faster when going up", "Elevators are always above ground floor"], correctOption: 1},
        { question: "Area of the Weird Shape: What is the area of overlap of four quarter circles in a square?", options: ["π - 2", "π", "2π", "π + 2"], correctOption: 0},
        { question: "The Number Challenge: What is the smallest positive integer divisible by each number from 1 to 10?", options: ["240", "360", "420", "2520"], correctOption: 3},
        { question: "Dice Rolls: What’s the probability that the sum of two dice rolls is prime?", options: ["1/2", "5/12", "1/3", "1/4"], correctOption: 1},
        { question: "A Coin Flip Game: Two players flip a coin, taking turns. The first heads wins. What’s the probability the first player wins?", options: ["1/2", "2/3", "3/4", "1/4"], correctOption: 1},
        { question: "Twin Prime Problem: What is the largest known pair of twin primes?", options: ["(3, 5)", "(11, 13)", "2996863034895 × 2^1290000 ± 1", "(41, 43)"], correctOption: 2},
        { question: "Zeno’s Paradox Revisited: Achilles runs 10 times faster than a tortoise, who has a 10-meter head start. How long does it take him to catch up?", options: ["1 second", "9 seconds", "10 seconds", "10/9 seconds"], correctOption: 3},
        { question: "Geometry in Motion: If a bicycle wheel has a 0.5-meter radius, how far does it travel in one complete rotation?", options: ["π meters", "2π meters", "0.5π meters", "4π meters"], correctOption: 1},
        { question: "Magic Number Triangle: Arrange the numbers 1 through 9 in a triangle so each side has the same sum. What is the sum?", options: ["15", "17", "20", "25"], correctOption: 1}
        // Add more questions here as needed
    ],
    coding: [
        { question: "What is a variable in programming?", options: ["A fixed number in a code.", "A container for storing data values.", "A function that changes code.", "A type of error in code."], correctOption: 1},
        { question: "What is a loop in programming?", options: ["A code segment that executes only once.", "A function that changes code permanently.", "A process that repeats a block of code.", "A way to sort data in ascending order."], correctOption: 2},
        { question: "Which of the following is a conditional statement?", options: ["while", "print", "if", "input"], correctOption: 2},
        { question: "What is an array?", options: ["A way to write code for a specific platform.", "A list that can hold multiple values in a single variable.", "A function that deletes variables.", "A code that manages memory automatically."], correctOption: 1},
        { question: "What is the purpose of a function in programming?", options: ["To take user input.", "To execute the entire program at once.", "To encapsulate a block of code for reuse.", "To convert data into binary."], correctOption: 2},
        { question: "What is debugging?", options: ["Writing new code for an application.", "Creating bugs for testing code resilience.", "The process of finding and fixing errors in code.", "Running code without errors."], correctOption: 2}
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

function playCelebrationSound() {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387'); // Example sound URL
    audio.play();
}

// Enhanced Confetti using canvas-confetti library
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Fireworks Effect
function showFireworks() {
    const firework = document.createElement("div");
    firework.classList.add("firework-burst");
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 2000);
}

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
        // Trigger grand celebration (confetti, fireworks, and sound)
        launchConfetti();
        showFireworks();
        playCelebrationSound();
    } else {
        button.classList.add("btn-danger");
    }

    document.getElementById("back-to-topics-btn").classList.remove("d-none");
}

const category = getCategoryFromURL();
if (category) {
    showQuestion(category);
}