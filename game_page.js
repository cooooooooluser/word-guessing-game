p1s=0;
p2s=0;
p1n=localStorage.getItem("player1");
p2n=localStorage.getItem("player2");
document.getElementById("playerName1").innerHTML=p1n+" : ";
document.getElementById("playerName2").innerHTML=p2n+" : ";
document.getElementById("playerScore1").innerHTML=p1s;
document.getElementById("playerScore2").innerHTML=p2s;
document.getElementById("question").innerHTML="Question Turn - - - "+p1n;
document.getElementById("answer").innerHTML="Answer Turn - - - "+p2n;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    char1=word.charAt(1);
    length=Math.floor(word.length/2);
    char2=word.charAt(length);
    length1=word.length-1;
    char3=word.charAt(length1);

    word1=word.replace(char1,"_");
    word2=word1.replace(char2,"_");
    word3=word2.replace(char3,"_");

    console.log(word3);

    question="<h4 id='wordDisplay'> Q."+word3+"</h4>";
    input="<br> ANSWER : <input type='text' id='inputBox'>";
    button="<br> <br> <button class='btn btn-info' onclick='check()'> CHECK </button>";
    document.getElementById("output").innerHTML=question+input+button;
    document.getElementById("word").value="";
    

}