var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function record() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start(); 
}

recognition.onresult = function run(e){
   console.log(e);
   var content = e.results[0][0].transcript;
   console.log(content);
   document.getElementById("textbox").innerHTML = content;
   
if(content == "Take my selfie." || content == "take my selfie" || content == "Take my selfie"){
    console.log("taking selfie");
    speak();

}

}
function speak() {
    var talk = window.speechSynthesis;
    var talking = "Taking your selfie in 5 5   4 4  3 3   2 2   1 1 BAM SELFIE";
    var utterthis = new SpeechSynthesisUtterance(talking);
    talk.speak(utterthis);
   console.log(utterthis);
   Webcam.attach(camera);
   setTimeout(function(){
       snapshot(); save();
      }, 5000);
} 

Webcam.set({
    width: 360, height:250 , image_format: "png", png_quality: 90 
    
});
camera= document.getElementById("camera");




function snapshot(){
    Webcam.snap(function(data){
        document.getElementById("selfie").innerHTML= "<img id='self' src= '" + data + "' >";
    });
    

}

function save () {
     storage = document.getElementById("link");
     image = document.getElementById("self").src;
     link.href = image;
     link.click();
}