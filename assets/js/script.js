questions = [{
    question: "Which was NOT a passenger on the first Hot Air Balloon?",
    choices: ["A Rooster", "A Duck", "An Ape", "A Sheep"],
    correct: 2
}, {
    question: "True or Flase: Latex Balloons are biodegradable?",
    choices: ["True", "False"],
    correct: 0

}, {
    question: "The Rubber Balloon was invented in:",
    choices: ["1791", "1802", "1690", "1824"],
    correct: 3

}, {
    question: "Which is the only short film ever nominated for an Oscar other than BEST SHORT FILM?",
    choices: ["The Red Dragon", "The Red Shoes", "The Red Balloon", "The Red Violin"],
    correct: 2

}, {
    question: "___ is not a common material in modern day balloons",
    choices: ["Graphene", "Rubber", "Latex", "Nylon"],
    correct: 0

}, {
    question: "The song '99 Luftballons was written in response to:",
    choices: ["Latex killing Sea Turtles", "A drunk clown at the singers wedding", "Cold War paranoia", "A sick acid trip"],
    correct: 2
}];

//VARS
var countOne = 15;
var countTwo = 18;
var countThree = 20;
var countFour = 17;
var countFive = 25;
var countSix = 30;
var intervalId;
var incorrect = 0;
var correct = 0;


//SETS STATUS QUO -- PAGE BEFORE START
statusQ();

// SET TIMEOUTS FOR INCOMING DIVS ((QUESTIONS))
// setTimeout(askQuestionTwo, 16000);
// setTimeout(thirtytwoSeconds, 1000 * 32);
// setTimeout(fortyeightSeconds, 1000 * 48);
// setTimeout(sixtythreeSeconds, 1000 * 63);


// ----------FUNCTION PARTY--------------------------------------------
// NOTHING IS REAL
function statusQ() {
    $(".questionOne").css("display", "none");
    $(".questionTwo").css("display", "none");
    $(".questionThree").css("display", "none");
    $(".questionFour").css("display", "none");
    $(".questionFive").css("display", "none");
    $(".questionSix").css("display", "none");

    $("#restart").css("display", "none");
}

//WIN || LOSE
function win() {
    if (correct === 6) {
        alert("Congratulations, you are a real Airhead!");
    }
}

function restart() {
    $("#restart").on("click", function() {
    statusQ();
    countOne = 15;
    countTwo = 18;
    countThree = 20;
    countFour = 17;
    countFive = 25;
    countSix = 30;
    intervalId;
    incorrect = 0;
    correct = 0;
})
}

//START COUNTDOWN
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
    countOne--;
    countTwo--;
    countThree--;
    countFour--;
    countFive--;
    countSix--;
    $("#timerOne").text(countOne);
    $("#timerTwo").text(countTwo);
    $("#timerThree").text(countThree);
    $("#timerFour").text(countFour);
    $("#timerFive").text(countFive);
    $("#timerSix").text(countSix);

    if (countOne <= -1) {
        $(".questionOne").text("Float Away");
    } if (countTwo <= -1) {
        $(".questionTwo").text("Float Away");
    } if (countThree <= -1) {
        $(".questionThree").text("Float Away");
    } if (countFour <= -1) {
        $(".questionFour").text("Float Away");
    } if (countFive <= -1) {
        $(".questionFive").text("Float Away");
    } if (countSix <= -1) {
        $(".questionSix").text("Float Away");
        $("#restart").css("display", "block")
        $("#start").css("display", "none")

    }
};



//ASK QUESTION ONE
function askQuestionOne() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
    questionOne = $(".questionOne");
    //questions balloon appears on screen && displays question and answers
    questionOne.css("display", "block");
    $("#firstQ").html(questions[0].question);
}

//ASK QUESTION TWO
function askQuestionTwo() {
    $(".questionTwo").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#secondQ").html(questions[1].question);
}
// ASK QUESTION THREE
function askQuestionThree() {
    $(".questionThree").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#thirdQ").html(questions[2].question);

}
//ASK QUESTON FOUR
function askQuestionFour() {
    $(".questionFour").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#fourthQ").html(questions[4].question);

}
// ASK QUESTION FIVE
function askQuestionFive() {
    $(".questionFive").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#fifthQ").html(questions[3].question);
}
// ASK QUESTION six
function askQuestionSix() {
    $(".questionSix").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#sixthQ").html(questions[5].question);
}

// CLICK EVENT
$(".answer").on("click", function () {
    console.log($(this).text());
    if ($(this).text() === "An Ape") {
        correct++;
        $(".questionOne").css("visibility", "hidden");
    } if ($(this).text() === 'True') {
        correct++;
        $(".questionTwo").css("visibility", "hidden");
    } if ($(this).text() === '1824') {
        correct++;
        $(".questionThree").css("visibility", "hidden");
    } if ($(this).text() === 'Graphene') {
        correct++;
        $(".questionFour").css("visibility", "hidden");
    } if ($(this).text() === 'The Red Balloon') {
        correct++;
        $(".questionFive").css("visibility", "hidden");
    } if ($(this).text() === 'Cold War paranoia') {
        correct++;
        $(".questionSix").css("visibility", "hidden");
    } else (incorrect++);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);

    win();
});

// setTimeout(lose, 27000); {
//     alert("Not so good, maybe next time");
// }

//START GAME
function startGame() {
    // CLEAR INTERVAL TO PREVENT MULTIPLE CLICKS -- SET INTERVAL TO 1 SECOND
    //DISPLAY FIRST DIV ON CLICK -- MOD STATUSQ
    startTimer();
    askQuestionOne();
    askQuestionTwo();
    askQuestionThree();
    askQuestionFour();
    askQuestionFive();
    askQuestionSix();



}
