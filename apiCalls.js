require('dotenv').config();
const API_KEY = process.env.API_KEY;
async function searchWiki(topic) {
    
    const url = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${topic}&limit=1`;

    await fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('network error!');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        let val = data.pages[0].description;
        console.log(val);
        writeResponse(val);
        speak(val);
        
    })
    
    
    
    .catch(error => {
        console.log(error);
    })
}

function getJokes() {
    var limit = 1;

    fetch('https://api.api-ninjas.com/v1/jokes?limit=' + limit, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'p4dR1DH8aQQUvYZbHAlIoQ==MhL2SxAc0cnwNkTZ',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(result => {
        //console.log(result);
        writeResponse(result[0].joke);
        speak(result[0].joke);
    })
    .catch(error => {
        // console.error('Error fetching data:', error);
        speak('error fetching jokes!')
    });

    
}

async function fetchDictionary(word) {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}


async function fetchFacts(limit) {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

async function fetchRandomWord() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}



async function fetchRiddles() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

// Usage example








// function getTextSimilarity(text1, text2) {
//     return new Promise((resolve, reject) => {
//         fetch('https://api.api-ninjas.com/v1/textsimilarity', {
//             method: 'POST',
//             headers: {
//                 'X-Api-Key': 'p4dR1DH8aQQUvYZbHAlIoQ==MhL2SxAc0cnwNkTZ',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ "text_1": text1, "text_2": text2 })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(result => {
//             resolve(result);
//         })
//         .catch(error => {
//             reject(error);
//         });
//     });
// }



