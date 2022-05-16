var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function Start(){
    document.getElementById("text").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text").innerHTML=content;
    if(content == "take my selfie"){
        speak();
    }
    

}

function speak(){
    var synth = window.speechSynthesis;
    speakD= "Taking your selfie in 5 seconds";
    var Utter = new SpeechSynthesisUtterance(speakD);
    synth.speak(Utter);

    Webcam.attach(camera);
    setTimeout(function(){
        snapshot();
        Save();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360, 
    height:250, 
    image_format:'jpg', 
    jpg_quality: 90

});

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'" />';
    });
}

function Save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click(); 

}


