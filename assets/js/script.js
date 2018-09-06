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
var intervalId;
var incorrect;
var correct;


//SEND VAR TO HTML
$("#countDown").html(incorrect);

//SETS STATUS QUO -- PAGE BEFORE START
statusQ();

// SET TIMEOUTS FOR INCOMING DIVS ((QUESTIONS))
// setTimeout(askQuestionTwo, 16000);
// setTimeout(thirtytwoSeconds, 1000 * 32);
// setTimeout(fortyeightSeconds, 1000 * 48);
// setTimeout(sixtythreeSeconds, 1000 * 63);


click = $(".answer").on("click", function () {
    console.log(click);
    if (this.ID === "true") {
        this.css("visibilty", "hidden");
        correct++;
        
    }
});
// ----------FUNCTION PARTY--------------------------------------------
// NOTHING IS REAL
function statusQ() {
    $(".questionOne").css("display", "none");
    $(".questionTwo").css("display", "none");
    $(".questionThree").css("display", "none");
    $(".questionFour").css("display", "none");
    $(".questionFive").css("display", "none");
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
    $("#timerOne").text(countOne);
    $("#timerTwo").text(countTwo);
    $("#timerThree").text(countThree);
    $("#timerFour").text(countFour);
    $("#timerFive").text(countFive);
    //if the correct answer is not chosen the balloon will "pop" && if the correct answer IS chosen the balloon will pop 
};

//ASK QUESTION ONE
function askQuestionOne() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    questionOne = $(".questionOne");
    //questions balloon appears on screen && displays question and answers
    questionOne.css("display", "block");
    $("#firstQ").html(questions[0].question);
    //CHECK USER CLICK
    click = $("firstA").on("click", "#button", function () {
        if (click === questions[1].correct) {
            console.log(click);
            $(".questionOne").css("visibility", "hidden");
            correct++;
        }
    })
}


//ASK QUESTION TWO
function askQuestionTwo() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
    // setTimeout(function (askQuestionTwo) {

    $("#questionTwo").css("display", "block");
    $("#secondQ").html(questions[1].question);
}
// }, 16000);
// if (count === -1) {
//     $(".questionTwo").css("visibility", "hidden");
//     stop();
//     currentQuestion++;
//     count = 15;
//     incorrect++;
// }

function askQuestionThree() {
    $(".questionThree").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);


    $("#timerThree").text(countThree);
    $("#thirdQ").html(questions[3].question);

}
function askQuestionFour() {
    $(".questionFour").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#fourthQ").html(questions[4].question);


}
function askQuestionFive() {
    $(".questionFive").css("display", "block");
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);

    $("#fifthQ").html(questions[5].question);
}



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



}
