async function fetchFile() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


async function fetchDataAndStore() {
    try {
        const data = await fetchFile();
        if (data) {
            // Store the fetched data in a variable
            dataset = data;
            // Use the dataset variable here or pass it to another function
            //console.log(dataset);
            return dataset;
        }
    } catch (error) {
        // Handle errors
        console.error(error);
    }
}

async function updateLocalStorage() {
    const dataset = await fetchDataAndStore();
    for(let i=0; i<dataset.length; i++) {
        let jsonString = JSON.stringify(dataset[i]);
        localStorage.setItem(i,jsonString);
    }
}

