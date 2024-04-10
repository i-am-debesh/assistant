const respArea = document.getElementById('response');
function writeResponse(res) {
    respArea.textContent = `Response: ${res}`;
}
let greetings = ['hi','hello','hey','hi there',"what's up",'hey','hey there','hello there'];
function isGreeting(command) {
    for(let i=0; i<greetings.length; i++) {
        if(command.startsWith(greetings[i])) {
            return true;
        }
    }
    return false;
}
function processCommand(command) {
    let str = command.toLowerCase();

    if(isGreeting(str)) {
        giveResponse('hi');
    }
    else {

    
        if(str.startsWith("search")) {
            let s = str.slice(7);
            speak(`Searching for ${s}`);
            
            searchWiki(s);
            

        }
        else if(str.includes('ask me a riddle')) {
            (async () => {
                try {
                    const result = await fetchRiddles();
                    //console.log(result);
                    const ans = result[0].answer;
                    const q = result[0].question;
                    
                    speak(q);

                    setTimeout(()=>{
                        const ansArea = document.getElementById('riddle-ans');
                        ansArea.textContent = `Answer is: ${ans}`;
                        speak(ans,true);

                    },7000)
                    
                    
                    

                } catch (error) {
                    console.error('Error fetching riddles:', error);
                }
            })();
        }
        else if(str.includes('random words') || str.includes('random word')) {
            (async () => {
                try {
                    const result = await fetchRandomWord();
                    //console.log(result);
                    speak(result.word);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        }
        else if(str.startsWith('solve')) {
            let problem = str.slice(6);
            speak(`${problem} is ${solve(problem)}`)
        }
        else if(str.includes('tell me a joke')) {
            getJokes();
        }
        else if(str.includes('current time')) {
            
            speak(`current time is ${getTime()}`);
            
        }
        else if(str.includes('current date') || str.includes('what day today')) {
            speak(getcurrentDate());
            
        }
        else if(str.startsWith('meaning of')) {
            (async () => {
                try {
                    const word = str.slice(11);
                    const result = await fetchDictionary(word);
                    speak(result.definition);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        }
        else if(str.includes('tell me a fact') || str.includes('random fact')) {
            (async () => {
                try {
                    const limit = 3;
                    const result = await fetchFacts(limit);
                    writeResponse(result[0].fact)
                    speak(result[0].fact);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        }
        
        else {
            giveResponse(str);
        }
    }
}



