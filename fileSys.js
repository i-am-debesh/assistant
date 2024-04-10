function addData(command,response) {
    let obj = {
        command:command,
        response:response
    }
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(localStorage.length, jsonString);
}

// async function fetchFile() {
//     try {
//         const response = await fetch('data.json');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// }


// async function fetchDataAndStore() {
//     try {
//         const data = await fetchFile();
//         if (data) {
//             // Store the fetched data in a variable
//             dataset = data;
//             // Use the dataset variable here or pass it to another function
//             //console.log(dataset);
//             return dataset;
//         }
//     } catch (error) {
//         // Handle errors
//         console.error(error);
//     }
// }

//////////////////////LOCAL storage BOT::::::::::::::::::::::::::

function storeData(command,response) {
    let idx = localStorage.length;
    let obj = {
        command : "",
        response :""
    }
    obj.command = command;
    obj.response = response;

    const jsonString = JSON.stringify(obj);
    localStorage.setItem(idx,jsonString);
}

async function giveResponse(command) {
    let validCommand = false;
    let checked = false;
    for(let i=0; i<localStorage.length; i++) {
        let currCommand = (JSON.parse(localStorage.getItem(i))).command;
        
        
        if(currCommand === command) {
            let currResponse = (JSON.parse(localStorage.getItem(i))).response;
            speak(currResponse);
            validCommand = true;
            
        }
    }
    
    if(validCommand === false ) {
        speak('Sorry , I dont know how to respond to this command. you can add this command by saying yes');
        
        let userInput;
        setTimeout(()=>{
            userInput = prompt('Enter yes to add this command');
            if(userInput.toLowerCase() === 'yes') {
                speak('enter response here');
                setTimeout(()=>{
                    let response = prompt('Enter response here:');
                    addData(command,response);
                    speak(`command added. Now when you say ${command} I will say response as ${response}`);
                },1000)
            }
        },5500);
        

    }
}


///////////////////////////////




