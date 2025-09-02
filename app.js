
let questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "declare"],
        correctAnswer: "var",
        time: 30,
        marks: 10
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correctAnswer: "Float",
        time: 30,
        marks: 10
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        correctAnswer: "//",
        time: 20,
        marks: 5
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        correctAnswer: "Netscape",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is used to print output in JavaScript?",
        options: ["cout()", "console.log()", "print()", "document.write()"],
        correctAnswer: "console.log()",
        time: 30,
        marks: 10
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["null", "0", "undefined", "empty string"],
        correctAnswer: "undefined",
        time: 30,
        marks: 10
    },
    {
        question: "Which operator is used to compare both value and type?",
        options: ["==", "===", "!=", "!=="],
        correctAnswer: "===",
        time: 25,
        marks: 10
    },
    {
        question: "Which function is used to parse a string into an integer?",
        options: ["parseInt()", "Number()", "parseFloat()", "toString()"],
        correctAnswer: "parseInt()",
        time: 25,
        marks: 10
    },
    {
        question: "What is the output of: typeof null?",
        options: ["null", "object", "undefined", "boolean"],
        correctAnswer: "object",
        time: 30,
        marks: 10
    },
    {
        question: "Which array method adds an element at the end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
        time: 20,
        marks: 5
    },
    {
        question: "Which array method removes the last element?",
        options: ["push()", "pop()", "shift()", "splice()"],
        correctAnswer: "pop()",
        time: 20,
        marks: 5
    },
    {
        question: "Which keyword is used to define a constant variable?",
        options: ["const", "let", "var", "static"],
        correctAnswer: "const",
        time: 25,
        marks: 10
    },
    {
        question: "What is the correct way to write an arrow function?",
        options: ["function => {}", "() => {}", "=> function()", "func -> {}"],
        correctAnswer: "() => {}",
        time: 30,
        marks: 10
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        options: ["for loop", "while loop", "do...while loop", "foreach"],
        correctAnswer: "do...while loop",
        time: 30,
        marks: 10
    },
    {
        question: "Which object is the root of JavaScript in a browser?",
        options: ["document", "window", "global", "console"],
        correctAnswer: "window",
        time: 30,
        marks: 10
    },
    {
        question: "Which function is used to convert JSON into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toJSON()"],
        correctAnswer: "JSON.parse()",
        time: 30,
        marks: 10
    },
    {
        question: "Which function converts a JavaScript object into a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "object.toJSON()", "JSON.toString()"],
        correctAnswer: "JSON.stringify()",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is used to select an element by its ID in DOM?",
        options: ["getElementById()", "getElementsByClass()", "querySelectorAll()", "getId()"],
        correctAnswer: "getElementById()",
        time: 30,
        marks: 10
    },
    {
        question: "Which event is triggered when a user clicks on an element?",
        options: ["onmouseover", "onchange", "onclick", "onload"],
        correctAnswer: "onclick",
        time: 25,
        marks: 10
    },
    {
        question: "Which keyword is used to handle errors in JavaScript?",
        options: ["try...catch", "error...handle", "catch...throw", "throw...handle"],
        correctAnswer: "try...catch",
        time: 30,
        marks: 10
    },
    {
        question: "What will `2 + '2'` return?",
        options: ["22", "4", "NaN", "undefined"],
        correctAnswer: "22",
        time: 25,
        marks: 10
    },
    {
        question: "What will `2 - '2'` return?",
        options: ["0", "22", "NaN", "undefined"],
        correctAnswer: "0",
        time: 25,
        marks: 10
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        options: ["concat()", "join()", "toString()", "slice()"],
        correctAnswer: "join()",
        time: 30,
        marks: 10
    },
    {
        question: "Which statement is used to exit a loop in JavaScript?",
        options: ["exit", "return", "break", "stop"],
        correctAnswer: "break",
        time: 30,
        marks: 10
    },
    {
        question: "What will be the output of `Boolean('')`?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: "false",
        time: 25,
        marks: 10
    },
    {
        question: "What is NaN in JavaScript?",
        options: ["Not a Name", "Not a Number", "No any Null", "Negative Number"],
        correctAnswer: "Not a Number",
        time: 30,
        marks: 10
    },
    {
        question: "Which method removes the first element from an array?",
        options: ["shift()", "pop()", "splice()", "slice()"],
        correctAnswer: "shift()",
        time: 30,
        marks: 10
    },
    {
        question: "Which keyword is used with promises?",
        options: ["async/await", "wait/then", "hold/release", "fetch/return"],
        correctAnswer: "async/await",
        time: 30,
        marks: 10
    },
    {
        question: "Which function executes a callback after a given time?",
        options: ["setInterval()", "setTimeout()", "setDelay()", "waitFor()"],
        correctAnswer: "setTimeout()",
        time: 30,
        marks: 10
    },
    {
        question: "Which function executes repeatedly after a given interval?",
        options: ["setTimeout()", "setInterval()", "setRepeat()", "setLoop()"],
        correctAnswer: "setInterval()",
        time: 30,
        marks: 10
    },
    {
        question: "What is the output of `typeof NaN`?",
        options: ["NaN", "undefined", "number", "string"],
        correctAnswer: "number",
        time: 25,
        marks: 10
    },
    {
        question: "Which operator is used for logical AND?",
        options: ["&&", "||", "&", "AND"],
        correctAnswer: "&&",
        time: 25,
        marks: 10
    },
    {
        question: "Which operator is used for logical OR?",
        options: ["&&", "||", "|", "OR"],
        correctAnswer: "||",
        time: 25,
        marks: 10
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["class", "function", "object", "struct"],
        correctAnswer: "class",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is called when an object is created from a class?",
        options: ["__init__", "constructor", "create", "new"],
        correctAnswer: "constructor",
        time: 30,
        marks: 10
    },
    {
        question: "Which operator is used to check if a property exists in an object?",
        options: ["in", "exists", "contains", "has"],
        correctAnswer: "in",
        time: 30,
        marks: 10
    },
    {
        question: "Which object is used to work with dates in JavaScript?",
        options: ["Time", "Calendar", "Date", "Clock"],
        correctAnswer: "Date",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is used to add new elements at the beginning of an array?",
        options: ["push()", "unshift()", "splice()", "concat()"],
        correctAnswer: "unshift()",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is used to filter elements in an array?",
        options: ["map()", "reduce()", "filter()", "sort()"],
        correctAnswer: "filter()",
        time: 30,
        marks: 10
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Manager", "Document Oriented Module", "Display Object Method"],
        correctAnswer: "Document Object Model",
        time: 30,
        marks: 10
    }
];

