if(localStorage.length === 0 && localStorage.length < 30) {
  updateLocalStorage();
}

const resultArea = document.getElementById('result');
let currCommand = 'empty command';
///////////////////////Listening::///////////////////////
let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

recognition.onresult = function(event) {
  let result = event.results[event.results.length - 1][0].transcript;
  document.getElementById('result').textContent = `Command: ${result}`;
  
  processCommand(result);
};

recognition.onerror = function(event) {
  console.error('Speech recognition error:', event.error);
};


function startListening() {

  const area = document.getElementById('riddle-ans');
  area.textContent = '';
  //recognition.start();
  const msg = prompt();
  //console.log(msg);
  resultArea.textContent = `Command: ${msg}`;
  if(msg.length !== 0 && msg !== 'again') {
    processCommand(msg);
    currCommand = msg;
  }else if(msg === 'again') {
    processCommand(currCommand);
  }
}
////////////////////////////////////////////

///////////////////////Speaking:://////////////////////
function setVoice(idx) {
    let voices = window.speechSynthesis.getVoices();
    for(let i=0; i<voices.length; i++) {
        if (i === idx) {
            return voices[i];
        }
    }
}
function speak(response,isRiddle=false) {
  // Use default voice
  let speech = new SpeechSynthesisUtterance();
  speech.text = response;
  speech.voice = setVoice(4);//3

  if(isRiddle === false) {
      writeResponse(response);
  }
  speechSynthesis.speak(speech);
}

//////////////EMNI:::::::

let voices = window.speechSynthesis.getVoices();
voices.forEach(voice =>{
    //console.log(voice);
});
//////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////