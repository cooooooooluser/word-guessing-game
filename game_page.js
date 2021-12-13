p1s = 0;
p2s = 0;
p1n = localStorage.getItem("player1");
p2n = localStorage.getItem("player2");
document.getElementById("playerName1").innerHTML = p1n + " : ";
document.getElementById("playerName2").innerHTML = p2n + " : ";
document.getElementById("playerScore1").innerHTML = p1s;
document.getElementById("playerScore2").innerHTML = p2s;
document.getElementById("question").innerHTML = "Question Turn - - - " + p1n;
document.getElementById("answer").innerHTML = "Answer Turn - - - " + p2n;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    char1 = word.charAt(1);
    length = Math.floor(word.length / 2);
    char2 = word.charAt(length);
    length1 = word.length - 1;
    char3 = word.charAt(length1);

    word1 = word.replace(char1, "_");
    word2 = word1.replace(char2, "_");
    word3 = word2.replace(char3, "_");

    console.log(word3);

    question = "<h4 id='wordDisplay'> Q." + word3 + "</h4>";
    input = "<br> ANSWER : <input type='text' id='inputBox'>";
    button = "<br> <br> <button class='btn btn-info' onclick='check()'> CHECK </button>";
    document.getElementById("output").innerHTML = question + input + button;
    document.getElementById("word").value = "";


}

//question 2 player 1 answer
//question 2 player 2 answer

Questionturn = "player1";
Answerturn = "player2";
function check() {
    getAnswer = document.getElementById("inputBox").value;
    answer = getAnswer.toLowerCase();
    document.getElementById("inputBox").innerHTML= "";
    if (answer == word) {
        if (Answerturn == "player1") {
            p1s = p1s + 1;
            document.getElementById("playerScore1").innerHTML = p1s;
            document.getElementById("inputBox").innerHTML= "";
        }
        else {
            p2s = p2s + 1;
            document.getElementById("playerScore2").innerHTML = p2s;
            document.getElementById("inputBox").innerHTML= "";

        }
    }
    if (Questionturn == "player1") {
       Questionturn = "player2";
       document.getElementById("question").innerHTML = "Question Turn - - - " + p2n;
    }
    else {
       Questionturn = "player1"
       document.getElementById("question").innerHTML = "Question Turn - - - " + p1n;

    }
    if (Answerturn == "player1") {
       Answerturn = "player2";
       document.getElementById("answer").innerHTML = "Answer Turn - - - " + p2n;
    }
    else {
        Answerturn = "player1";
       document.getElementById("answer").innerHTML = "Answer Turn - - - " + p1n;
    }
    document.getElementById("output").innerHTML="";
}

