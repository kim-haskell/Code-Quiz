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
    time--; 
    timerEl.textContent = time;
    if (time <= 0){
        quizEnd();   
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
    if (this.value !== questions[currentQuestionIndex].answer) {
        time = time - 15;
        if (time < 0){
            time = 0;
        }
        timerEl.textContent = time
        feedbackEl.textContent = "Wrong";
    } else {
        feedbackEl.textContent = "Correct!";
    }
        
     currentQuestionIndex++;
     if (currentQuestionIndex === questions.length){
         quizEnd();
     } else {
         getQuestion();
     }
}


function quizEnd () {
   clearInterval(timerID);
   var endScreenEl = document.getElementById("end-screen");
   endScreenEl.removeAttribute("class");
   var finalScoreEl = document.getElementById("final-score");
   finalScoreEl.textContent = time;
   questionsEl.setAttribute("class", "hide"); 
    
}

function submitScore () {
    var intials = document.getElementById("submit");
    $(this).val("#intials");
    localStorage.setItem(intials);

    $("#submit").val(localStorage.getItem("#intials"));
}



startBtn.addEventListener("click", startQuiz);

