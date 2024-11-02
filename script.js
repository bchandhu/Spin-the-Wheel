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
        { question: "What is the primary purpose of AI in modern applications?", options: ["To improve graphics quality.", "To enable machines to perform tasks that require human intelligence.", "To provide high-speed internet access.", "To enhance physical security."], correctOption: 1 },
        { question: "Which technology allows for storing and managing data across multiple connected devices?", options: ["Cloud computing", "Augmented reality", "Internet of Things (IoT)", "Blockchain"], correctOption: 0 },
        { question: "What is blockchain primarily used for?", options: ["Hosting large media files.", "Managing smart home devices.", "Creating a secure, distributed ledger.", "Enhancing game graphics."], correctOption: 2 },
        { question: "Which field is using machine learning to analyze large sets of medical data to improve diagnosis?", options: ["Agriculture", "Finance", "Healthcare", "Retail"], correctOption: 2 },
        { question: "What does the term 'edge computing' refer to?", options: ["Performing data processing at or near the source of data.", "Storing all data on a centralized server.", "Enhancing the speed of Wi-Fi connections.", "Improving user experience with virtual reality."], correctOption: 0 },
        { question: "What is the primary benefit of 5G technology?", options: ["Faster data transfer speeds and lower latency.", "Increased power for mobile devices.", "Enhanced gaming graphics.", "Improved email functionality."], correctOption: 0 },
        { question: "Which company is known for creating the first smartphone?", options: ["Apple", "IBM", "Nokia", "Motorola"], correctOption: 1 }, 
        
        { 
            question: "What does a VPN primarily do?", 
            options: ["Improves device performance", "Secures internet connection", "Increases internet speed", "Tracks online activity"], 
            correctOption: 1 
        },
        { 
            question: "What is 'machine learning'?", 
            options: ["A machine maintenance technique", "A type of network protocol", "A method for allowing computers to learn from data", "A physical computing device"], 
            correctOption: 2 
        },
        { 
            question: "What is the purpose of a firewall in cybersecurity?", 
            options: ["Enhancing user interface", "Blocking unauthorized access", "Boosting internet speed", "Providing cloud storage"], 
            correctOption: 1 
        },
        { 
            question: "Which programming language is commonly used for data analysis?", 
            options: ["JavaScript", "Python", "HTML", "PHP"], 
            correctOption: 1 
        },
        { 
            question: "What is the main use of cloud storage?", 
            options: ["Storing files remotely", "Enhancing graphics", "Increasing network security", "Running offline applications"], 
            correctOption: 0 
        }
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
        { question: "What is a variable in programming?", options: ["A fixed number in a code.", "A container for storing data values.", "A function that changes code.", "A type of error in code."], correctOption: 1 },
        { question: "What is a loop in programming?", options: ["A code segment that executes only once.", "A function that changes code permanently.", "A process that repeats a block of code.", "A way to sort data in ascending order."], correctOption: 2 },
        { question: "Which of the following is a conditional statement?", options: ["while", "print", "if", "input"], correctOption: 2 },
        { question: "What is an array?", options: ["A way to write code for a specific platform.", "A list that can hold multiple values in a single variable.", "A function that deletes variables.", "A code that manages memory automatically."], correctOption: 1 },
        { question: "What is the purpose of a function in programming?", options: ["To take user input.", "To execute the entire program at once.", "To encapsulate a block of code for reuse.", "To convert data into binary."], correctOption: 2 },
        { question: "What is debugging?", options: ["Writing new code for an application.", "Creating bugs for testing code resilience.", "The process of finding and fixing errors in code.", "Running code without errors."], correctOption: 2 },
        {
        question: "What is an object in object-oriented programming?",
        options: [
            "A variable with a single value.",
            "A function that performs calculations.",
            "An instance of a class containing data and methods.",
            "A type of loop for repeating code."
        ],
        correctOption: 2
    },
    {
        question: "What is inheritance in object-oriented programming?",
        options: [
            "The ability to create a new class from an existing class.",
            "A function that stores data.",
            "A type of error that occurs at runtime.",
            "A feature that handles memory automatically."
        ],
        correctOption: 0
    },
    {
        question: "What is encapsulation in programming?",
        options: [
            "A way to hide data and methods within a class.",
            "A method for storing arrays in memory.",
            "A type of error in compiling code.",
            "A way to print values to the console."
        ],
        correctOption: 0
    },
        {
        question: "What does 'DRY' stand for in programming principles?",
        options: [
            "Do Run Your code",
            "Don't Repeat Yourself",
            "Dynamic Runtime Yield",
            "Direct Resource Yield"
        ],
        correctOption: 1
    },
    {
        question: "What is a recursive function?",
        options: [
            "A function that runs only once.",
            "A function that calls itself in its definition.",
            "A function that handles errors in code.",
            "A function that returns multiple values."
        ],
        correctOption: 1
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        options: [
            "To stop the program from running.",
            "To execute a function repeatedly.",
            "To exit a function and send a value back to the caller.",
            "To change the type of a variable."
        ],
        correctOption: 2
    },
        { 
        question: "What does 'Hello, World!' mean in programming?", 
        options: ["A program that connects online", "A security system test", "Signals a program is finished", "A basic code example"], 
        correctOption: 3 
    },
    { 
        question: "What language was used to create the World Wide Web?", 
        options: ["Python", "HTML", "Java", "C++"], 
        correctOption: 1 
    },
    { 
        question: "What is the most popular language for web development?", 
        options: ["Swift", "C#", "JavaScript", "Ruby"], 
        correctOption: 2 
    },
    { 
        question: "How does a 'for loop' work?", 
        options: ["Repeats code", "Runs only if true", "Stops all code", "Runs randomly"], 
        correctOption: 0 
    },
    { 
        question: "What does 'OOP' stand for in programming?", 
        options: ["Open Online Platform", "Official Operations Protocol", "Optimized Output Process", "Object-Oriented Programming"], 
        correctOption: 3 
    },
    { 
        question: "What’s a 'bug' in programming?", 
        options: ["A code improvement feature", "A security tool for programs", "An error in the code", "A type of software update"], 
        correctOption: 2 
    }
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
        { question: "Why did pirates wear eye patches?", options: ["Pirate chic", "Treasure radar", "Secret map storage", "Night vision training"], correctOption: 3 },
        { question: "Which fruit can naturally float on water?", options: ["Apple", "Banana", "Grape", "Fruits never float"], correctOption: 0 },
        { question: "Bananas are berries and strawberries are fruits?", options: ["False", "True", "Both are fruits", "Both are berries"], correctOption: 1 },
        { question: "Why does honey never spoil, even after thousands of years?", options: ["Bee magic", "Low water content", "It’s too sweet for germs", "Honey spoils"], correctOption: 1 },
        { question: "What’s the national animal of Scotland?", options: ["Loch Ness Monster", "Highland Cow", "Unicorn", "Bear in a skirt"], correctOption: 2 },
        { question: "How long is a snail’s nap?", options: ["10 minutes", "One month", "Up to three years", "Snails never sleep"], correctOption: 2 },
        { question: "Which mammal can’t jump?", options: ["Snail", "Monkey", "Elephant", "Tiger"], correctOption: 2 },
        { question: "What’s a 'jiffy'?", options: ["A snack break", "A tiny fraction of a second", "A mini peanut butter jar", "A squirrel’s quick dash"], correctOption: 1 },
        { question: "What’s the world’s largest snowflake on record?", options: ["2 inches long", "15 inches wide", "3 feet wide", "The size of a car hood"], correctOption: 1 },
        { question: "Why do wombats have cube-shaped poop?", options: ["For better stacking!", "To mark territory!", "To impress other wombats!", "It’s not true!"], correctOption: 1 },
        { question: "What was bubble wrap originally invented for?", options: ["For packing peanuts", "As a stress relief toy", "To make fun party decorations", "To be wallpaper"], correctOption: 3 },
        { question: "Which animal can laugh?", options: ["Dolphin", "Rat", "Cat", "Goldfish"], correctOption: 1 },
        { question: "How big is a blue whale’s heart?", options: ["The size of a watermelon", "The size of a basketball", "As big as a refrigerator", "As big as a small car"], correctOption: 3 },
        { question: "How long is a day on Venus compared to a year?", options: ["30 Earth days", "5 Earth days", "It is longer than a year!", "A day is just 10 hours"], correctOption: 2 },
        { question: "What happens to your ear size as you age?", options: ["Shrink", "Keep growing", "Nothing", "Ears become floppy"], correctOption: 1 },
        { question: "Why are flamingos pink?", options: ["They eat shrimps", "They’re born that way", "They soak in pink ponds", "It’s a fashion statement"], correctOption: 0 },
        { question: "How did yo-yos first gain popularity?", options: ["A royal toy for kings", "Invented by a magician", "As a weapon in ancient Greece", "Popular in the circus"], correctOption: 2 },
        { question: "Which letter doesn’t appear in any U.S. state name?", options: ["Z", "X", "J", "Q"], correctOption: 3 },
        { question: "Which beverage was originally a medicinal tonic?", options: ["Coffee", "Tea", "Cola", "Beer"], correctOption: 2 },
        { question: "How long would it take to watch everything on Netflix?", options: ["100 hours", "1,000 hours", "10,000 hours", "About 4 years"], correctOption: 3 },
        { question: "Why do we say 'O.K.'?", options: ["Overly kind", "Originally known", "Oll korrect", "Open knowledge"], correctOption: 2 },
        // Add more questions here as needed
    ],
    math: [
        { question: "The Magic Circle: Ten numbers form a circle. Each number equals the sum of its two neighbors. The total sum is 300. What is each number?", options: ["15", "30", "45", "60"], correctOption: 1 },
        { question: "Pirates and Gold: Five pirates must split 100 coins. The most senior pirate makes the proposal, and a rejected proposal results in them being thrown overboard. What’s the safest proposal for the senior pirate?", options: ["Keep 99 coins", "Keep 98 coins and give 1 to two others", "Keep 50 coins", "Share equally"], correctOption: 1 },
        { question: "Light Switch Problem: A row of 100 light switches is initially off. 100 people toggle switches, following a certain pattern. Which switches remain on?", options: ["All switches", "Only switches 1, 2, and 3", "Switches 1, 4, 9, 16, 25... up to 100", "Every other switch"], correctOption: 2 },
        { question: "Three People, One Hat: Three people each wear a hat, either red or blue. They can see others’ hats but not their own and must guess their hat color. What’s the best strategy?", options: ["Guess randomly", "Assume an even number of hats are the same color", "Pass the turn", "Guess opposite of what they see"], correctOption: 1 },
        { question: "Infinity Pool: Water is pumped into an infinite pool at a rate of 2 gallons per minute. A finite portion of the pool grows logarithmically. How much water fills it in 10 minutes?", options: ["5 gallons", "4.78 gallons", "20 gallons", "10 gallons"], correctOption: 1 },
        { question: "Meeting Friends: Two friends randomly arrive at a coffee shop between 2 and 3 p.m., waiting up to 15 minutes for each other. What’s the probability they meet?", options: ["25%", "43.75%", "50%", "75%"], correctOption: 1 },
        { question: "Fibonacci Fun: What is the sum of the first 100 Fibonacci numbers?", options: ["573147844013817084100", "573147844013817084101", "1000000000000000000000", "12345678901234567890"], correctOption: 0 },
        { question: "Paradox of the Trains: Two trains 60 miles apart move toward each other, one at 30 mph and the other at 20 mph. A bird flies back and forth at 50 mph. How far does the bird travel?", options: ["30 miles", "60 miles", "90 miles", "120 miles"], correctOption: 1 },
        { question: "Monty Hall Problem: You choose one of three doors. After revealing a goat behind another door, the host lets you switch. Should you switch?", options: ["Yes, because it improves your chance", "No, the odds stay the same", "Yes, but only if the host smiles", "It doesn’t matter"], correctOption: 0 },
        { question: "Tiling Puzzle: How many ways can you tile a 10x10 grid using 1x2 dominoes?", options: ["1024", "2048", "51205", "100000"], correctOption: 2 },
        { question: "Magic Square Mystery: In a 3x3 magic square with numbers 1 through 9, what is the magic sum of each row, column, and diagonal?", options: ["9", "12", "15", "18"], correctOption: 2 },
        { question: "Elevator Paradox: Why are you more likely to wait for an elevator above you in a 10-story building?", options: ["Random chance", "More floors above than below", "Elevators are faster when going up", "Elevators are always above ground floor"], correctOption: 1 },
        { question: "Area of the Weird Shape: What is the area of overlap of four quarter circles in a square?", options: ["π - 2", "π", "2π", "π + 2"], correctOption: 0 },
        { question: "The Number Challenge: What is the smallest positive integer divisible by each number from 1 to 10?", options: ["240", "360", "420", "2520"], correctOption: 3 },
        { question: "Dice Rolls: What’s the probability that the sum of two dice rolls is prime?", options: ["1/2", "5/12", "1/3", "1/4"], correctOption: 1 },
        { question: "A Coin Flip Game: Two players flip a coin, taking turns. The first heads wins. What’s the probability the first player wins?", options: ["1/2", "2/3", "3/4", "1/4"], correctOption: 1 },
        { question: "Twin Prime Problem: What is the largest known pair of twin primes?", options: ["(3, 5)", "(11, 13)", "2996863034895 × 2^1290000 ± 1", "(41, 43)"], correctOption: 2 },
        { question: "Zeno’s Paradox Revisited: Achilles runs 10 times faster than a tortoise, who has a 10-meter head start. How long does it take him to catch up?", options: ["1 second", "9 seconds", "10 seconds", "10/9 seconds"], correctOption: 3 },
        { question: "Geometry in Motion: If a bicycle wheel has a 0.5-meter radius, how far does it travel in one complete rotation?", options: ["π meters", "2π meters", "0.5π meters", "4π meters"], correctOption: 1 },
        { question: "Magic Number Triangle: Arrange the numbers 1 through 9 in a triangle so each side has the same sum. What is the sum?", options: ["15", "17", "20", "25"], correctOption: 1 }
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
