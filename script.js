// Define the questions for each category
const questions = {
    techTrends: [
        { question: "What is blockchain technology?", options: ["A decentralized ledger", "Data structure", "Programming language", "None"], correctOption: 0 },
        { question: "What is the Internet of Things (IoT)?", options: ["Connected devices", "Network protocol", "Data management", "None"], correctOption: 0 },
        { question: "What is quantum computing?", options: ["Computing using quantum states", "Cloud computing", "Parallel processing", "None"], correctOption: 0 },
        { question: "Which company developed the first successful personal computer?", options: ["Apple Inc.", "IBM", "Microsoft", "Commodore"], correctOption: 0 },
        { question: " What is the name of the virtual assistant created by Amazon?", options: ["Siri", "Google Assistant", "Alexa", "Cortana"], correctOption: 2 },
        { question: "What popular mobile operating system is developed by Google?", options: ["iOS", "BlackBerry OS", "Windows Mobile", "Android"], correctOption: 3 },
        { question: "What technology allows for wireless communication over short distances, typically used in devices like smartphones and smartwatches?", options: ["Wi-Fi", "Bluetooth", "NFC", "Zigbee"], correctOption: 1 },
        { question: "In what year was the first iPhone released?", options: ["2005", "2007", "2008", "2006"], correctOption: 1 },
        { question: "Which social media platform is known for its character limit of 280 characters per post?", options: ["Instagram", "LinkedIn", "Facebook", "Twitter"], correctOption: 3 },
        { question: "What is the name of the cloud storage service developed by Microsoft?", options: ["OneDrive", "Google Drive", "Dropbox", "iCloud"], correctOption: 0 },
        // Add more questions here as needed
    ],
    coding: [
        { question: "What does HTML stand for?", options: ["HyperText Machine Language", "HighText Markup Language", "HyperText Markup Language", "None"], correctOption: 2 },
        { question: "What is a closure in JavaScript?", options: ["A function inside another function", "A function without parameters", "A function with global scope", "None of these"], correctOption: 0 },
        { question: "What is a REST API?", options: ["Random Event Streaming", "Representational State Transfer", "Response Event State Transfer", "None of these"], correctOption: 1 },
        { question: "Which programming language is known for its use in web development and is often referred to as the backbone of the web?", options: ["PHP", "Python", "Ruby", "JavaScript"], correctOption: 3 },
        { question: "What is the main purpose of CSS in web development?", options: ["To style and layout web pages.", "To create database connections", "To handle user authentication", "To write server-side code"], correctOption: 0 },
        { question: "What does 'API' stand for in programming?", options: ["Application Programming Interface", "Application Process Interface", "Automated Programming Interface", "Active Programming Instruction"], correctOption: 0 },
        { question: "Which version control system is widely used for tracking changes in code and collaborating on software projects?", options: ["Mercurial", "Subversion", "Git", "CVS"], correctOption: 2 },
        { question: "In which programming language was the original 'Hello, World!' program famously written?", options: ["C++", "C", "Python", "Java"], correctOption: 1 },
        { question: "In SQL, what is the keyword used to sort the result set of a query??", options: ["SORT", "ORDER", "RANK", "CLASSIFY"], correctOption: 1 },
        { question: "In HTML, what is the purpose of the <div> tag?", options: ["To define a heading", "To define a paragraph", "To define a hyperlink.", "To define a generic container for other elements"], correctOption: 3 },
        // Add more questions here as needed
    ],
    techjokes: [
        { question: "Why do programmers prefer dark mode?", answer: "Because light attracts bugs." },
        { question: "Why did the computer break up with the internet?", answer: "It found someone with better connections." },
        { question: "Why do Java developers wear glasses?", answer: "Because they don't C#." },
        { question: "Why was the computer cold?", answer: "It left its Windows open." },
        { question: "How does a computer get drunk?", answer: "It takes screenshots." },
        { question: "Why was the smartphone so successful?", answer: "It had a lot of connections." },
        { question: "Why did the computer go to therapy?", answer: "It had too many bytes." },
        { question: "Why was the computer tired after a long day?", answer: "It had a hard drive." },
        { question: "What’s a computer’s favorite snack?", answer: "Microchips." },
        { question: "How do robots pay for things?", answer: "With cache." },
        { question: "Why was the cell phone wearing glasses?", answer: "It lost its contacts." },
        { question: "Why are computer screens so bad at relationships?", answer: "They keep refreshing their ex." },
        { question: "What’s a programmer’s favorite place to hang out?", answer: "The Loop." },
        { question: "Why did the computer cross the road?", answer: "To get to the other site." },
        { question: "What’s a coder’s favorite kind of music?", answer: "Algo-rhythm!" },
        { question: "Why don’t robots have brothers?", answer: "Because they only have trans-sisters!" },
        { question: "Why are keyboards always sleepy?", answer: "Because they have two shifts!" },
        { question: "How do cloud engineers stay so happy?", answer: "They’re always on cloud nine." },
        { question: "Why was the smartphone feeling so insecure?", answer: "It kept comparing itself to other models." },
        { question: "Why did the database administrator leave her partner?", answer: "Because he had one-to-many relationships." },
        { question: "Why did the password break up with the login?", answer: "It felt used." }
    ],
    chicagoTrivia: [
        { question: "What is the name of the famous skyscraper in Chicago that was the tallest building in the world when it was completed in 1973?", options: ["Tribune Tower", "Aon Center", "Willis Tower (formerly Sears Tower).", "John Hancock Center"], correctOption: 2 },
        { question: "Which Chicago neighborhood is known for its historic jazz and blues music scene?", options: ["Lincoln Park", "Wicker Park", "Hyde Park", "Bronzeville"], correctOption: 3 },
        { question: "What iconic pizza is Chicago known for?", options: ["Chicago-style deep-dish pizza.", "Neapolitan pizza", "New York-style pizza", "Sicilian pizza"], correctOption: 0 },
        { question: "In what year did the Great Chicago Fire occur?", options: ["1871", "1906", "1885", "1893"], correctOption: 0 },
        { question: "Which lake borders Chicago to the east?", options: ["Lake Michigan", "Lake Superior", "Lake Erie", "Lake Ontario"], correctOption: 0 },
        { question: "What is the name of the Chicago park that features a giant reflective sculpture known as 'The Bean'?", options: ["Humboldt Park", "Millennium Park", "Grant Park", "Lincoln Park"], correctOption: 1 },
        { question: "Which famous architect is known for designing many buildings in Chicago, including the Willis Tower?", options: ["Frank Lloyd Wright", "Mies van der Rohe", "Louis Sullivan", "Bruce Graham (along with architect Fazlur Rahman Khan)"], correctOption: 3 },
        { question: "What are the Chicago-based MLB teams?", options: ["Chicago Fire and Chicago Red Stars", "Chicago Cubs and Chicago Sox", "Chicago Cubs and Chicago Bears", "Chicago White Sox and Chicago Bulls"], correctOption: 1 },
        { question: "What is the name of the famous street in Chicago known for its shopping, including flagship stores?", options: ["Wacker Drive", "Clark Street", "State Street", "Michigan Avenue (particularly The Magnificent Mile)"], correctOption: 3 },
        { question: "Which river runs through downtown Chicago?", options: ["Kankakee River", "Chicago River", "Des Plaines River", "Illinois River"], correctOption: 1 },
        { question: "What annual festival celebrates Chicago’s rich food scene?", options: ["Chicago Gourmet", "Lollapalooza", "Chicago Blues Festival", "Chicago Jazz Festival"], correctOption: 0 },
        { question: "Who was the first African American mayor of Chicago?", options: ["Harold Washington", "Rahm Emanuel", "Lori Lightfoot", "Richard M. Daley"], correctOption: 0 },
        { question: "What major event is held annually in Grant Park, attracting music fans from around the world?", options: ["Chicago Blues Festival", "Chicago Gourmet", "Chicago Air and Water Show", "Lollapalooza"], correctOption: 3 },
        { question: "Which museum in Chicago is known for its dinosaur exhibits?", options: ["Field Museum of Natural History", "Museum of Science and Industry", "Art Institute of Chicago", "Shedd Aquarium"], correctOption: 0 },
        { question: "What is the name of the Chicago institution that houses a large collection of Impressionist and Post-Impressionist paintings?", options: ["Museum of Contemporary Art", "Field Museum", "Art Institute of Chicago", "DuSable Museum"], correctOption: 2 },
        { question: "Which historic theater in Chicago is known for its grand architecture and hosts many Broadway shows?", options: ["Chicago Theatre", "Lyric Opera", "Auditorium Theatre", "The Second City"], correctOption: 0 },
        { question: "What famous Chicago landmark was originally called the Sears Tower?", options: ["Hancock Center", "Tribune Tower", "Aon Center", "Willis Tower"], correctOption: 3 },
        { question: "What is the nickname for the Chicago-based baseball team known for their black and white uniforms?", options: ["Chicago Cubs", "Chicago White Sox", "Chicago Bears", "Chicago Fire"], correctOption: 1 },
        { question: "Which Chicago neighborhood is famous for its vibrant Latin culture and food?", options: ["Pilsen", "Wicker Park", "Lincoln Park", "South Loop"], correctOption: 0 },
        { question: "What famous Chicago landmark features a clock and is located on State Street?", options: ["Willis Tower", "Chicago Cultural Center", "Water Tower", "Marshall Field's (now Macy's)"], correctOption: 3 },
        { question: "What popular Chicago festival celebrates the city’s Irish heritage every March?", options: ["Chicago Blues Festival", "Chicago Irish Heritage Festival", " St. Patrick's Day Parade", "Chicago River Festival"], correctOption: 2 },
        { question: "Which river is known for being dyed green each year for St. Patrick’s Day?", options: ["Chicago River", "Des Plaines River", "Fox River", "Calumet River"], correctOption: 0 },
        { question: "What is the name of the iconic Chicago bridge known for its movable sections?", options: ["Michigan Avenue Bridge", "DuSable Bridge", "Wells Street Bridge", "LaSalle Street Bridge"], correctOption: 0 },
        { question: "Which Chicago building is the tallest in the city as of 2023?", options: ["Trump International Hotel and Tower", "John Hancock Center", "Aon Center", "Willis Tower"], correctOption: 3 },
        { question: "What famous Chicago-style sandwich is made with layers of Italian beef and giardiniera?", options: ["Italian beef sandwich", "Chicago-style hot dog", "Portillo's beef sandwich", "Italian sausage sandwich"], correctOption: 0 }
        // Add more questions here as needed
    ],
   
    funnyrandom: [
        { question: "What is machine learning?", options: ["Algorithms learning from data", "A type of database", "Computer networking", "None"], correctOption: 0 },
        { question: "What is deep learning?", options: ["Neural networks with many layers", "Surface-level learning", "Simple algorithms", "None"], correctOption: 0 },
        { question: "What is natural language processing?", options: ["AI understanding human language", "Programming language", "Cloud storage", "None"], correctOption: 0 },
        // Add more questions here as needed
    ],
    math: [
        { question: "What is 8 x 9?", options: ["63", "72", "81", "64"], correctOption: 1 },
        { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], correctOption: 1 },
        { question: "Solve for x: 2x + 3 = 11", options: ["4", "5", "6", "7"], correctOption: 0 },
        // Add more questions here as needed
    ],
};

function playCelebrationSound() {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
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
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    questionText.innerText = selectedQuestion.question;
    optionsContainer.innerHTML = ""; // Clear previous options

    if (category === 'techjokes') {
        // Create "Answer" button for tech jokes
        const answerButton = document.createElement("button");
        answerButton.className = "answer-btn btn btn-lg";
        answerButton.innerText = "Show Answer";
        
        // Create the answer text, initially hidden
        const answerText = document.createElement("p");
        answerText.className = "answer-text hidden"; // Hidden by default
        answerText.innerText = selectedQuestion.answer;
        
        answerButton.onclick = function () {
            answerText.classList.toggle("hidden"); // Toggle answer visibility on click
        };

        optionsContainer.appendChild(answerButton);
        optionsContainer.appendChild(answerText);
    } else {
        selectedQuestion.options.forEach((option, index) => {
            const optionBtn = document.createElement("button");
            optionBtn.className = "option-btn btn btn-lg btn-block";
            optionBtn.innerText = option;
            optionBtn.onclick = function () {
                handleAnswer(optionBtn, index, selectedQuestion.correctOption);
            };
            optionsContainer.appendChild(optionBtn);
        });
    }

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