let questionIndex = 0
let totalMarks = 0
let displayQuestion = document.getElementById("displayQuestion")
let displayOptions = document.getElementById("displayOptions")

let currentQuestionNo = document.getElementById("currentQuestionNo")
let totalQuestionNumber = document.getElementById("totalQuestionNumber")
let timerDisplay = document.getElementById("timerDisplay")
let timer = questions[0].time

let checkAnswer = (a,b,c) => {
    if(a === b){
        totalMarks += c
    }
    console.log(totalMarks)
    nextQuestion()
}

let renderQuestion = () => {

    let currentQuestion = questions[questionIndex]

    currentQuestionNo.innerHTML = questionIndex + 1
    totalQuestionNumber.innerHTML = questions.length
    displayQuestion.innerHTML = currentQuestion.question

    displayOptions.innerHTML = ""
    for(let i=0; i< currentQuestion.options.length; i++){
        let option = currentQuestion.options[i]
        displayOptions.innerHTML += `<button onclick="checkAnswer('${currentQuestion.correctAnswer}','${option}',${currentQuestion.marks})">${option}</button>`
    }
        
    }

    renderQuestion()

let nextQuestion = () => {
    if(questionIndex + 1 === questions.length){
        alert("Quiz Over! Your total marks" + totalMarks)
    } else {
        questionIndex++
        renderQuestion()
        timer = questions[questionIndex].time
        timerDisplay.innerHTML = timer

    }
}

let prevQuestion = () => {
    questionIndex--
    renderQuestion()
}

const checkTimer = () => {
    if(timer === 0){
        nextQuestion()
        timer = currentQuestion.time
    } else {
        timer--
    }
    timerDisplay.innerHTML = timer
}

setInterval(checkTimer, 1000)