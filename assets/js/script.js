var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;



var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initalsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startBtn = document.getElementById("start");




function startQuiz () {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerID = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    getQuestion();
}
function clockTick () {
    time-- 
    timerEl.textContent = time;
    if (time <= 0){
        quizEnd()
    }
}
function getQuestion () {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = 
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i){
        var choicenode = document.createElement("button");
        choicenode.setAttribute("class", "choice");
        choicenode.setAttribute("value", choice);
        choicenode.textContent = choice;
        choicenode.onclick = questionClick;
        choicesEl.appendChild(choicenode);
    })

}

function questionClick () {
    questions.append(startBtn);
    
    }


function quizEnd () {

}

startBtn.onclick = startQuiz;