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
    startScreenEl.setAttribute("class", "hide");     //textContent = "";   
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
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i){
        var choicenode = document.createElement("button");
        choicenode.setAttribute("class", "choice");
        choicenode.setAttribute("value", choice);
        choicenode.textContent = choice;
        choicenode.addEventListener("click", questionClick);
        choicesEl.appendChild(choicenode);
    })

}

function questionClick () {
     var score = document.getElementById("final-score");

        if (choicenode === answer){
            score++;
        } else {
            time -- 15;

        }
    
        //event.preventDefault();
    // questionsEl.appendChild(currentQuestion);
}

function quizEnd () {
    for (var i = 0; i < questions.length; i ++){
        return;
    }
}

startBtn.addEventListener("click", startQuiz);