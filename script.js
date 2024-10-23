const questions = {
    randomFun: [
        { question: "What's your favorite superhero?", options: ["Superman", "Batman", "Wonder Woman", "Spider-Man"], correctOption: 1 },
        { question: "What's the weirdest food you've ever eaten?", options: ["Frog legs", "Durian", "Escargot", "None of these"], correctOption: 3 },
        { question: "If you could travel anywhere, where would you go?", options: ["Paris", "Tokyo", "New York", "None of these"], correctOption: 1 },
        { question: "What’s the best movie you've ever seen?", options: ["Inception", "Titanic", "Avatar", "The Dark Knight"], correctOption: 0 },
        { question: "If you could have any superpower, what would it be?", options: ["Flying", "Invisibility", "Super Strength", "Time Travel"], correctOption: 3 },
        { question: "What's the funniest joke you know?", options: ["Knock-knock joke", "Dad joke", "Puns", "None of these"], correctOption: 1 },
        { question: "If you were an animal, what would you be?", options: ["Lion", "Tiger", "Penguin", "Dolphin"], correctOption: 2 },
        { question: "What’s your dream job?", options: ["Astronaut", "Musician", "Software Engineer", "Chef"], correctOption: 2 },
        { question: "If you could live in any time period, which would it be?", options: ["Ancient Rome", "Medieval", "Future", "Renaissance"], correctOption: 2 },
        { question: "What’s your favorite ice cream flavor?", options: ["Chocolate", "Vanilla", "Strawberry", "Mint"], correctOption: 0 },
        { question: "If you could meet any celebrity, who would it be?", options: ["Elon Musk", "Beyonce", "Dwayne Johnson", "None of these"], correctOption: 0 },
        { question: "What’s the coolest thing you’ve ever done?", options: ["Skydiving", "Scuba Diving", "Hiking", "None of these"], correctOption: 1 },
        { question: "What’s the strangest thing you've ever seen?", options: ["UFO", "Strange animal", "Ghost", "None of these"], correctOption: 0 },
        { question: "What’s your favorite holiday?", options: ["Christmas", "Halloween", "Thanksgiving", "None of these"], correctOption: 1 },
        { question: "If you were a fruit, what fruit would you be?", options: ["Apple", "Banana", "Mango", "Pineapple"], correctOption: 2 },
        { question: "If you could change your name, what would it be?", options: ["Alex", "Jordan", "Chris", "None of these"], correctOption: 3 },
        { question: "What's your hidden talent?", options: ["Singing", "Dancing", "Drawing", "None of these"], correctOption: 1 },
        { question: "If you could live on any planet, which one would it be?", options: ["Mars", "Venus", "Jupiter", "None of these"], correctOption: 0 },
        { question: "What's the best compliment you've ever received?", options: ["You’re smart", "You’re kind", "You’re funny", "None of these"], correctOption: 2 },
        { question: "What’s your favorite childhood memory?", options: ["Playing outside", "Family vacations", "Sports", "None of these"], correctOption: 1 },
        { question: "If you were a ghost, where would you haunt?", options: ["Old house", "Castle", "Forest", "None of these"], correctOption: 0 },
        { question: "What's the best gift you've ever received?", options: ["Watch", "Phone", "Bike", "None of these"], correctOption: 1 },
        { question: "What's your dream car?", options: ["Tesla", "Ferrari", "Lamborghini", "None of these"], correctOption: 0 },
        { question: "If you were a movie character, who would you be?", options: ["Iron Man", "Harry Potter", "James Bond", "None of these"], correctOption: 0 },
        { question: "What’s the best book you’ve ever read?", options: ["Harry Potter", "Lord of the Rings", "The Hobbit", "None of these"], correctOption: 1 }
    ],
    math: [
        { question: "What is 8 x 9?", options: ["63", "72", "81", "64"], correctOption: 1 },
        { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], correctOption: 1 },
        { question: "Solve for x: 2x + 3 = 11", options: ["4", "5", "6", "7"], correctOption: 0 },
        { question: "What is the value of pi up to 3 decimal places?", options: ["3.142", "3.141", "3.143", "3.140"], correctOption: 1 },
        { question: "What is the derivative of x^2?", options: ["x", "2x", "x^3", "None"], correctOption: 1 },
        { question: "Solve for y: 3y - 4 = 11", options: ["3", "5", "6", "7"], correctOption: 3 },
        { question: "What is 15% of 200?", options: ["30", "25", "35", "20"], correctOption: 0 },
        { question: "What is the area of a circle with radius 5?", options: ["25π", "30π", "20π", "None"], correctOption: 0 },
        { question: "Solve for x: x^2 - 4x + 4 = 0", options: ["0", "2", "4", "8"], correctOption: 1 },
        { question: "What is the cosine of 60 degrees?", options: ["0.5", "0.866", "0", "None"], correctOption: 0 },
        { question: "Simplify: (3x^2 + 2x) - (x^2 + x)", options: ["2x^2 + x", "3x^2", "x", "None"], correctOption: 0 },
        { question: "What is the volume of a cube with side length 3?", options: ["9", "27", "12", "None"], correctOption: 1 },
        { question: "What is 12 / 3 + 4 * 2?", options: ["10", "11", "12", "None"], correctOption: 1 },
        { question: "Solve for z: 5z - 3 = 2z + 12", options: ["5", "7", "9", "None"], correctOption: 0 },
        { question: "What is 9 squared?", options: ["81", "72", "64", "None"], correctOption: 0 },
        { question: "What is the Pythagorean theorem?", options: ["a^2 + b^2 = c^2", "a^2 = b^2 + c^2", "a + b = c", "None"], correctOption: 0 },
        { question: "What is the integral of 2x?", options: ["x^2", "2x^2", "2x + c", "None"], correctOption: 0 },
        { question: "What is the sum of the angles in a triangle?", options: ["90", "180", "360", "None"], correctOption: 1 },
        { question: "What is 7 factorial?", options: ["5040", "720", "40320", "None"], correctOption: 0 },
        { question: "What is the greatest common divisor of 24 and 36?", options: ["4", "6", "12", "None"], correctOption: 2 },
        { question: "What is the least common multiple of 6 and 8?", options: ["24", "16", "48", "None"], correctOption: 0 },
        { question: "What is 7% of 500?", options: ["35", "40", "45", "50"], correctOption: 0 },
        { question: "Solve: 2x - 4 = 6", options: ["5", "4", "7", "None"], correctOption: 0 },
        { question: "What is the standard deviation of the set {2, 4, 6, 8}?", options: ["2", "4", "5", "None"], correctOption: 0 },
        { question: "What is the median of {1, 3, 3, 6, 7, 8, 9}?", options: ["6", "3", "5", "None"], correctOption: 0 }
    ],
    coding: [
        { question: "What does HTML stand for?", options: ["HyperText Machine Language", "HighText Markup Language", "HyperText Markup Language", "None"], correctOption: 2 },
        { question: "What is a closure in JavaScript?", options: ["A function inside another function", "A function without parameters", "A function with global scope", "None of these"], correctOption: 0 },
        { question: "What is a REST API?", options: ["Random Event Streaming", "Representational State Transfer", "Response Event State Transfer", "None of these"], correctOption: 1 },
        { question: "What is the difference between frontend and backend?", options: ["Frontend is UI, backend is logic", "Backend is UI, frontend is logic", "No difference", "None of these"], correctOption: 0 },
        { question: "What is the purpose of a database index?", options: ["Fast data retrieval", "Organize data", "Data storage", "None"], correctOption: 0 },
        { question: "What is a class in object-oriented programming?", options: ["A template for objects", "A method", "A library", "None"], correctOption: 0 },
        { question: "What is recursion?", options: ["Function calling itself", "Infinite loop", "Object creation", "None"], correctOption: 0 },
        { question: "What is polymorphism in OOP?", options: ["Multiple forms", "Same form", "Inheritance", "None"], correctOption: 0 },
        { question: "Explain how Git works.", options: ["Version control", "Code writing", "Bug fixing", "None"], correctOption: 0 },
        { question: "What is the difference between var, let, and const in JavaScript?", options: ["Variable declaration", "Loop control", "Memory management", "None"], correctOption: 0 },
        { question: "What is Big O notation?", options: ["Algorithm complexity", "Variable size", "Memory usage", "None"], correctOption: 0 },
        { question: "What is the use of Docker in DevOps?", options: ["Containerization", "Code deployment", "Version control", "None"], correctOption: 0 },
        { question: "What is an HTTP request?", options: ["Client-server communication", "Database query", "File transfer", "None"], correctOption: 0 },
        { question: "What is a JOIN in SQL?", options: ["Combine tables", "Filter data", "Sort data", "None"], correctOption: 0 },
        { question: "What is a NoSQL database?", options: ["Non-relational database", "Relational database", "File system", "None"], correctOption: 0 },
        { question: "What is the use of CSS Flexbox?", options: ["Align items", "Create animations", "Manage files", "None"], correctOption: 0 },
        { question: "What is responsive design?", options: ["Flexible layout", "Fixed layout", "Page speed", "None"], correctOption: 0 },
        { question: "Explain the use of React.js hooks.", options: ["State management", "Component rendering", "Animation control", "None"], correctOption: 0 },
        { question: "What is the purpose of middleware in backend frameworks?", options: ["Handle requests", "Code organization", "Database interaction", "None"], correctOption: 0 },
        { question: "What is an ORM in web development?", options: ["Object-Relational Mapping", "Open Resource Manager", "Operational Resource Machine", "None"], correctOption: 0 },
        { question: "What is functional programming?", options: ["Declarative style", "Object-oriented style", "Imperative style", "None"], correctOption: 0 },
        { question: "What is the use of npm?", options: ["Package management", "Code writing", "Version control", "None"], correctOption: 0 },
        { question: "What is the difference between synchronous and asynchronous code?", options: ["Blocking vs non-blocking", "Compiled vs interpreted", "Fast vs slow", "None"], correctOption: 0 },
        { question: "Explain the concept of event bubbling in JavaScript.", options: ["Event propagation", "Memory allocation", "Code execution", "None"], correctOption: 0 },
        { question: "What is RESTful architecture?", options: ["Stateless client-server interaction", "Dynamic page rendering", "Data security", "None"], correctOption: 0 }
    ],
    techTrends: [
        { question: "What is blockchain technology?", options: ["A decentralized ledger", "Data structure", "Programming language", "None"], correctOption: 0 },
        { question: "What is the Internet of Things (IoT)?", options: ["Connected devices", "Network protocol", "Data management", "None"], correctOption: 0 },
        { question: "What is the 5G network?", options: ["Fifth-generation wireless", "Fiber optics", "Satellite communication", "None"], correctOption: 0 },
        { question: "What is quantum computing?", options: ["Computing using quantum states", "Cloud computing", "Parallel processing", "None"], correctOption: 0 },
        { question: "What are microservices?", options: ["Small, independent services", "Large monolithic apps", "Database servers", "None"], correctOption: 0 },
        { question: "What is the metaverse?", options: ["A virtual world", "A physical space", "Cloud storage", "None"], correctOption: 0 },
        { question: "What is the use of AI in healthcare?", options: ["Diagnostics", "Surgery", "Medication", "None"], correctOption: 0 },
        { question: "What is cloud computing?", options: ["On-demand computing", "Local server management", "Big data", "None"], correctOption: 0 },
        { question: "What is edge computing?", options: ["Processing data near the source", "Cloud computing", "Server-side computing", "None"], correctOption: 0 },
        { question: "What is a chatbot?", options: ["AI-based conversational tool", "Data storage", "API handler", "None"], correctOption: 0 },
        { question: "What is augmented reality?", options: ["Virtual overlays on real world", "3D rendering", "Video game graphics", "None"], correctOption: 0 },
        { question: "What is virtual reality?", options: ["Immersive digital experience", "Mobile app", "Data processing", "None"], correctOption: 0 },
        { question: "What is serverless architecture?", options: ["Run code without managing servers", "Local data center", "Database management", "None"], correctOption: 0 },
        { question: "What is artificial general intelligence?", options: ["AI capable of any task", "Task-specific AI", "AI for research", "None"], correctOption: 0 },
        { question: "What is the impact of 5G on smart cities?", options: ["Faster communication", "More devices", "Data security", "None"], correctOption: 0 },
        { question: "What is a digital twin?", options: ["Digital replica of a physical object", "Online identity", "Virtual machine", "None"], correctOption: 0 },
        { question: "What is autonomous driving?", options: ["Self-driving cars", "Remote-controlled cars", "Electric cars", "None"], correctOption: 0 },
        { question: "What is cybersecurity?", options: ["Protection of computer systems", "Internet access", "Data backup", "None"], correctOption: 0 },
        { question: "What are nanobots?", options: ["Tiny robots for medical use", "Computer chips", "AI algorithms", "None"], correctOption: 0 },
        { question: "What is a smart contract?", options: ["Self-executing contracts", "Legal documents", "Cloud services", "None"], correctOption: 0 },
        { question: "What is DevOps?", options: ["Collaboration between development and operations", "Software development", "Data management", "None"], correctOption: 0 },
        { question: "What is the importance of data privacy?", options: ["Protection of personal information", "Data sharing", "Storage space", "None"], correctOption: 0 },
        { question: "What is a hybrid cloud?", options: ["Combination of private and public clouds", "On-premise cloud", "Virtual machines", "None"], correctOption: 0 },
        { question: "What is a software-defined network (SDN)?", options: ["Programmable network", "Cloud storage", "Local network", "None"], correctOption: 0 },
        { question: "What is AI bias?", options: ["Unfair decision-making by AI", "Random decision-making", "Fair AI", "None"], correctOption: 0 }
    ],
    ai: [
        { question: "What is machine learning?", options: ["Algorithms learning from data", "A type of database", "Computer networking", "None"], correctOption: 0 },
        { question: "What is deep learning?", options: ["Neural networks with many layers", "Surface-level learning", "Simple algorithms", "None"], correctOption: 0 },
        { question: "What is a neural network?", options: ["A system of connected algorithms", "A computer network", "Cloud architecture", "None"], correctOption: 0 },
        { question: "What is natural language processing?", options: ["AI understanding human language", "Programming language", "Cloud storage", "None"], correctOption: 0 },
        { question: "What is supervised learning?", options: ["Learning from labeled data", "Learning without data", "Learning from images", "None"], correctOption: 0 },
        { question: "What is unsupervised learning?", options: ["Learning from unlabeled data", "Supervised learning", "Learning with labels", "None"], correctOption: 0 },
        { question: "What is reinforcement learning?", options: ["Learning by trial and error", "Supervised learning", "Data analysis", "None"], correctOption: 0 },
        { question: "What is a convolutional neural network (CNN)?", options: ["Deep learning model for images", "Supervised learning", "Data clustering", "None"], correctOption: 0 },
        { question: "What is generative adversarial network (GAN)?", options: ["Two neural networks competing", "Single neural network", "Decision tree", "None"], correctOption: 0 },
        { question: "What is transfer learning?", options: ["Applying knowledge from one task to another", "Learning without data", "Parallel computing", "None"], correctOption: 0 },
        { question: "What is a decision tree?", options: ["A flowchart-like model", "A neural network", "Reinforcement learning", "None"], correctOption: 0 },
        { question: "What is overfitting?", options: ["Model fits training data too well", "Underfitting", "Random guessing", "None"], correctOption: 0 },
        { question: "What is underfitting?", options: ["Model too simple", "Overfitting", "Bias in data", "None"], correctOption: 0 },
        { question: "What is backpropagation?", options: ["Learning algorithm for neural networks", "Data preprocessing", "Training data", "None"], correctOption: 0 },
        { question: "What is the Turing test?", options: ["Test of a machine's ability to exhibit intelligent behavior", "Computer networking test", "Algorithm efficiency test", "None"], correctOption: 0 },
        { question: "What is a chatbot in AI?", options: ["Conversational agent", "Algorithm optimizer", "Database manager", "None"], correctOption: 0 },
        { question: "What is a recommendation system?", options: ["Suggests products or content", "Decision tree", "Reinforcement learning", "None"], correctOption: 0 },
        { question: "What is AI ethics?", options: ["Moral implications of AI", "Legal regulations", "Data analysis", "None"], correctOption: 0 },
        { question: "What is a support vector machine (SVM)?", options: ["Supervised learning model", "Unsupervised learning", "Neural network", "None"], correctOption: 0 },
        { question: "What is a random forest?", options: ["Ensemble learning method", "Neural network", "Data clustering", "None"], correctOption: 0 },
        { question: "What is the difference between AI and machine learning?", options: ["AI is broader than ML", "ML is broader than AI", "They are the same", "None"], correctOption: 0 },
        { question: "What is the role of AI in automation?", options: ["Automating tasks", "Increasing human involvement", "Decreasing efficiency", "None"], correctOption: 0 },
        { question: "What is bias in AI models?", options: ["Prejudices in predictions", "Accurate predictions", "Algorithm efficiency", "None"], correctOption: 0 },
        { question: "What is a language model in AI?", options: ["Model for understanding language", "Speech-to-text tool", "Decision tree", "None"], correctOption: 0 },
        { question: "What is predictive analytics?", options: ["Predicts future outcomes from data", "Analyzes historical data", "Cloud computing", "None"], correctOption: 0 }
    ],
    pizzas: [
        { question: "What is your favorite pizza topping?", options: ["Pepperoni", "Mushrooms", "Onions", "Pineapple"], correctOption: 0 },
        { question: "Which city has the best pizza: New York or Chicago?", options: ["New York", "Chicago", "San Francisco", "None"], correctOption: 1 },
        { question: "What is the best crust type: thin, thick, or stuffed?", options: ["Thin", "Thick", "Stuffed", "None"], correctOption: 2 },
        { question: "What is the best cheese for pizza?", options: ["Mozzarella", "Cheddar", "Parmesan", "Provolone"], correctOption: 0 },
        { question: "What is the perfect pizza sauce?", options: ["Tomato", "Pesto", "Barbecue", "None"], correctOption: 0 },
        { question: "What is the best pizza place you've been to?", options: ["Dominos", "Pizza Hut", "Papa John's", "Local Pizzeria"], correctOption: 3 },
        { question: "Is pineapple on pizza acceptable?", options: ["Yes", "No", "Sometimes", "Depends on mood"], correctOption: 0 },
        { question: "What is your favorite pizza style: Neapolitan, Sicilian, or Detroit?", options: ["Neapolitan", "Sicilian", "Detroit", "None"], correctOption: 0 },
        { question: "What is the weirdest pizza topping you've tried?", options: ["Anchovies", "Egg", "Pickles", "None"], correctOption: 0 },
        { question: "How many slices of pizza can you eat in one sitting?", options: ["1-2", "3-4", "5-6", "7 or more"], correctOption: 1 },
        { question: "What is your favorite frozen pizza brand?", options: ["DiGiorno", "Tombstone", "Red Baron", "None"], correctOption: 0 },
        { question: "Do you prefer a brick oven or a gas oven pizza?", options: ["Brick oven", "Gas oven", "Both", "None"], correctOption: 0 },
        { question: "What is the best side dish with pizza?", options: ["Garlic bread", "Wings", "Salad", "None"], correctOption: 0 },
        { question: "Do you fold your pizza slice when you eat it?", options: ["Yes", "No", "Sometimes", "Never"], correctOption: 0 },
        { question: "What is the best beverage to have with pizza?", options: ["Soda", "Water", "Beer", "Wine"], correctOption: 0 },
        { question: "What is your favorite homemade pizza topping combo?", options: ["Pepperoni & Cheese", "Mushroom & Onion", "Sausage & Pepper", "None"], correctOption: 0 },
        { question: "Which pizza chain is your go-to: Domino's, Pizza Hut, or Papa John's?", options: ["Domino's", "Pizza Hut", "Papa John's", "None"], correctOption: 0 },
        { question: "What is the best pizza shape: round or square?", options: ["Round", "Square", "Both", "None"], correctOption: 0 },
        { question: "What is your opinion on vegan pizza?", options: ["Love it", "Hate it", "Haven't tried", "None"], correctOption: 2 },
        { question: "What is the best dipping sauce for pizza?", options: ["Ranch", "Garlic butter", "Marinara", "None"], correctOption: 1 },
        { question: "What is the best pizza for breakfast?", options: ["Cold pizza", "Reheated pizza", "Fresh pizza", "None"], correctOption: 0 },
        { question: "Which country makes the best pizza outside of Italy?", options: ["USA", "Japan", "Brazil", "None"], correctOption: 0 },
        { question: "Do you like pizza with extra cheese?", options: ["Yes", "No", "Sometimes", "Never"], correctOption: 0 },
        { question: "What’s the best pizza topping combo?", options: ["Pepperoni & Mushroom", "Sausage & Pepper", "Ham & Pineapple", "None"], correctOption: 0 },
        { question: "Is pizza better with or without red pepper flakes?", options: ["With", "Without", "Sometimes", "Never"], correctOption: 0 }
    ]
};

function showConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function playSound() {
    const sound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    sound.play();
}

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
        optionBtn.className = "option-btn";
        optionBtn.innerText = option;
        optionBtn.onclick = function () {
            handleAnswer(optionBtn, index, selectedQuestion.correctOption);
        };
        optionsContainer.appendChild(optionBtn);
    });

    const questionBox = document.getElementById("question-box");
    questionBox.classList.remove("hidden");
    
    questionBox.style.animation = "none";  // Reset animation
    setTimeout(() => {
        questionBox.style.animation = "";  // Trigger animation
    }, 10);
}

function handleAnswer(button, selectedIndex, correctIndex) {
    const options = document.querySelectorAll(".option-btn");

    // If the correct answer is clicked
    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        // Add a class to enlarge the correct answer
        button.classList.add("celebrate-correct");

        // Dim the incorrect options
        options.forEach((option, index) => {
            if (index !== correctIndex) {
                option.classList.add("dim-option"); // Add a class to dim the incorrect options
            }
        });

        // Trigger grand celebration (sound, fireworks, confetti)
        playSound();
        showFireworks();
        showConfetti();

        // Show the "Correct Answer" message
        const correctMessage = document.getElementById("correct-answer-message");
        correctMessage.classList.add("show");  // Add the show class to display it

    } else {
        button.classList.add("incorrect");
    }

    // Reveal the "Back to Topics" button after answering the question
    document.getElementById("back-to-topics-btn").classList.remove("hidden");
}
const category = getCategoryFromURL();
if (category) {
    showQuestion(category);
}